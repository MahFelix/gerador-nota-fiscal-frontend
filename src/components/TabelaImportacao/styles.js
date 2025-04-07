/* eslint-disable no-undef */
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 1700px;
  margin: 0 auto;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;

 
`;

export const Titulo = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-weight: 600;
  font-size: 2.2rem;
  display: fixed;
  align-items: center;
  justify-content: center;
  gap: 12px;

  svg {
    color: #4a6bdf;
  }
`;

export const AreaUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 40px;
  border: 2px dashed #a0b0c0;
  border-radius: 12px;
  background: #f8fafc;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4a6bdf;
    background: #f0f4f8;
  }
`;

export const InputArquivo = styled.input`
  display: none;
`;

export const BotaoUpload = styled.label`
  padding: 12px 24px;
  background: #4a6bdf;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(74, 107, 223, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #3a5bd9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(74, 107, 223, 0.3);
  }
`;

export const BarraFerramentas = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`;

export const GrupoBotoes = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const BotaoPDF = styled.button`
  padding: 10px 20px;
  background: #ff5e5e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #ff3d3d;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 94, 94, 0.2);
  }
`;

export const BotaoExcel = styled.button`
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #3d8b40;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(76, 175, 80, 0.2);
  }
`;

export const TabelaContainer = styled.div`
  width: 100%;
  max-height: 600px;
  overflow-x: auto;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;
`;

export const Tabela = styled.table`
  width: max-content;
  min-width: 100%;
  border-collapse: collapse;
`;

export const CabecalhoTabela = styled.thead`
  background-color: #3f5ed7;
  color: white;
`;

export const LinhaCabecalho = styled.tr``;

export const CelulaCabecalho = styled.th`
  padding: 12px 16px;
  border: 1px solid #ddd;
  white-space: nowrap;
`;

export const CorpoTabela = styled.tbody``;

export const LinhaTabela = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const CelulaTabela = styled.td`
  padding: 10px 16px;
  border: 1px solid #ddd;
  white-space: nowrap;
`;
export const MensagemStatus = styled.p`
  margin-top: 15px;
  padding: 12px 20px;
  border-radius: 6px;
  color: ${props => props.type === 'error' ? '#ff5e5e' : '#4CAF50'};
  font-weight: 500;
  background: ${props => props.type === 'error' ? '#fff0f0' : '#f0fff4'};
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const InputEdicao = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #4a6bdf;
    box-shadow: 0 0 0 2px rgba(74, 107, 223, 0.2);
  }
`;

export const GrupoAcoes = styled.div`
  display: flex;
  gap: 8px;
`;

export const BotaoSalvar = styled.button`
  padding: 8px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #3d8b40;
    transform: translateY(-1px);
  }
`;

export const BotaoCancelar = styled.button`
  padding: 8px;
  background: #ff5e5e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #ff3d3d;
    transform: translateY(-1px);
  }
`;

export const BotaoEditar = styled.button`
  padding: 8px;
  background: #4a6bdf;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #3a5bd9;
    transform: translateY(-1px);
  }
`;

export const BotaoDeletar = styled.button`
  padding: 8px;
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e68a00;
    transform: translateY(-1px);
  }
`;

export const AbaContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  padding-bottom: 5px;
  gap: 8px;
  
`;

export const Aba = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  background: ${props => props.active ? '#ffffff' : '#f8fafc'};
  border: 1px solid ${props => props.active ? '#4a6bdf' : '#d1d5db'};
  border-bottom: ${props => props.active ? '2px solid #4a6bdf' : '1px solid #d1d5db'};
  border-radius: 8px 8px 0 0;
  font-weight: 500;
  color: ${props => props.active ? '#4a6bdf' : '#64748b'};
  white-space: nowrap;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#ffffff' : '#f0f4ff'};
    color: #4a6bdf;
  }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px auto;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #4a6bdf;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #64748b;
  gap: 16px;

  svg {
    color: #a0b0c0;
  }

  p {
    font-size: 16px;
  }
`;


export const ContainerImport = styled.div`
`