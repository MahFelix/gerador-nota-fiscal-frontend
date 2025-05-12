import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: async () => false,
  register: async () => false,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email && password) {
        const user = {
          id: '1',
          name: email.split('@')[0],
          email,
        };

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', 'demo-token');

        setUser(user);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (name, email, password) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (name && email && password) {
        const user = {
          id: '1',
          name,
          email,
        };

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', 'demo-token');

        setUser(user);
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
