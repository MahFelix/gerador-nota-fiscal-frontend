import styled from "styled-components";

export const ListaContainer = styled.div`
  background-color: rgb(27, 26, 26);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 500px;
  
  @media (max-width: 768px) {
    padding: 10px;
    margin: 5px;
    border-radius: 8px;
   width: auto;
  }
`;

export const NotaItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 8px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease;
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 8px;
  }
`;

export const Carregando = styled.div`
  color: #4AB6ED;
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1em;
  }
`;

export const Erro = styled.div`
  color: #ff6b6b;
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1em;
  }
`;

export const SemNotas = styled.div`
  color: #aaa;
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  
  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1em;
  }
`;

export const Titulo = styled.h2`
  margin-bottom: 15px;
  color: #fff;
  font-size: 1.4em;
  text-align: center;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

export const Botao = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px 12px;
  margin: 4px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.9em;
  min-width: 70px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #d32f2f;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8em;
    min-width: 60px;
  }
`;

export const BotaoNF = styled.button`
  background-color:rgba(74, 183, 237, 0.64);
  color: white;
  padding: 8px 12px;
  margin: 4px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.9em;
  min-width: 80px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #d32f2f;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8em;
    min-width: 60px;
  }
`;

export const BotaoE = styled.button`
  background-color:rgba(243, 180, 8, 0.94);
  color: white;
  padding: 8px 12px;
  margin: 4px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  border-radius: 6px;
  font-size: 0.9em;
  min-width: 80px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color:rgba(136, 101, 6, 0.94);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8em;
    min-width: 60px;
  }
`;

export const BotaoEditar = styled(Botao)`
  background-color: #4caf50;
  
  &:hover {
    background-color: #388e3c;
  }
`;

export const NotasWrapper = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  margin-top: 15px;
  padding-right: 8px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #4AB6ED;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    max-height: 55vh;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 15px;
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const ModalContainer = styled.div`
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: white;
  
  h3 {
    margin-bottom: 15px;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 8px 0;
  width: 100%;
  border: 1px solid #444;
  border-radius: 6px;
  font-size: 1em;
  background-color: #333;
  color: white;
  
  &:focus {
    outline: none;
    border-color: #4AB6ED;
  }
  
  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9em;
  }
`;

export const BotoesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin: 10px 0;
  }
`;

// Novo componente para ações dos itens
export const AcoesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ModalExportar = styled(ModalContainer)`
  max-width: 400px;
`;

export const ExportarOpcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;

export const ExportarBotao = styled.button`
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;