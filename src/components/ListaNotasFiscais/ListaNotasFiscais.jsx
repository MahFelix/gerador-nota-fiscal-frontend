import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import api from "../../services/api";
import { 
  ListaContainer, NotaItem, Carregando, Erro, SemNotas, 
  Titulo, Botao, NotasWrapper, ModalOverlay, ModalContainer, 
  Input, BotoesContainer, BotaoNF, BotaoE, ModalExportar, 
  ExportarOpcoes, ExportarBotao
} from "./styles";

const ListaNotasFiscaisComponent = ({ atualizar }) => {
  const [notas, setNotas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [notaEditando, setNotaEditando] = useState(null);
  const [modalExportarAberto, setModalExportarAberto] = useState(false);

  useEffect(() => {
    const fetchNotas = async () => {
      try {
        setCarregando(true);
        const response = await api.get("/listar");
        setNotas(response.data);
      } catch (error) {
        console.error("Erro ao buscar notas fiscais:", error);
        setErro("Erro ao carregar notas fiscais");
      } finally {
        setCarregando(false);
      }
    };

    fetchNotas();
  }, [atualizar]);

  const handleDeletar = async (id) => {
    try {
      await api.delete(`${id}`);
      setNotas(notas.filter(nota => nota.id !== id));
    } catch (error) {
      console.error("Erro ao deletar nota fiscal:", error);
      setErro("Erro ao deletar a nota fiscal");
    }
  };

  const handleDeletarTodas = async () => {
    if (window.confirm("Tem certeza que deseja excluir TODAS as notas fiscais?")) {
      try {
        await api.delete("/delete-all");
        setNotas([]);
      } catch (error) {
        console.error("Erro ao deletar todas as notas:", error);
        setErro("Erro ao deletar todas as notas");
      }
    }
  };

  const gerarPDF = () => {
    try {
      const doc = new jsPDF();
      
      // Configurações iniciais
      doc.setFont("helvetica", "normal");
      
      // Título do relatório
      doc.setFontSize(20);
      doc.text("Relatório de Notas Fiscais", 105, 15, { align: 'center' });
      
      // Dados das notas
      let y = 30;
      notas.forEach((nota, index) => {
        doc.setFontSize(12);
        doc.text(`Nota Fiscal #${index + 1}`, 14, y);
        doc.text(`Cliente: ${nota.cliente}`, 14, y + 7);
        doc.text(`Produto: ${nota.produto}`, 14, y + 14);
        doc.text(`Valor: R$ ${nota.valor?.toFixed(2)}`, 14, y + 21);
        doc.text(`Data: ${new Date(nota.dataEmissao).toLocaleDateString()}`, 14, y + 28);
        
        // Linha divisória
        doc.line(10, y + 33, 200, y + 33);
        y += 40;
        
        // Nova página se necessário
        if (y > 280 && index < notas.length - 1) {
          doc.addPage();
          y = 20;
        }
      });
      
      // Salvar o PDF
      doc.save("relatorio_notas_fiscais.pdf");
    } catch (error) {
      console.error("Erro ao gerar relatório PDF:", error);
      setErro("Erro ao gerar o relatório PDF");
    }
  };

  const gerarExcel = () => {
    try {
      // Preparar os dados para a planilha
      const dados = notas.map((nota, index) => ({
        "Nº": index + 1,
        "Cliente": nota.cliente,
        "Produto": nota.produto,
        "Valor (R$)": nota.valor?.toFixed(2),
        "Data de Emissão": new Date(nota.dataEmissao).toLocaleDateString()
      }));
      
      // Criar a planilha
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(dados);
      
      // Adicionar a planilha ao workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Notas Fiscais");
      
      // Gerar o arquivo Excel (XLSX)
      XLSX.writeFile(workbook, "relatorio_notas_fiscais.xlsx", { compression: true });
    } catch (error) {
      console.error("Erro ao gerar relatório Excel:", error);
      setErro("Erro ao gerar o relatório Excel");
    }
  };

  const gerarODS = () => {
    try {
      // Preparar os dados para a planilha (mesmo formato do Excel)
      const dados = notas.map((nota, index) => ({
        "Nº": index + 1,
        "Cliente": nota.cliente,
        "Produto": nota.produto,
        "Valor (R$)": nota.valor?.toFixed(2),
        "Data de Emissão": new Date(nota.dataEmissao).toLocaleDateString()
      }));
      
      // Criar a planilha
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(dados);
      
      // Adicionar a planilha ao workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Notas Fiscais");
      
      // Gerar o arquivo ODS (LibreOffice)
      XLSX.writeFile(workbook, "relatorio_notas_fiscais.ods", { bookType: 'ods' });
    } catch (error) {
      console.error("Erro ao gerar relatório ODS:", error);
      setErro("Erro ao gerar o relatório LibreOffice");
    }
  };

  const abrirModalExportar = () => {
    setModalExportarAberto(true);
  };

  const fecharModalExportar = () => {
    setModalExportarAberto(false);
  };

  const handleEditar = (nota) => {
    setNotaEditando(nota);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setNotaEditando(null);
  };

  const handleSalvarEdicao = async () => {
    try {
      await api.put(`/${notaEditando.id}`, notaEditando);
      setNotas(notas.map(nota => 
        nota.id === notaEditando.id ? notaEditando : nota
      ));
      handleFecharModal();
    } catch (error) {
      console.error("Erro ao salvar edição:", error);
      setErro("Erro ao salvar a edição");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotaEditando({
      ...notaEditando,
      [name]: value,
    });
  };

  if (carregando) return <Carregando>Carregando...</Carregando>;
  if (erro) return <Erro>{erro}</Erro>;
  if (!notas || notas.length === 0) return <SemNotas>Nenhuma nota fiscal encontrada</SemNotas>;

  return (
    <ListaContainer>
      <Titulo>Notas Fiscais Emitidas</Titulo>
      
      <BotoesContainer>
        <BotaoNF onClick={abrirModalExportar}>Exportar Relatório</BotaoNF>
        <BotaoNF onClick={handleDeletarTodas}>Excluir Todas</BotaoNF>
      </BotoesContainer>
      
      <NotasWrapper>
        {notas.map((nota) => (
          <NotaItem key={nota.id}>
            <p><strong>Cliente:</strong> {nota.cliente}</p>
            <p><strong>Produto:</strong> {nota.produto}</p>
            <p><strong>Valor:</strong> R$ {nota.valor?.toFixed(2)}</p>
            <p><strong>Data de Emissão:</strong> {new Date(nota.dataEmissao).toLocaleDateString()}</p>

            <div>
              <BotaoE onClick={() => handleEditar(nota)}>Editar</BotaoE>
              <Botao onClick={() => handleDeletar(nota.id)}>Deletar</Botao>
            </div>
          </NotaItem>
        ))}
      </NotasWrapper>

      {modalAberto && (
        <ModalOverlay>
          <ModalContainer>
            <h3>Editar Nota Fiscal</h3>
            <form>
              <Input
                type="text"
                name="cliente"
                value={notaEditando.cliente}
                onChange={handleChange}
                placeholder="Cliente"
                required
              />
              <Input
                type="text"
                name="produto"
                value={notaEditando.produto}
                onChange={handleChange}
                placeholder="Produto"
                required
              />
              <Input
                type="number"
                name="valor"
                value={notaEditando.valor}
                onChange={handleChange}
                placeholder="Valor"
                step="0.01"
                required
              />
              <Input
                type="date"
                name="dataEmissao"
                value={notaEditando.dataEmissao}
                onChange={handleChange}
                required
              />
              <div>
                <Botao type="button" onClick={handleSalvarEdicao}>Salvar</Botao>
                <Botao type="button" onClick={handleFecharModal}>Fechar</Botao>
              </div>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}

      {modalExportarAberto && (
        <ModalOverlay>
          <ModalExportar>
            <h3>Exportar Relatório</h3>
            <p>Selecione o formato desejado:</p>
            
            <ExportarOpcoes>
              <ExportarBotao onClick={gerarPDF}>
                Baixar como PDF
              </ExportarBotao>
              
              <ExportarBotao onClick={gerarExcel}>
                Baixar como Excel (XLSX)
              </ExportarBotao>
              
              <ExportarBotao onClick={gerarODS}>
                Baixar como LibreOffice (ODS)
              </ExportarBotao>
            </ExportarOpcoes>
            
            <Botao type="button" onClick={fecharModalExportar}>Fechar</Botao>
          </ModalExportar>
        </ModalOverlay>
      )}
    </ListaContainer>
  );
};

export default ListaNotasFiscaisComponent;