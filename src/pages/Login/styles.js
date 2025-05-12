import styled from 'styled-components';

// Tema padrão completo
const defaultTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
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
    lg: '0.5rem'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease'
  }
};

// Função helper melhorada para acessar propriedades do tema
const getThemeValue = (path, fallback) => props => {
  const keys = path.split('.');
  let value = props.theme || defaultTheme;
  
  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) return fallback || defaultTheme[keys[0]]?.[keys[1]];
  }
  
  return value || fallback;
};

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${getThemeValue('spacing.lg')};
  background-color: ${getThemeValue('colors.background')};
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: ${getThemeValue('colors.card')};
  border-radius: ${getThemeValue('borderRadius.lg')};
  box-shadow: ${getThemeValue('shadows.lg')};
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px -5px rgba(0,0,0,0.1);
  }
`;

export const LoginHeader = styled.div`
  text-align: center;
  padding: ${getThemeValue('spacing.lg')} ${getThemeValue('spacing.lg')} ${getThemeValue('spacing.md')};
  
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${getThemeValue('colors.text')};
    margin-bottom: ${getThemeValue('spacing.sm')};
    transition: color ${getThemeValue('transitions.fast')};
  }
  
  p {
    color: ${getThemeValue('colors.textLight')};
    transition: color ${getThemeValue('transitions.fast')};
  }
`;

export const LoginForm = styled.form`
  padding: ${getThemeValue('spacing.md')} ${getThemeValue('spacing.lg')};
`;

export const FormGroup = styled.div`
  margin-bottom: ${getThemeValue('spacing.md')};
  transition: margin ${getThemeValue('transitions.fast')};
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: ${getThemeValue('spacing.xs')};
  font-weight: 500;
  color: ${getThemeValue('colors.text')};
  transition: all ${getThemeValue('transitions.fast')};
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: ${getThemeValue('spacing.sm')};
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
  
  &:focus {
    outline: none;
    border-color: ${getThemeValue('colors.primary')};
    box-shadow: 0 0 0 2px ${getThemeValue('colors.primaryLight')}40;
  }

  &::placeholder {
    color: ${getThemeValue('colors.textLight')}80;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: ${getThemeValue('spacing.md')};
  background-color: ${getThemeValue('colors.primary')};
  color: white;
  border: none;
  border-radius: ${getThemeValue('borderRadius.md')};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${getThemeValue('transitions.fast')};
  margin-top: ${getThemeValue('spacing.md')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${getThemeValue('spacing.sm')};
  
  &:hover:not(:disabled) {
    background-color: ${getThemeValue('colors.primaryDark')};
    transform: translateY(-1px);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const LoginFooter = styled.div`
  padding: ${getThemeValue('spacing.md')} ${getThemeValue('spacing.lg')};
  text-align: center;
  border-top: 1px solid ${getThemeValue('colors.border')};
  
  p {
    color: ${getThemeValue('colors.textLight')};
    transition: color ${getThemeValue('transitions.fast')};
  }
  
  a {
    color: ${getThemeValue('colors.primary')};
    text-decoration: none;
    font-weight: 500;
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
  margin: 0 ${getThemeValue('spacing.lg')};
  padding: ${getThemeValue('spacing.sm')} ${getThemeValue('spacing.md')};
  background-color: ${getThemeValue('colors.error')}15;
  color: ${getThemeValue('colors.error')};
  border-radius: ${getThemeValue('borderRadius.md')};
  font-size: 0.875rem;
  transition: all ${getThemeValue('transitions.fast')};

  svg {
    flex-shrink: 0;
  }
`;