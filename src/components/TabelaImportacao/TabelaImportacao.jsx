import React, { useState, useCallback } from 'react';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import axios from 'axios';
import { FileUp, File as FilePdf, FileSpreadsheet, Edit2, Trash2, Save, X, Table } from 'lucide-react';
import {
  Container,
  Titulo,
  AreaUpload,
  InputArquivo,
  BotaoUpload,
  BarraFerramentas,
  GrupoBotoes,
  BotaoPDF,
  BotaoExcel,
  TabelaContainer,
  Tabela,
  CabecalhoTabela,
  LinhaCabecalho,
  CelulaCabecalho,
  CorpoTabela,
  LinhaTabela,
  CelulaTabela,
  MensagemStatus,
  InputEdicao,
  GrupoAcoes,
  BotaoSalvar,
  BotaoCancelar,
  BotaoEditar,
  BotaoDeletar,
  AbaContainer,
  Aba,
  LoadingSpinner,
  EmptyState,
  IconWrapper,
} from './styles';
import GraficoImportacao from './GraficoImportacao';

const TabelaImportacaoComponent = () => {
  const [tabelas, setTabelas] = useState([]);
  const [tabelaAtiva, setTabelaAtiva] = useState(0);
  const [editando, setEditando] = useState({ idTabela: null, idLinha: null });
  const [dadosEditados, setDadosEditados] = useState({});
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const mostrarStatus = (texto, tipo) => {
    setStatus({ text: texto, type: tipo });
    setTimeout(() => setStatus(null), 5000);
  };

  const processarArquivo = useCallback(async (arquivo) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('arquivo', arquivo);

      const response = await axios.post('http://localhost:8090/api/importacao/upload', formData);
      const novaTabela = {
        id: response.data.idTabela,
        nome: arquivo.name,
        colunas: Object.keys(response.data.linhas[0] || {}),
        dados: response.data.linhas
      };

      setTabelas(prev => [...prev, novaTabela]);
      setTabelaAtiva(tabelas.length);
      mostrarStatus(`Arquivo "${arquivo.name}" importado com sucesso!`, 'success');
    } catch (error) {
      mostrarStatus(`Erro ao processar arquivo: ${error instanceof Error ? error.message : 'Erro desconhecido'}`, 'error');
    } finally {
      setLoading(false);
    }
  }, [tabelas.length]);

  const handleArquivoChange = (e) => {
    const arquivo = e.target.files?.[0];
    if (arquivo) {
      processarArquivo(arquivo);
    }
  };

  const iniciarEdicao = (idTabela, idLinha, dados) => {
    setEditando({ idTabela, idLinha });
    setDadosEditados({ ...dados });
  };

  const cancelarEdicao = () => {
    setEditando({ idTabela: null, idLinha: null });
    setDadosEditados({});
  };

  const salvarEdicao = async () => {
    if (!editando.idTabela || editando.idLinha === null) return;
    
    setLoading(true);
    try {
      await axios.put(
        `http://localhost:8090/api/importacao/atualizar-linha/${editando.idTabela}/${editando.idLinha}`,
        dadosEditados
      );

      setTabelas(prev => prev.map(tabela => {
        if (tabela.id === editando.idTabela) {
          const novosDados = [...tabela.dados];
          novosDados[editando.idLinha] = dadosEditados;
          return { ...tabela, dados: novosDados };
        }
        return tabela;
      }));

      cancelarEdicao();
      mostrarStatus('Linha atualizada com sucesso!', 'success');
    } catch (error) {
      mostrarStatus(`Erro ao atualizar linha: ${error instanceof Error ? error.message : 'Erro desconhecido'}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  const deletarLinha = async (idTabela, idLinha) => {
    if (!window.confirm('Tem certeza que deseja deletar esta linha?')) return;

    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:8090/api/importacao/deletar-linha/${idTabela}/${idLinha}`
      );

      setTabelas(prev => prev.map(tabela => {
        if (tabela.id === idTabela) {
          const novosDados = tabela.dados.filter((_, index) => index !== idLinha);
          return { ...tabela, dados: novosDados };
        }
        return tabela;
      }));

      mostrarStatus('Linha deletada com sucesso!', 'success');
    } catch (error) {
      mostrarStatus(`Erro ao deletar linha: ${error instanceof Error ? error.message : 'Erro desconhecido'}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  const gerarPDF = () => {
    if (tabelas.length === 0 || !tabelas[tabelaAtiva]) return;

    const tabela = tabelas[tabelaAtiva];
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text(`Relatório - ${tabela.nome}`, 20, 20);
    doc.setFontSize(10);

    const startY = 30;
    let currentY = startY;
    const maxWidth = 180;
    const colWidth = maxWidth / tabela.colunas.length;

    // Cabeçalhos
    tabela.colunas.forEach((coluna, index) => {
      doc.text(coluna.substring(0, 15), 20 + (index * colWidth), currentY);
    });
    currentY += 10;

    // Dados
    tabela.dados.forEach((linha) => {
      if (currentY > 280) {
        doc.addPage();
        currentY = startY;
      }

      tabela.colunas.forEach((coluna, index) => {
        const valor = linha[coluna] !== null ? linha[coluna].toString() : '';
        doc.text(valor.substring(0, 15), 20 + (index * colWidth), currentY);
      });
      currentY += 7;
    });

    doc.save(`relatorio_${tabela.nome}.pdf`);
  };

  const gerarExcel = () => {
    if (tabelas.length === 0 || !tabelas[tabelaAtiva]) return;

    const tabela = tabelas[tabelaAtiva];
    const worksheet = XLSX.utils.json_to_sheet(tabela.dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados Importados');
    XLSX.writeFile(workbook, `exportado_${tabela.nome}.xlsx`);
  };

  return (
    <Container>
      <GraficoImportacao/>
      <Titulo>
        <Table size={32} />
        Importação de Tabelas Personalizadas
      </Titulo>

      {!tabelas.length && (
        <AreaUpload>
          <InputArquivo
            type="file"
            id="arquivo-upload"
            accept=".xlsx,.xls,.csv"
            onChange={handleArquivoChange}
          />
          <BotaoUpload htmlFor="arquivo-upload">
            <FileUp size={20} />
            Selecionar Arquivo
          </BotaoUpload>
          {status && (
            <MensagemStatus type={status.type}>
              {status.text}
            </MensagemStatus>
          )}
        </AreaUpload>
      )}
      {loading && <LoadingSpinner />}

      {tabelas.length > 0 && (
        <>
          <AbaContainer>
            {tabelas.map((tabela, index) => (
              <Aba
                key={tabela.id}
                active={tabelaAtiva === index}
                onClick={() => setTabelaAtiva(index)}
              >
                {tabela.nome}
              </Aba>
            ))}
          </AbaContainer>


          {tabelas[tabelaAtiva] && (
            <>
              <BarraFerramentas>
                <GrupoBotoes>
                  <BotaoPDF onClick={gerarPDF}>
                    <IconWrapper>
                      <FilePdf size={20} />
                    </IconWrapper>
                    Exportar PDF
                  </BotaoPDF>
                  <BotaoExcel onClick={gerarExcel}>
                    <IconWrapper>
                      <FileSpreadsheet size={20} />
                    </IconWrapper>
                    Exportar Excel
                  </BotaoExcel>
                </GrupoBotoes>

                <InputArquivo
                  type="file"
                  id="arquivo-upload-novo"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleArquivoChange}
                />
                <BotaoUpload htmlFor="arquivo-upload-novo">
                  <FileUp size={20} />
                  Importar Novo
                </BotaoUpload>
              </BarraFerramentas>

              {status && (
                <MensagemStatus type={status.type}>
                  {status.text}
                </MensagemStatus>
              )}

              <TabelaContainer>
                {tabelas[tabelaAtiva].dados.length > 0 ? (
                  <Tabela>
                    <CabecalhoTabela>
                      <LinhaCabecalho>
                        {tabelas[tabelaAtiva].colunas.map((coluna) => (
                          <CelulaCabecalho key={coluna}>
                            {coluna}
                          </CelulaCabecalho>
                        ))}
                        <CelulaCabecalho>Ações</CelulaCabecalho>
                      </LinhaCabecalho>
                    </CabecalhoTabela>
                    <CorpoTabela>
                      {tabelas[tabelaAtiva].dados.map((linha, index) => (
                        <LinhaTabela key={index}>
                          {tabelas[tabelaAtiva].colunas.map((coluna) => (
                            <CelulaTabela key={`${index}-${coluna}`}>
                              {editando.idTabela === tabelas[tabelaAtiva].id && editando.idLinha === index ? (
                                <InputEdicao
                                  type="text"
                                  value={dadosEditados[coluna] || ''}
                                  onChange={(e) =>
                                    setDadosEditados(prev => ({
                                      ...prev,
                                      [coluna]: e.target.value
                                    }))
                                  }
                                />
                              ) : (
                                linha[coluna] !== null ? linha[coluna].toString() : ''
                              )}
                            </CelulaTabela>
                          ))}
                          <CelulaTabela>
                            <GrupoAcoes>
                              {editando.idTabela === tabelas[tabelaAtiva].id && editando.idLinha === index ? (
                                <>
                                  <BotaoSalvar onClick={salvarEdicao}>
                                    <Save size={16} />
                                  </BotaoSalvar>
                                  <BotaoCancelar onClick={cancelarEdicao}>
                                    <X size={16} />
                                  </BotaoCancelar>
                                </>
                              ) : (
                                <>
                                  <BotaoEditar onClick={() => iniciarEdicao(tabelas[tabelaAtiva].id, index, linha)}>
                                    <Edit2 size={16} />
                                  </BotaoEditar>
                                  <BotaoDeletar onClick={() => deletarLinha(tabelas[tabelaAtiva].id, index)}>
                                    <Trash2 size={16} />
                                  </BotaoDeletar>
                                </>
                              )}
                            </GrupoAcoes>
                          </CelulaTabela>
                        </LinhaTabela>
                      ))}
                    </CorpoTabela>
                  </Tabela>
                ) : (
                  <EmptyState>
                    <Table size={48} />
                    <p>Nenhum dado disponível</p>
                  </EmptyState>
                )}
              </TabelaContainer>
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default TabelaImportacaoComponent;