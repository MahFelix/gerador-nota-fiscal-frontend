import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial, sans-serif';
  max-width: 1400px;  /* Aumentado de 1200px */

  padding: 30px;  /* Aumentado de 20px */
  background-color: #f9f9f9;
  border-radius: 8px;  /* Aumentado de 5px */
  box-shadow: 0 0 15px rgba(0,0,0,0.15);  /* Aumentada a sombra */
`;

export const Titulo = styled.h2`
  color: #2c3e50;
  font-size: 28px;  /* Aumentado */
  border-bottom: 3px solid #3498db;  /* Aumentado de 2px */
  padding-bottom: 15px;  /* Aumentado de 10px */
  margin-bottom: 30px;  /* Aumentado de 20px */
`;

export const BarraFerramentas = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;  /* Aumentado de 20px */
  flex-wrap: wrap;
  gap: 15px;  /* Aumentado de 10px */
`;

export const GrupoFiltros = styled.div`
  display: flex;
  gap: 15px;  /* Aumentado de 10px */
`;

export const InputFiltro = styled.input`
  padding: 12px;  /* Aumentado de 8px */
  border: 1px solid #ddd;
  border-radius: 6px;  /* Aumentado de 4px */
  min-width: 250px;  /* Aumentado de 200px */
  font-size: 16px;  /* Adicionado tamanho de fonte */
`;

export const GrupoBotoes = styled.div`
  display: flex;
  gap: 15px;  /* Aumentado de 10px */
  flex-wrap: wrap;
`;

export const Botao = styled.button`
  padding: 12px 20px;  /* Aumentado de 8px 15px */
  color: white;
  border: none;
  border-radius: 6px;  /* Aumentado de 4px */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;  /* Aumentado de 5px */
  transition: all 0.3s;
  font-size: 16px;  /* Adicionado tamanho de fonte */

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);  /* Efeito de zoom suave */
  }
`;

/* Botões específicos mantêm suas cores mas herdam os novos tamanhos */
export const BotaoPDF = styled(Botao)`background-color: #e74c3c;`;
export const BotaoExcel = styled(Botao)`background-color: #2ecc71;`;
export const BotaoLibreOffice = styled(Botao)`background-color: #3498db;`;
export const BotaoWord = styled(Botao)`background-color: #9b59b6;`;

export const TabelaContainer = styled.div`
  overflow-x: auto;
  border: 2px solid #ddd;  /* Aumentado de 1px */
  border-radius: 8px;  /* Aumentado de 4px */
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);  /* Aumentada a sombra */
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  font-size: 16px;  /* Adicionado tamanho de fonte */
`;

export const CabecalhoTabela = styled.thead``;

export const LinhaCabecalho = styled.tr`
  background-color: #f2f2f2;
  border-bottom: 3px solid #ddd;  /* Aumentado de 2px */
`;

export const CelulaCabecalho = styled.th`
  padding: 16px 20px;  /* Aumentado de 12px 15px */
  text-align: ${props => props.align || 'left'};
  cursor: ${props => props.clickable ? 'pointer' : 'default'};
  min-width: ${props => props.minWidth || '180px'};  /* Aumentado valor padrão */
  position: relative;
  font-size: 17px;  /* Adicionado tamanho de fonte */

  &:hover {
    background-color: ${props => props.clickable ? '#e6e6e6' : 'inherit'};
  }
`;

export const CorpoTabela = styled.tbody``;

export const LinhaTabela = styled.tr`
  border-bottom: 2px solid #ddd;  /* Aumentado de 1px */
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CelulaTabela = styled.td`
  padding: 12px 20px;  /* Aumentado de 8px 15px */
  text-align: ${props => props.align || 'left'};
  font-size: 16px;  /* Adicionado tamanho de fonte */
`;

export const InputEdicao = styled.input`
  width: 100%;
  padding: 8px;  /* Aumentado de 5px */
  border: 1px solid #ddd;
  border-radius: 4px;  /* Aumentado de 3px */
  text-align: ${props => props.align || 'left'};
  font-size: 15px;  /* Adicionado tamanho de fonte */
`;

export const GrupoAcoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;  /* Aumentado de 5px */
`;

export const BotaoAcao = styled.button`
  padding: 8px 16px;  /* Aumentado de 5px 10px */
  color: white;
  border: none;
  border-radius: 4px;  /* Aumentado de 3px */
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;  /* Adicionado tamanho de fonte */

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

/* Botões de ação mantêm suas cores mas herdam os novos tamanhos */
export const BotaoSalvar = styled(BotaoAcao)`background-color: #2ecc71;`;
export const BotaoCancelar = styled(BotaoAcao)`background-color: #e74c3c;`;
export const BotaoEditar = styled(BotaoAcao)`background-color: #3498db;`;