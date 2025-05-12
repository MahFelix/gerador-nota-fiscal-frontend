import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LoginContainer,
  LoginCard,
  LoginHeader,
  LoginForm,
  FormGroup,
  InputLabel,
  InputWrapper,
  InputIcon,
  Input,
  SubmitButton,
  LoginFooter,
  ErrorMessage
} from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import { Mail, Lock, AlertCircle } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      const success = await login(formData.email, formData.password);

      if (success) {
        navigate('/dashboard');
      } else {
        setError('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (err) {
      setError('Ocorreu um erro durante o login. Por favor, tente novamente.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const customTheme = {
    colors: {
      primary: '#3a0ca3',
      primaryDark: '#2a0a7a',
      primaryLight: '#4cc9f0',
      error: '#f72585'
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <LoginContainer>
        <LoginCard>
          <LoginHeader>
            <h1>Login</h1>
            <p>Entre para gerenciar suas tabelas</p>
          </LoginHeader>

          {error && (
            <ErrorMessage>
              <AlertCircle size={16} />
              <span>{error}</span>
            </ErrorMessage>
          )}

          <LoginForm onSubmit={handleSubmit}>
            <FormGroup>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputWrapper>
                <InputIcon>
                  <Mail size={18} />
                </InputIcon>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <InputWrapper>
                <InputIcon>
                  <Lock size={18} />
                </InputIcon>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </SubmitButton>
          </LoginForm>

          <LoginFooter>
            <p>
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </p>
          </LoginFooter>
        </LoginCard>
      </LoginContainer>
    </ThemeProvider>
  );
};

export default Login;