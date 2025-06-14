import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import FormNotaFiscal from "./components/FormNotaFiscal/FormNotaFiscal";
import ListaNotasFiscais from "./components/ListaNotasFiscais/ListaNotasFiscais";
import TabelaGestaoComponent from "./components/TabelaGestaoComponent/TabelaGestaoCompoennt";
import { NavbarContainer, NavItem, NavTitle, MainContent } from "./components/NavbarLateral/NavbarLatereal";
// Importando ícones
import { FaFileInvoiceDollar, FaListUl, FaChartPie, FaHome } from 'react-icons/fa';
import TabelaImportacaoComponent from "./components/TabelaImportacao/TabelaImportacao";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './pages/Login/Login'
import Register from "./pages/Register/Register";
import TableHistory from "./pages/TableHistory/TableHistory";

function App() {
  const [atualizar, setAtualizar] = useState(false);

  return (
    <>
      <GlobalStyles />
      <NavbarContainer>
        <NavTitle>GF</NavTitle>
        <NavItem to="/">
          <FaHome size={18} />
          <span>Início</span>
        </NavItem>
        <NavItem to="/cadastro">
          <FaFileInvoiceDollar size={18} />
          <span>Cadastrar Nota</span>
        </NavItem>
        <NavItem to="/lista">
          <FaListUl size={18} />
          <span>Lista de Notas</span>
        </NavItem>
        <NavItem to="/gestao">
          <FaChartPie size={18} />
          <span>Gestão de Notas</span>
        </NavItem>
        <NavItem to="/import">
          <FaChartPie size={18} />
          <span>Importar Notas</span>
        </NavItem>
        <NavItem to="/dashboard">
          <FaChartPie size={18} />
          <span>Dashboard Tabelas</span>
        </NavItem>

      </NavbarContainer>
      
      <MainContent>
        <Routes>
          <Route 
            path="/cadastro" 
            element={<FormNotaFiscal atualizarLista={() => setAtualizar(!atualizar)} />} 
          />
           <Route 
            path="/import" 
            element={<TabelaImportacaoComponent atualizarLista={() => setAtualizar(!atualizar)} />} 
          />
          <Route 
            path="/lista" 
            element={<ListaNotasFiscais atualizar={atualizar} />} 
          />
          <Route 
            path="/gestao" 
            element={
              <div className="adjust-layout">
                <TabelaGestaoComponent/>
              </div>
            } 
          />
             <Route 
            path="/Dashboard" 
            element={
              <div className="adjust-layout">
                <Dashboard/>
              </div>
            } 
          />
            <Route 
            path="/Login" 
            element={
              <div className="adjust-layout">
                <Login/>
              </div>
            } 
          />
             <Route 
            path="/history" 
            element={
              <div className="adjust-layout">
                <TableHistory/>
              </div>
            } 
          />
      
             <Route 
            path="/register" 
            element={
              <div className="adjust-layout">
                <Register/>
              </div>
            } 
          />
             <Route 
            path="/gestao" 
            element={
              <div className="adjust-layout">
                <TabelaGestaoComponent/>
              </div>
            } 
          />
          <Route 
            path="/" 
            element={<FormNotaFiscal atualizarLista={() => setAtualizar(!atualizar)} />} 
          />
        </Routes>
      </MainContent>
    </>
  );
}

export default App;