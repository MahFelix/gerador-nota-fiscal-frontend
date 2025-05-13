import styled from 'styled-components';
import { Link } from 'react-router-dom';

const defaultTheme = {
  spacing: {
    xs: '6px',
    sm: '12px',
    md: '20px',
    lg: '32px',
    xl: '48px',
    xxl: '64px'
  },
  colors: {
    text: '#2d3748',
    textLight: '#718096',
    primary: '#4a6bdf',
    primaryLight: '#e0e6ff',
    primaryDark: '#3a56b2',
    accent: '#ff7d4a',
    success: '#38a169',
    secondaryLight: '#f0f2f5',
    card: '#ffffff',
    background: '#f8f9fa',
    border: '#e2e8f0'
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    full: '50%'
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.05)',
    md: '0 4px 12px rgba(0,0,0,0.1)',
    lg: '0 10px 25px rgba(0,0,0,0.1)'
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease'
  },
  typography: {
    heading1: '2.5rem',
    heading2: '1.75rem',
    heading3: '1.25rem',
    body: '1rem',
    small: '0.875rem'
  }
};

const getThemeValue = (path, defaultValue) => props => {
  const value = path.split('.').reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, props.theme || defaultTheme);
  return value || defaultValue;
};

export const DashboardContainer = styled.div`
  padding: ${getThemeValue('spacing.xxl', '64px')} ${getThemeValue('spacing.xl', '48px')};
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 200px;
`;

export const DashboardHeader = styled.div`
  margin-bottom: ${getThemeValue('spacing.xxl', '64px')};

  h1 {
    font-size: ${getThemeValue('typography.heading1', '2.5rem')};
    font-weight: 700;
    color: ${getThemeValue('colors.text', '#2d3748')};
    margin-bottom: ${getThemeValue('spacing.sm', '12px')};
    letter-spacing: -0.5px;
  }

  p {
    color: ${getThemeValue('colors.textLight', '#718096')};
    font-size: ${getThemeValue('typography.body', '1rem')};
    max-width: 600px;
    line-height: 1.5;
  }
`;

export const DashboardStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${getThemeValue('spacing.lg', '32px')};
  margin-bottom: ${getThemeValue('spacing.xxl', '64px')};
`;

export const StatCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${getThemeValue('spacing.xl', '48px')} ${getThemeValue('spacing.lg', '32px')};
  background-color: ${getThemeValue('colors.card', '#ffffff')};
  border-radius: ${getThemeValue('borderRadius.lg', '16px')};
  box-shadow: ${getThemeValue('shadows.md', '0 4px 12px rgba(0,0,0,0.1)')};
  transition: all ${getThemeValue('transitions.medium', '0.3s ease')};
  border: 1px solid ${getThemeValue('colors.border', '#e2e8f0')};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${getThemeValue('shadows.lg', '0 10px 25px rgba(0,0,0,0.1)')};
    border-color: ${getThemeValue('colors.primaryLight', '#e0e6ff')};
  }
`;

