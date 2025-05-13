/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Table, Clock, FileCheck, Eye, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardStats,
  StatCard,
  StatIconWrapper,
  StatContent,
  StatValue,
  StatLabel,
  DashboardGrid,
  GridItem,
  SectionHeader,
  SectionTitle,
  ViewAllLink,
  TablesList,
  TableItem,
  TableIcon,
  TableInfo,
  TableName,
  TableMeta,
  ActivityList,
  ActivityItem,
  ActivityDot,
  ActivityContent,
  ActivityText,
  ActivityTime,
  LoadingContainer,
  LoadingSpinner
} from './styles';

const Dashboard = () => {
  const { user } = useAuth();
  const [recentTables, setRecentTables] = useState(mockRecentTables);
  const [activity, setActivity] = useState(mockActivity);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <span>Carregando...</span>
      </LoadingContainer>
    );
  }

  const userName = 'Agnaldo'

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Dashboard</h1>
        <p>Bem-vindo de volta, {userName}!</p>
      </DashboardHeader>

      <DashboardStats>
        <StatCard>
          <StatIconWrapper bg="primary">
            <Table size={24} />
          </StatIconWrapper>
          <StatContent>
            <StatValue>12</StatValue>
            <StatLabel>Total de Tabelas</StatLabel>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatIconWrapper bg="accent">
            <Clock size={24} />
          </StatIconWrapper>
          <StatContent>
            <StatValue>4</StatValue>
            <StatLabel>Tabelas Recentes</StatLabel>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatIconWrapper bg="success">
            <FileCheck size={24} />
          </StatIconWrapper>
          <StatContent>
            <StatValue>496</StatValue>
            <StatLabel>Total de Registros</StatLabel>
          </StatContent>
        </StatCard>
      </DashboardStats>

      <DashboardGrid>
        <GridItem>
          <SectionHeader>
            <SectionTitle>
              <Eye size={18} />
              <h2>Tabelas Recentes</h2>
            </SectionTitle>
            <ViewAllLink to="/history">Ver todas</ViewAllLink>
          </SectionHeader>

          <TablesList>
            {recentTables.map(table => (
              <TableItem key={table.id}>
                <TableIcon>
                  <Table size={20} />
                </TableIcon>
                <TableInfo>
                  <TableName>{table.name}</TableName>
                  <TableMeta>
                    <span><Calendar size={14} /> {table.date}</span>
                    <span>{table.records} registros</span>
                  </TableMeta>
                </TableInfo>
              </TableItem>
            ))}
          </TablesList>
        </GridItem>

        <GridItem>
          <SectionHeader>
            <SectionTitle>
              <Clock size={18} />
              <h2>Atividade Recente</h2>
            </SectionTitle>
          </SectionHeader>

          <ActivityList>
            {activity.map(item => (
              <ActivityItem key={item.id}>
                <ActivityDot />
                <ActivityContent>
                  <ActivityText>
                    <strong>{item.action}</strong> • {item.target}
                  </ActivityText>
                  <ActivityTime>{item.date}</ActivityTime>
                </ActivityContent>
              </ActivityItem>
            ))}
          </ActivityList>
        </GridItem>
      </DashboardGrid>
    </DashboardContainer>
  );
};

const mockRecentTables = [
  { id: 1, name: 'Tabela de Vendas Q1', date: '2023-04-15', records: 142 },
  { id: 2, name: 'Relatório Financeiro 2023', date: '2023-04-12', records: 83 },
  { id: 3, name: 'Dados de Clientes', date: '2023-04-10', records: 215 },
  { id: 4, name: 'Inventário Atualizado', date: '2023-04-08', records: 56 }
];

const mockActivity = [
  { id: 1, action: 'Importou uma tabela', target: 'Tabela de Vendas Q1', date: '15 Abr, 14:35' },
  { id: 2, action: 'Editou uma tabela', target: 'Relatório Financeiro 2023', date: '12 Abr, 09:20' },
  { id: 3, action: 'Visualizou uma tabela', target: 'Dados de Clientes', date: '10 Abr, 16:45' },
  { id: 4, action: 'Importou uma tabela', target: 'Inventário Atualizado', date: '08 Abr, 11:15' }
];

export default Dashboard;