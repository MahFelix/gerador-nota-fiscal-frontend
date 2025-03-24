import styled from "styled-components";

export const ListaContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const NotaItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const Carregando = styled.div`
  color: #007bff;
  text-align: center;
  margin-top: 20px;
`;

export const Erro = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export const SemNotas = styled.div`
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

export const Titulo = styled.h2`
  margin-bottom: 15px;
  color: #333;
  font-size: 1.5em;
  text-align: center;

  
`;

export const Botao = styled.button`
  background-color: #f44336; // Vermelho para deletar
  color: white;
  padding: 5px 10px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

export const BotaoEditar = styled(Botao)`
  background-color: #4caf50; // Verde para editar
  &:hover {
    background-color: #388e3c;
  }
`;

export const NotasWrapper = styled.div`
  max-height: 400px; // Altura máxima para permitir o scroll
  overflow-y: auto;
  margin-top: 20px;
  padding-right: 10px; // Ajusta o padding para que a rolagem não sobreponha os itens
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #007bff;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;
