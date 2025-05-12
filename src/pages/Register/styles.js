import styled, { keyframes } from 'styled-components';

// Animação para o spinner
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

// Tema padrão completo
const defaultTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  colors: {
    background: '#f8f9fa',
    card: '#ffffff',
    text: '#212529',
    textLight: '#6c757d',
    primary: '#4361ee',
    primaryLight: '#a5b4fc',
    primaryDark: '#3a56d4',
    secondary: '#6c757d',
    border: '#dee2e6',
    error: '#dc3545'
  },
  borderRadius: {
    sm: '0.2rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)'
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease'
  }
};

// Função helper para acessar propriedades do tema
const getThemeValue = (path, fallback) => props => {
  const keys = path.split('.');
  let value = props.theme || defaultTheme;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return fallback || defaultTheme[keys[0]]?.[keys[1]];
  }
  
  return value || fallback;
};

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${getThemeValue('spacing.lg')};
  background-color: ${getThemeValue('colors.background')};
  
  @media (min-width: 992px) {
    padding: ${getThemeValue('spacing.xxl')};
    background-color: ${getThemeValue('colors.background')};
    background-image: linear-gradient(135deg, ${getThemeValue('colors.primaryLight')}20 0%, #ffffff 100%);
  }
`;

export const RegisterCard = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: ${getThemeValue('colors.card')};
  border-radius: ${getThemeValue('borderRadius.lg')};
  box-shadow: ${getThemeValue('shadows.lg')};
  overflow: hidden;
  transition: all ${getThemeValue('transitions.medium')};

  @media (min-width: 992px) {
    max-width: 640px;
    border-radius: ${getThemeValue('borderRadius.xl')};
    box-shadow: ${getThemeValue('shadows.xl')};
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const RegisterHeader = styled.div`
  text-align: center;
  padding: ${getThemeValue('spacing.xl')} ${getThemeValue('spacing.lg')} ${getThemeValue('spacing.md')};
  
  @media (min-width: 992px) {
    padding: ${getThemeValue('spacing.xxl')} ${getThemeValue('spacing.xl')} ${getThemeValue('spacing.lg')};
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${getThemeValue('colors.text')};
    margin-bottom: ${getThemeValue('spacing.sm')};
    
    @media (min-width: 992px) {
      font-size: 2.5rem;
      margin-bottom: ${getThemeValue('spacing.md')};
    }
  }
  
  p {
    color: ${getThemeValue('colors.textLight')};
    font-size: 1rem;
    
    @media (min-width: 992px) {
      font-size: 1.1rem;
    }
  }
`;

export const RegisterForm = styled.form`
  padding: ${getThemeValue('spacing.md')} ${getThemeValue('spacing.lg')};
  
  @media (min-width: 992px) {
    padding: ${getThemeValue('spacing.xl')};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${getThemeValue('spacing.lg')};
  
  @media (min-width: 992px) {
    margin-bottom: ${getThemeValue('spacing.xl')};
  }
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: ${getThemeValue('spacing.sm')};
  font-weight: 500;
  color: ${getThemeValue('colors.text')};
  font-size: 0.95rem;
  
  @media (min-width: 992px) {
    font-size: 1rem;
    margin-bottom: ${getThemeValue('spacing.md')};
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: ${getThemeValue('spacing.md')};
  color: ${getThemeValue('colors.secondary')};
  transition: color ${getThemeValue('transitions.fast')};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${getThemeValue('spacing.md')};
  padding-left: ${getThemeValue('spacing.xl')};
  border: 1px solid ${getThemeValue('colors.border')};
  border-radius: ${getThemeValue('borderRadius.md')};
  font-size: 1rem;
  transition: all ${getThemeValue('transitions.fast')};
  
  @media (min-width: 992px) {
    padding: ${getThemeValue('spacing.lg')};
    padding-left: ${getThemeValue('spacing.xxl')};
    font-size: 1.05rem;
  }
  
  &:focus {
    outline: none;
    border-color: ${getThemeValue('colors.primary')};
    box-shadow: 0 0 0 3px ${getThemeValue('colors.primaryLight')}40;
  }

  &::placeholder {
    color: ${getThemeValue('colors.textLight')}80;
    font-size: 0.9rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${getThemeValue('spacing.lg')};
  background-color: ${getThemeValue('colors.primary')};
  color: white;
  border: none;
  border-radius: ${getThemeValue('borderRadius.md')};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${getThemeValue('transitions.medium')};
  margin-top: ${getThemeValue('spacing.xl')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${getThemeValue('spacing.sm')};
  
  @media (min-width: 992px) {
    font-size: 1.1rem;
    padding: ${getThemeValue('spacing.lg')};
  }
  
  &:hover:not(:disabled) {
    background-color: ${getThemeValue('colors.primaryDark')};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    
    .spinner {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: ${spin} 1s ease-in-out infinite;
    }
  }
`;

export const ActionButton = styled.button`
`

export const RegisterFooter = styled.div`
  padding: ${getThemeValue('spacing.lg')};
  text-align: center;
  border-top: 1px solid ${getThemeValue('colors.border')};
  
  @media (min-width: 992px) {
    padding: ${getThemeValue('spacing.xl')};
  }
  
  p {
    color: ${getThemeValue('colors.textLight')};
    font-size: 0.95rem;
    
    @media (min-width: 992px) {
      font-size: 1rem;
    }
  }
  
  a {
    color: ${getThemeValue('colors.primary')};
    text-decoration: none;
    font-weight: 600;
    transition: all ${getThemeValue('transitions.fast')};
    
    &:hover {
      text-decoration: underline;
      color: ${getThemeValue('colors.primaryDark')};
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${getThemeValue('spacing.sm')};
  margin: 0 ${getThemeValue('spacing.lg')} ${getThemeValue('spacing.lg')};
  padding: ${getThemeValue('spacing.md')};
  background-color: ${getThemeValue('colors.error')}15;
  color: ${getThemeValue('colors.error')};
  border-radius: ${getThemeValue('borderRadius.md')};
  font-size: 0.9rem;
  
  @media (min-width: 992px) {
    margin: 0 ${getThemeValue('spacing.xl')} ${getThemeValue('spacing.xl')};
    font-size: 1rem;
    padding: ${getThemeValue('spacing.md')} ${getThemeValue('spacing.lg')};
  }

  svg {
    flex-shrink: 0;
  }
`;