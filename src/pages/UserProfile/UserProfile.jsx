import React, { useState } from 'react';

import { useAuth } from '../contexts/AuthContext';
import { 
  User, Mail, Lock, Save, Bell, UserCircle, Moon, Sun,
  Eye, EyeOff, AlertCircle, Check, Shield, Globe
} from 'lucide-react';

import {
    ProfileContainer,
    ProfileHeader,
    ProfileContent,
    ProfileTabs,
    ProfileTab,
    ProfileTabContent,
    FormHeader,
    AvatarSection,
    Avatar,
    AvatarInfo,
    FormGroup,
    InputLabel,
    InputWrapper,
    InputIcon,
    Input,
    Select,
    PasswordToggle,
    ActionButton,
    SuccessMessage,
    ErrorMessage,
    SettingGroup,
    SettingInfo,
    Toggle,
  } from './styles'; 

const UserProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(user && user.name ? user.name : '');
  const [email, setEmail] = useState(user && user.email ? user.email : '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [error, setError] = useState('');

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [importNotifications, setImportNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const [compactView, setCompactView] = useState(false);
  const [language, setLanguage] = useState('pt-BR');

  const handleSaveProfile = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    setTimeout(() => {
      setSaveSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1000);
  };
  return (
    <ProfileContainer>
      <ProfileHeader>
        <h1>Meu Perfil</h1>
        <p>Gerencie suas informações pessoais e preferências</p>
      </ProfileHeader>
      
      <ProfileContent>
        <ProfileTabs>
          <ProfileTab 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} />
            <span>Perfil</span>
          </ProfileTab>
          <ProfileTab 
            active={activeTab === 'security'} 
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} />
            <span>Segurança</span>
          </ProfileTab>
          <ProfileTab 
            active={activeTab === 'notifications'} 
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} />
            <span>Notificações</span>
          </ProfileTab>
          <ProfileTab 
            active={activeTab === 'display'} 
            onClick={() => setActiveTab('display')}
          >
            <Moon size={18} />
            <span>Aparência</span>
          </ProfileTab>
        </ProfileTabs>
        
        <ProfileTabContent>
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile}>
              <FormHeader>
                <h2>Informações Pessoais</h2>
                <p>Atualize suas informações pessoais</p>
              </FormHeader>
              
              <AvatarSection>
                <Avatar>
                  <UserCircle size={64} />
                </Avatar>
                <AvatarInfo>
                  <h3>Foto de Perfil</h3>
                  <p>Clique para fazer upload de uma nova imagem</p>
                </AvatarInfo>
              </AvatarSection>
              
              <FormGroup>
                <InputLabel htmlFor="name">Nome Completo</InputLabel>
                <InputWrapper>
                  <InputIcon>
                    <User size={18} />
                  </InputIcon>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </InputWrapper>
              </FormGroup>
              
              <FormGroup>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputWrapper>
                  <InputIcon>
                    <Mail size={18} />
                  </InputIcon>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputWrapper>
              </FormGroup>
              
              <ActionButton type="submit">
                <Save size={18} />
                <span>Salvar Alterações</span>
              </ActionButton>
              
              {saveSuccess && (
                <SuccessMessage>
                  <Check size={16} />
                  <span>Informações atualizadas com sucesso!</span>
                </SuccessMessage>
              )}
            </form>
          )}
          
          {activeTab === 'security' && (
            <form onSubmit={handleChangePassword}>
              <FormHeader>
                <h2>Segurança</h2>
                <p>Altere sua senha e gerencie configurações de segurança</p>
              </FormHeader>
              
              {error && (
                <ErrorMessage>
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </ErrorMessage>
              )}
              
              <FormGroup>
                <InputLabel htmlFor="currentPassword">Senha Atual</InputLabel>
                <InputWrapper>
                  <InputIcon>
                    <Lock size={18} />
                  </InputIcon>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="currentPassword"
                    placeholder="Sua senha atual"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                  <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </PasswordToggle>
                </InputWrapper>
              </FormGroup>
              
              <FormGroup>
                <InputLabel htmlFor="newPassword">Nova Senha</InputLabel>
                <InputWrapper>
                  <InputIcon>
                    <Lock size={18} />
                  </InputIcon>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="newPassword"
                    placeholder="Nova senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </InputWrapper>
              </FormGroup>
              
              <FormGroup>
                <InputLabel htmlFor="confirmPassword">Confirmar Nova Senha</InputLabel>
                <InputWrapper>
                  <InputIcon>
                    <Lock size={18} />
                  </InputIcon>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirme a nova senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </InputWrapper>
              </FormGroup>
              
              <ActionButton type="submit">
                <Save size={18} />
                <span>Atualizar Senha</span>
              </ActionButton>
              
              {saveSuccess && (
                <SuccessMessage>
                  <Check size={16} />
                  <span>Senha atualizada com sucesso!</span>
                </SuccessMessage>
              )}
            </form>
          )}
          
          {activeTab === 'notifications' && (
            <form onSubmit={handleSaveProfile}>
              <FormHeader>
                <h2>Notificações</h2>
                <p>Gerencie como e quando você deseja receber notificações</p>
              </FormHeader>
              
              <SettingGroup>
                <SettingInfo>
                  <h3>Notificações por Email</h3>
                  <p>Receba atualizações importantes por email</p>
                </SettingInfo>
                <Toggle 
                  checked={emailNotifications} 
                  onChange={() => setEmailNotifications(!emailNotifications)} 
                />
              </SettingGroup>
              
              <SettingGroup>
                <SettingInfo>
                  <h3>Notificações de Importação</h3>
                  <p>Seja notificado quando uma tabela for importada com sucesso</p>
                </SettingInfo>
                <Toggle 
                  checked={importNotifications} 
                  onChange={() => setImportNotifications(!importNotifications)} 
                />
              </SettingGroup>
              
              <SettingGroup>
                <SettingInfo>
                  <h3>Relatórios Semanais</h3>
                  <p>Receba resumos semanais das suas atividades</p>
                </SettingInfo>
                <Toggle 
                  checked={weeklyReports} 
                  onChange={() => setWeeklyReports(!weeklyReports)} 
                />
              </SettingGroup>
              
              <ActionButton type="submit">
                <Save size={18} />
                <span>Salvar Preferências</span>
              </ActionButton>
              
              {saveSuccess && (
                <SuccessMessage>
                  <Check size={16} />
                  <span>Preferências salvas com sucesso!</span>
                </SuccessMessage>
              )}
            </form>
          )}
          
          {activeTab === 'display' && (
            <form onSubmit={handleSaveProfile}>
              <FormHeader>
                <h2>Aparência</h2>
                <p>Personalize a aparência e comportamento da interface</p>
              </FormHeader>
              
              <SettingGroup>
                <SettingInfo>
                  <h3>Modo Escuro</h3>
                  <p>Ative o modo escuro para reduzir a fadiga visual</p>
                </SettingInfo>
                <Toggle 
                  checked={darkMode} 
                  onChange={() => setDarkMode(!darkMode)} 
                  icons={<><Sun size={12} /><Moon size={12} /></>}
                />
              </SettingGroup>
              
              <SettingGroup>
                <SettingInfo>
                  <h3>Visualização Compacta</h3>
                  <p>Reduza o espaçamento para exibir mais conteúdo</p>
                </SettingInfo>
                <Toggle 
                  checked={compactView} 
                  onChange={() => setCompactView(!compactView)} 
                />
              </SettingGroup>
              
              <FormGroup>
                <InputLabel htmlFor="language">Idioma</InputLabel>
                <Select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="pt-BR">Português (Brasil)</option>
                  <option value="en-US">English (US)</option>
                  <option value="es">Español</option>
                </Select>
              </FormGroup>
              
              <ActionButton type="submit">
                <Save size={18} />
                <span>Salvar Preferências</span>
              </ActionButton>
              
              {saveSuccess && (
                <SuccessMessage>
                  <Check size={16} />
                  <span>Preferências salvas com sucesso!</span>
                </SuccessMessage>
              )}
            </form>
          )}
        </ProfileTabContent>
      </ProfileContent>
    </ProfileContainer>
  );
};


export default UserProfile;