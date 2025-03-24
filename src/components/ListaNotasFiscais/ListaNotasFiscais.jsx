import { useEffect, useState } from "react";
import api from "../../services/api";
import { ListaContainer, NotaItem, Carregando, Erro, SemNotas, Titulo, Botao, NotasWrapper, ModalOverlay, ModalContainer, Input } from "./styles";

const ListaNotasFiscaisComponent = ({ atualizar }) => {
  const [notas, setNotas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [notaEditando, setNotaEditando] = useState(null);

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
      await api.delete(`/deletar/${id}`);
      setNotas(notas.filter(nota => nota.id !== id)); // Atualiza a lista local após deletar
    } catch (error) {
      console.error("Erro ao deletar nota fiscal:", error);
      setErro("Erro ao deletar a nota fiscal");
    }
  };

  const handleEditar = (nota) => {
    setNotaEditando(nota); // Configura a nota para edição
    setModalAberto(true); // Abre o modal
  };

  const handleFecharModal = () => {
    setModalAberto(false); // Fecha o modal
    setNotaEditando(null); // Reseta a nota editando
  };

  const handleSalvarEdicao = async () => {
    try {
      // Corrigido o endpoint para incluir o prefixo /api/notas-fiscais
      await api.put(`/${notaEditando.id}`, notaEditando); // Remove /editar/
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
      <NotasWrapper>
        {notas.map((nota) => (
          <NotaItem key={nota.id}>
            <p><strong>Cliente:</strong> {nota.cliente}</p>
            <p><strong>Produto:</strong> {nota.produto}</p>
            <p><strong>Valor:</strong> R$ {nota.valor?.toFixed(2)}</p>
            <p><strong>Data de Emissão:</strong> {new Date(nota.dataEmissao).toLocaleDateString()}</p>
            <div>
              <Botao onClick={() => handleEditar(nota)}>Editar</Botao>
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
    </ListaContainer>
  );
};

export default ListaNotasFiscaisComponent;
