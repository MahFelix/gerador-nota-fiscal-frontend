import { useState, useEffect } from 'react';
import api from '../../services/api';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import GraficoBalancoDiario from '../GraficoBlalancoDiario';
import {
  Container,
  Titulo,
  BarraFerramentas,
  GrupoFiltros,
  InputFiltro,
  GrupoBotoes,
  BotaoPDF,
  BotaoExcel,
  BotaoLibreOffice,
  BotaoWord,
  TabelaContainer,
  Tabela,
  CabecalhoTabela,
  LinhaCabecalho,
  CelulaCabecalho,
  CorpoTabela,
  LinhaTabela,
  CelulaTabela,
  InputEdicao,
  GrupoAcoes,
  BotaoSalvar,
  BotaoCancelar,
  BotaoEditar
} from './styles';

const TabelaGestaoComponent = () => {
  const [notas, setNotas] = useState([]);
  const [filtroCliente, setFiltroCliente] = useState('');
  const [filtroProduto, setFiltroProduto] = useState('');
  const [ordem, setOrdem] = useState({ coluna: '', crescente: true });
  const [editando, setEditando] = useState(null);
  const [dadosEditados, setDadosEditados] = useState({});

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        const response = await api.get('/listar');
        setNotas(response.data);
      } catch (error) {
        console.error('Erro ao buscar notas fiscais:', error);
      }
    };
    fetchNotas();
  }, []);

  const iniciarEdicao = (nota) => {
    setEditando(nota.id);
    setDadosEditados({ ...nota });
  };

  const cancelarEdicao = () => {
    setEditando(null);
    setDadosEditados({});
  };

  const salvarEdicao = async () => {
    try {
      await api.put(`/${editando}`, dadosEditados);
      setNotas(notas.map(nota => 
        nota.id === editando ? { ...dadosEditados } : nota
      ));
      setEditando(null);
      setDadosEditados({});
    } catch (error) {
      console.error('Erro ao atualizar nota:', error);
    }
  };

  const handleCampoEditado = (campo, valor) => {
    setDadosEditados(prev => ({
      ...prev,
      [campo]: campo === 'valor' ? parseFloat(valor) : valor
    }));
  };

  const handleOrdenar = (coluna) => {
    const crescente = ordem.coluna === coluna ? !ordem.crescente : true;
    setOrdem({ coluna, crescente });
    const notasOrdenadas = [...notas].sort((a, b) => {
      if (a[coluna] < b[coluna]) return crescente ? -1 : 1;
      if (a[coluna] > b[coluna]) return crescente ? 1 : -1;
      return 0;
    });
    setNotas(notasOrdenadas);
  };

  const handleFiltrar = () => {
    return notas.filter(nota =>
      nota.cliente.toLowerCase().includes(filtroCliente.toLowerCase()) &&
      nota.produto.toLowerCase().includes(filtroProduto.toLowerCase())
    );
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.text('Relatório de Notas Fiscais', 20, 20);
    handleFiltrar().forEach((nota, index) => {
      doc.text(`${index + 1}. Cliente: ${nota.cliente} | Produto: ${nota.produto} | Valor: R$ ${nota.valor}`, 20, 30 + index * 10);
    });
    doc.save('relatorio_notas_fiscais.pdf');
  };

  const gerarExcel = () => {
    const dados = handleFiltrar().map((nota, index) => ({
      Nº: index + 1,
      Cliente: nota.cliente,
      Produto: nota.produto,
      Valor: nota.valor,
      Data: nota.dataEmissao
    }));
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Notas Fiscais');
    XLSX.writeFile(workbook, 'relatorio_notas_fiscais.xlsx');
  };

  const abrirLibreOffice = () => {
    const dados = handleFiltrar().map(nota => ({
      Cliente: nota.cliente,
      Produto: nota.produto,
      Valor: `R$ ${nota.valor.toFixed(2)}`,
      'Data Emissão': new Date(nota.dataEmissao).toLocaleDateString()
    }));

    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Notas Fiscais');
    XLSX.writeFile(workbook, 'notas_fiscais.ods', { bookType: 'ods' });
  };

  const abrirWord = () => {
    const dados = handleFiltrar();
    let conteudo = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <title>Notas Fiscais</title>
        <style>
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #000; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Relatório de Notas Fiscais</h1>
        <table>
          <tr>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Valor</th>
            <th>Data Emissão</th>
          </tr>
    `;

    dados.forEach(nota => {
      conteudo += `
        <tr>
          <td>${nota.cliente}</td>
          <td>${nota.produto}</td>
          <td>R$ ${nota.valor.toFixed(2)}</td>
          <td>${new Date(nota.dataEmissao).toLocaleDateString()}</td>
        </tr>
      `;
    });

    conteudo += `</table></body></html>`;

    const blob = new Blob([conteudo], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'notas_fiscais.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Container>
      <Titulo>Gestão de Notas Fiscais</Titulo>
      <GraficoBalancoDiario notas={notas} />
      <BarraFerramentas>
        <GrupoFiltros>
          <InputFiltro 
            placeholder='Filtrar Cliente' 
            value={filtroCliente}
            onChange={(e) => setFiltroCliente(e.target.value)}
          />
          <InputFiltro 
            placeholder='Filtrar Produto' 
            value={filtroProduto}
            onChange={(e) => setFiltroProduto(e.target.value)}
          />
        </GrupoFiltros>
        
        <GrupoBotoes>
          <BotaoPDF onClick={gerarPDF}>
            Exportar PDF
          </BotaoPDF>
          <BotaoExcel onClick={gerarExcel}>
            Exportar Excel
          </BotaoExcel>
          <BotaoLibreOffice onClick={abrirLibreOffice}>
            Abrir no LibreOffice
          </BotaoLibreOffice>
          <BotaoWord onClick={abrirWord}>
            Abrir no Word
          </BotaoWord>
        </GrupoBotoes>
      </BarraFerramentas>

      <TabelaContainer>
        <Tabela>
          <CabecalhoTabela>
            <LinhaCabecalho>
              <CelulaCabecalho 
                onClick={() => handleOrdenar('cliente')}
                clickable
                minWidth="150px"
              >
                Cliente {ordem.coluna === 'cliente' && (ordem.crescente ? '↑' : '↓')}
              </CelulaCabecalho>
              <CelulaCabecalho 
                onClick={() => handleOrdenar('produto')}
                clickable
                minWidth="150px"
              >
                Produto {ordem.coluna === 'produto' && (ordem.crescente ? '↑' : '↓')}
              </CelulaCabecalho>
              <CelulaCabecalho 
                onClick={() => handleOrdenar('valor')}
                clickable
                align="right"
                minWidth="100px"
              >
                Valor {ordem.coluna === 'valor' && (ordem.crescente ? '↑' : '↓')}
              </CelulaCabecalho>
              <CelulaCabecalho 
                onClick={() => handleOrdenar('dataEmissao')}
                clickable
                minWidth="120px"
              >
                Data de Emissão {ordem.coluna === 'dataEmissao' && (ordem.crescente ? '↑' : '↓')}
              </CelulaCabecalho>
              <CelulaCabecalho minWidth="150px">
                Ações
              </CelulaCabecalho>
            </LinhaCabecalho>
          </CabecalhoTabela>
          <CorpoTabela>
            {handleFiltrar().map((nota) => (
              <LinhaTabela key={nota.id}>
                <CelulaTabela>
                  {editando === nota.id ? (
                    <InputEdicao
                      type="text"
                      value={dadosEditados.cliente || ''}
                      onChange={(e) => handleCampoEditado('cliente', e.target.value)}
                    />
                  ) : (
                    nota.cliente
                  )}
                </CelulaTabela>
                <CelulaTabela>
                  {editando === nota.id ? (
                    <InputEdicao
                      type="text"
                      value={dadosEditados.produto || ''}
                      onChange={(e) => handleCampoEditado('produto', e.target.value)}
                    />
                  ) : (
                    nota.produto
                  )}
                </CelulaTabela>
                <CelulaTabela align="right">
                  {editando === nota.id ? (
                    <InputEdicao
                      type="number"
                      step="0.01"
                      value={dadosEditados.valor || ''}
                      onChange={(e) => handleCampoEditado('valor', e.target.value)}
                      align="right"
                    />
                  ) : (
                    `R$ ${nota.valor?.toFixed(2)}`
                  )}
                </CelulaTabela>
                <CelulaTabela>
                  {editando === nota.id ? (
                    <InputEdicao
                      type="date"
                      value={dadosEditados.dataEmissao ? dadosEditados.dataEmissao.split('T')[0] : ''}
                      onChange={(e) => handleCampoEditado('dataEmissao', e.target.value)}
                    />
                  ) : (
                    new Date(nota.dataEmissao).toLocaleDateString()
                  )}
                </CelulaTabela>
                <CelulaTabela>
                  <GrupoAcoes>
                    {editando === nota.id ? (
                      <>
                        <BotaoSalvar onClick={salvarEdicao}>
                          Salvar
                        </BotaoSalvar>
                        <BotaoCancelar onClick={cancelarEdicao}>
                          Cancelar
                        </BotaoCancelar>
                      </>
                    ) : (
                      <BotaoEditar onClick={() => iniciarEdicao(nota)}>
                        Editar
                      </BotaoEditar>
                    )}
                  </GrupoAcoes>
                </CelulaTabela>
              </LinhaTabela>
            ))}
          </CorpoTabela>
        </Tabela>
      </TabelaContainer>
    </Container>
  );
};

export default TabelaGestaoComponent;