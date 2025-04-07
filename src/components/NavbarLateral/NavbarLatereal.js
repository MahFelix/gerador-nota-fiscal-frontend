import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 70px; /* Largura reduzida inicial */
  height: 100vh;
  background-color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 1000;

  &:hover {
    width: 250px; /* Largura expandida no hover */
    
    span {
      opacity: 1;
      transition: opacity 0.3s ease 0.2s; /* Atraso para aparecer após a expansão */
    }
  }
`;

export const NavItem = styled(NavLink)`
  color: #ecf0f1;
  padding: 15px 20px;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 15px;
  white-space: nowrap;
  
  &:hover {
    background-color: #34495e;
    color: #fff;
  }
  
  &.active {
    background-color: #3498db;
    font-weight: bold;
  }

  svg {
    min-width: 24px; /* Garante espaço consistente para ícones */
    font-size: 1.4rem;
  }

  span {
    opacity: 0; /* Texto escondido inicialmente */
    transition: opacity 0.1s ease;
  }
`;

export const NavTitle = styled.h2`
  color: #fff;
  padding: 0 20px 20px;
  margin: 0;
  border-bottom: 1px solid #34495e;
  display: flex;
  align-items: center;
  gap: 15px;
  white-space: nowrap;

  svg {
    min-width: 24px;
    font-size: 1.6rem;
  }

  span {
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  ${NavbarContainer}:hover & {
    span {
      opacity: 1;
      transition: opacity 0.3s ease 0.2s;
    }
  }
`;

export const MainContent = styled.div`
  margin-left: 70px; /* Acompanha a navbar reduzida */
  padding: 20px;
  width: calc(100% - 70px);
  transition: margin-left 0.3s ease;

  ${NavbarContainer}:hover ~ & {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
`;