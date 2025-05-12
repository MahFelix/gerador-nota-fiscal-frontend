// Styled Components
import styled from 'styled-components';

const ProfileContainer = styled.div`
  padding: ${props => props.theme.spacing.lg};
`;

const ProfileHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  p {
    color: ${props => props.theme.colors.textLight};
  }
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileTabs = styled.div`
  background-color: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  overflow: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ProfileTab = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  background-color: ${props => props.active ? props.theme.colors.primary + '10' : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  text-align: left;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};
  border-left: 4px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};

  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary + '15' : props.theme.colors.background};
  }

  svg {
    margin-right: ${props => props.theme.spacing.md};
  }

  @media (max-width: 768px) {
    width: auto;
    border-left: none;
    border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  }
`;

const ProfileTabContent = styled.div`
  background-color: ${props => props.theme.colors.card};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  padding: ${props => props.theme.spacing.xl};
`;

const FormHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  p {
    color: ${props => props.theme.colors.textLight};
  }
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: ${props => props.theme.spacing.md};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background-color: ${props => props.theme.colors.primary}30;
  }
`;

const AvatarInfo = styled.div`
  h3 {
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.xs};
  font-weight: 500;
  color: ${props => props.theme.colors.text};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  padding-left: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  transition: border-color ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight}40;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  background-color: white;
  transition: border-color ${props => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight}40;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: ${props => props.theme.spacing.md};
  background: none;
  border: none;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }

  svg {
    margin-right: ${props => props.theme.spacing.sm};
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.success}15;
  color: ${props => props.theme.colors.success};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.875rem;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.error}15;
  color: ${props => props.theme.colors.error};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: 0.875rem;
`;

const SettingGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md} 0;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const SettingInfo = styled.div`
  h3 {
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

// Toggle
const ToggleWrapper = styled.div`
  cursor: pointer;
`;

const ToggleTrack = styled.div`
  width: 50px;
  height: 24px;
  background-color: ${props => props.checked ? props.theme.colors.primary : props.theme.colors.secondary};
  border-radius: 12px;
  position: relative;
  transition: background-color ${props => props.theme.transitions.fast};
`;

const ToggleThumb = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${props => props.checked ? '28px' : '2px'};
  transition: left ${props => props.theme.transitions.fast};
  z-index: 1;
`;

const ToggleIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  color: white;
`;

const Toggle = ({ checked, onChange, icons }) => {
  return (
    <ToggleWrapper onClick={onChange}>
      <ToggleTrack checked={checked}>
        {icons && <ToggleIcons>{icons}</ToggleIcons>}
        <ToggleThumb checked={checked} />
      </ToggleTrack>
    </ToggleWrapper>
  );
};
