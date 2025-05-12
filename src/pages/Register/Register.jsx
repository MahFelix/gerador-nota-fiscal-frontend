import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  RegisterContainer,
  RegisterCard,
  RegisterHeader,
  RegisterForm,
  FormGroup,
  InputLabel,
  InputWrapper,
  InputIcon,
  Input,
  SubmitButton,
  RegisterFooter,
  ErrorMessage
} from './styles';
import { useAuth } from '../../contexts/AuthContext';
import { User, Mail, Lock, AlertCircle } from 'lucide-react';
import { ThemeProvider } from 'styled-components';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
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
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    
    try {
      setLoading(true);
      const success = await register(formData.name, formData.email, formData.password);
      
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Não foi possível criar sua conta. Por favor, tente novamente.');
      }
    } catch (err) {
      setError(err.message || 'Ocorreu um erro durante o cadastro. Por favor, tente novamente.');
      console.error('Registration error:', err);
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
    },
    spacing: {
      xl: '2.5rem'
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <RegisterContainer>
        <RegisterCard>
          <RegisterHeader>
            <h1>Criar Conta</h1>
            <p>Comece a gerenciar suas tabelas em minutos</p>
          </RegisterHeader>
          
          {error && (
            <ErrorMessage>
              <AlertCircle size={18} />
              <span>{error}</span>
            </ErrorMessage>
          )}
          
          <RegisterForm onSubmit={handleSubmit}>
            <FormGroup>
              <InputLabel htmlFor="name">Nome Completo</InputLabel>
              <InputWrapper>
                <InputIcon>
                  <User size={20} />
                </InputIcon>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </InputWrapper>
            </FormGroup>
            
            <FormGroup>
              <InputLabel htmlFor="email">Email</InputLabel>
              <InputWrapper>
                <InputIcon>
                  <Mail size={20} />
                </InputIcon>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
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
                  <Lock size={20} />
                </InputIcon>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                />
              </InputWrapper>
            </FormGroup>
            
            <FormGroup>
              <InputLabel htmlFor="confirmPassword">Confirme sua Senha</InputLabel>
              <InputWrapper>
                <InputIcon>
                  <Lock size={20} />
                </InputIcon>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Digite novamente sua senha"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="6"
                />
              </InputWrapper>
            </FormGroup>
            
            <SubmitButton type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Cadastrando...
                </>
              ) : (
                'Criar Minha Conta'
              )}
            </SubmitButton>
          </RegisterForm>
          
          <RegisterFooter>
            <p>Já possui uma conta? <Link to="/login">Entrar agora</Link></p>
          </RegisterFooter>
        </RegisterCard>
      </RegisterContainer>
    </ThemeProvider>
  );
};

export default Register;