export const StatIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${getThemeValue('borderRadius.full', '50%')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${getThemeValue('spacing.lg', '32px')};
  background-color: ${props => {
    const colorMap = {
      primary: getThemeValue('colors.primary', '#4a6bdf')(props),
      accent: getThemeValue('colors.accent', '#ff7d4a')(props),
      success: getThemeValue('colors.success', '#38a169')(props)
    };
    return colorMap[props.bg] || getThemeValue('colors.primary', '#4a6bdf')(props);
  }};
  color: white;
  flex-shrink: 0;
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatValue = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${getThemeValue('colors.text', '#2d3748')};
  margin-bottom: ${getThemeValue('spacing.xs', '6px')};
`;

export const StatLabel = styled.span`
  color: ${getThemeValue('colors.textLight', '#718096')};
  font-size: ${getThemeValue('typography.small', '0.875rem')};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${getThemeValue('spacing.xl', '48px')};
  margin-bottom: ${getThemeValue('spacing.xxl', '64px')};
`;

export const GridItem = styled.div`
  background-color: ${getThemeValue('colors.card', '#ffffff')};
  border-radius: ${getThemeValue('borderRadius.lg', '16px')};
  box-shadow: ${getThemeValue('shadows.md', '0 4px 12px rgba(0,0,0,0.1)')};
  padding: ${getThemeValue('spacing.xl', '48px')};
  border: 1px solid ${getThemeValue('colors.border', '#e2e8f0')};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${getThemeValue('spacing.lg', '32px')};
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${getThemeValue('spacing.md', '20px')};

  h2 {
    font-size: ${getThemeValue('typography.heading2', '1.75rem')};
    font-weight: 600;
    color: ${getThemeValue('colors.text', '#2d3748')};
    margin: 0;
  }

  svg {
    color: ${getThemeValue('colors.primary', '#4a6bdf')};
  }
`;

export const ViewAllLink = styled(Link)`
  font-size: ${getThemeValue('typography.small', '0.875rem')};
  color: ${getThemeValue('colors.primary', '#4a6bdf')};
  text-decoration: none;
  font-weight: 500;
  transition: color ${getThemeValue('transitions.fast', '0.2s ease')};

  &:hover {
    color: ${getThemeValue('colors.primaryDark', '#3a56b2')};
    text-decoration: underline;
  }
`;

export const TablesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getThemeValue('spacing.md', '20px')};
`;

export const TableItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${getThemeValue('spacing.lg', '32px')};
  background-color: ${getThemeValue('colors.background', '#f8f9fa')};
  border-radius: ${getThemeValue('borderRadius.md', '12px')};
  transition: all ${getThemeValue('transitions.fast', '0.2s ease')};
  border: 1px solid transparent;

  &:hover {
    background-color: ${getThemeValue('colors.card', '#ffffff')};
    border-color: ${getThemeValue('colors.primaryLight', '#e0e6ff')};
    transform: translateX(4px);
  }
`;

export const TableIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${getThemeValue('colors.secondaryLight', '#f0f2f5')};
  border-radius: ${getThemeValue('borderRadius.full', '50%')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${getThemeValue('spacing.lg', '32px')};
  color: ${getThemeValue('colors.primary', '#4a6bdf')};
  flex-shrink: 0;
`;

export const TableInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TableName = styled.span`
  font-weight: 600;
  color: ${getThemeValue('colors.text', '#2d3748')};
  font-size: ${getThemeValue('typography.body', '1rem')};
  margin-bottom: ${getThemeValue('spacing.xs', '6px')};
`;

export const TableMeta = styled.div`
  display: flex;
  gap: ${getThemeValue('spacing.lg', '32px')};
  font-size: ${getThemeValue('typography.small', '0.875rem')};
  color: ${getThemeValue('colors.textLight', '#718096')};

  span {
    display: flex;
    align-items: center;
    gap: ${getThemeValue('spacing.xs', '6px')};
  }
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getThemeValue('spacing.lg', '32px')};
  position: relative;
  padding-left: ${getThemeValue('spacing.lg', '32px')};

  &::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${getThemeValue('colors.border', '#e2e8f0')};
  }
`;

export const ActivityItem = styled.div`
  display: flex;
  gap: ${getThemeValue('spacing.lg', '32px')};
  position: relative;
`;

export const ActivityDot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${getThemeValue('colors.primary', '#4a6bdf')};
  border-radius: 50%;
  margin-top: 4px;
  flex-shrink: 0;
  position: absolute;
  left: -40px;
  border: 3px solid ${getThemeValue('colors.card', '#ffffff')};
  box-shadow: 0 0 0 2px ${getThemeValue('colors.primary', '#4a6bdf')};
`;

export const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getThemeValue('colors.background', '#f8f9fa')};
  padding: ${getThemeValue('spacing.md', '20px')};
  border-radius: ${getThemeValue('borderRadius.md', '12px')};
  width: 100%;
`;

export const ActivityText = styled.span`
  color: ${getThemeValue('colors.text', '#2d3748')};
  font-size: ${getThemeValue('typography.body', '1rem')};
  line-height: 1.5;
`;

export const ActivityTime = styled.span`
  font-size: ${getThemeValue('typography.small', '0.875rem')};
  color: ${getThemeValue('colors.textLight', '#718096')};
  margin-top: ${getThemeValue('spacing.xs', '6px')};
  display: inline-block;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: ${getThemeValue('spacing.lg', '32px')};
`;

export const LoadingSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid ${getThemeValue('colors.primaryLight', '#e0e6ff')};
  border-top: 5px solid ${getThemeValue('colors.primary', '#4a6bdf')};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;