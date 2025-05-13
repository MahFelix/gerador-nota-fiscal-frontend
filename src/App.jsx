import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import FormNotaFiscal from "./components/FormNotaFiscal/FormNotaFiscal";
import ListaNotasFiscais from "./components/ListaNotasFiscais/ListaNotasFiscais";
import TabelaGestaoComponent from "./components/TabelaGestaoComponent/TabelaGestaoCompoennt";
import { NavbarContainer, NavItem, NavTitle, MainContent } from "./components/NavbarLateral/NavbarLatereal";
import { FaFileInvoiceDollar, FaListUl, FaChartPie, FaHome } from 'react-icons/fa';
import TabelaImportacaoComponent from "./components/TabelaImportacao/TabelaImportacao";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from './pages/Login/Login'
import Register from "./pages/Register/Register";
import TableHistory from "./pages/TableHistory/TableHistory";
import { FaSignOutAlt } from 'react-icons/fa'; 

// Credenciais fake para teste
const fakeAuth = {
  isAuthenticated: false,
  users: [
    { email: "admin@teste.com", password: "123456" },
    { email: "user@teste.com", password: "123456" }
  ],
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function App() {
  const [atualizar, setAtualizar] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const user = fakeAuth.users.find(u => u.email === email && u.password === password);
    if (user) {
      fakeAuth.signin(() => {
        setIsAuthenticated(true);
        navigate("/");
      });
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    fakeAuth.signout(() => {
      setIsAuthenticated(false);
      navigate("/login");
    });
  };

  return (
    <>
      <GlobalStyles />
      {isAuthenticated ? (
        <>
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
            <NavItem onClick={handleLogout} to="#">
               <FaSignOutAlt  size={18} />
              <span>Sair</span>
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
                path="/dashboard" 
                element={
                  <div className="adjust-layout">
                    <Dashboard/>
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
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MainContent>
        </>
      ) : (
        <Routes>
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;