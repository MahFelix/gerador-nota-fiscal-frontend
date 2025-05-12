  /* eslint-disable no-unused-vars */
  import React, { useState, useEffect } from 'react';
  import {
    Table, Search, Calendar, ChevronDown, Filter, Download,
    Edit, Trash2, Eye, FileText, SortAsc, SortDesc
  } from 'lucide-react';
  import { useAuth } from '../../contexts/AuthContext';
  import {
    HistoryContainer, HistoryHeader, ToolbarContainer, SearchWrapper,
    SearchInput, ToolbarActions, ActionButton, TableContainer,
    StyledTable, Checkbox, SortableHeader, TableNameCell, TableIcon,
    StatusBadge, ActionButtons, ActionIconButton, EmptyTableMessage,
    LoadingContainer, LoadingSpinner
  } from './styles';

  const mockTables = [
    { id: 1, name: 'Tabela de Vendas Q1', date: '2023-04-15', records: 142, type: 'Excel', size: '1.2 MB', status: 'Completo' },
    { id: 2, name: 'Relatório Financeiro 2023', date: '2023-04-12', records: 83, type: 'CSV', size: '0.8 MB', status: 'Completo' },
    { id: 3, name: 'Dados de Clientes', date: '2023-04-10', records: 215, type: 'Excel', size: '2.4 MB', status: 'Completo' },
    { id: 4, name: 'Inventário Atualizado', date: '2023-04-08', records: 56, type: 'CSV', size: '0.5 MB', status: 'Completo' },
    { id: 5, name: 'Análise de Mercado', date: '2023-04-05', records: 124, type: 'Excel', size: '1.8 MB', status: 'Completo' },
    { id: 6, name: 'Relatório de Despesas', date: '2023-04-03', records: 78, type: 'CSV', size: '0.7 MB', status: 'Completo' },
    { id: 7, name: 'Projeção de Receitas', date: '2023-04-01', records: 92, type: 'Excel', size: '1.1 MB', status: 'Completo' }
  ];

  const TableHistory = () => {
    const { user } = useAuth();
    const [tables, setTables] = useState(mockTables);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [sortField, setSortField] = useState('date');
    const [sortDirection, setSortDirection] = useState('desc');
    const [selectedTables, setSelectedTables] = useState([]);

    useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    const filteredTables = tables
      .filter(table =>
        table.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        table.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const fieldA = a[sortField];
        const fieldB = b[sortField];
        if (sortDirection === 'asc') return fieldA > fieldB ? 1 : -1;
        return fieldA < fieldB ? 1 : -1;
      });

    const handleSort = (field) => {
      if (field === sortField) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    const toggleSelection = (id) => {
      setSelectedTables(prev =>
        prev.includes(id) ? prev.filter(tid => tid !== id) : [...prev, id]
      );
    };

    const toggleAllSelection = () => {
      if (selectedTables.length === filteredTables.length) {
        setSelectedTables([]);
      } else {
        setSelectedTables(filteredTables.map(t => t.id));
      }
    };

    if (isLoading) {
      return (
        <LoadingContainer>
          <LoadingSpinner />
          <span>Carregando histórico de tabelas...</span>
        </LoadingContainer>
      );
    }

    return (
      <HistoryContainer>
        <HistoryHeader>
          <h1>Histórico de Tabelas</h1>
          <p>Visualize e gerencie todas as suas tabelas importadas</p>
        </HistoryHeader>

        <ToolbarContainer>
          <SearchWrapper>
            <Search size={18} />
            <SearchInput
              type="text"
              placeholder="Pesquisar tabelas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchWrapper>

          <ToolbarActions>
            <ActionButton>
              <Filter size={16} />
              <span>Filtrar</span>
            </ActionButton>

            {selectedTables.length > 0 && (
              <>
                <ActionButton>
                  <Download size={16} />
                  <span>Exportar ({selectedTables.length})</span>
                </ActionButton>
                <ActionButton danger>
                  <Trash2 size={16} />
                  <span>Excluir ({selectedTables.length})</span>
                </ActionButton>
              </>
            )}
          </ToolbarActions>
        </ToolbarContainer>

        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                <th>
                  <Checkbox
                    type="checkbox"
                    checked={selectedTables.length === filteredTables.length && filteredTables.length > 0}
                    onChange={toggleAllSelection}
                  />
                </th>
                <SortableHeader onClick={() => handleSort('name')}>
                  <span>Nome</span>
                  {sortField === 'name' && (sortDirection === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />)}
                </SortableHeader>
                <SortableHeader onClick={() => handleSort('type')}>
                  <span>Tipo</span>
                  {sortField === 'type' && (sortDirection === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />)}
                </SortableHeader>
                <SortableHeader onClick={() => handleSort('records')}>
                  <span>Registros</span>
                  {sortField === 'records' && (sortDirection === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />)}
                </SortableHeader>
                <SortableHeader onClick={() => handleSort('date')}>
                  <span>Data</span>
                  {sortField === 'date' && (sortDirection === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />)}
                </SortableHeader>
                <SortableHeader onClick={() => handleSort('size')}>
                  <span>Tamanho</span>
                  {sortField === 'size' && (sortDirection === 'asc' ? <SortAsc size={14} /> : <SortDesc size={14} />)}
                </SortableHeader>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredTables.length > 0 ? (
                filteredTables.map(table => (
                  <tr key={table.id}>
                    <td>
                      <Checkbox
                        type="checkbox"
                        checked={selectedTables.includes(table.id)}
                        onChange={() => toggleSelection(table.id)}
                      />
                    </td>
                    <td>
                      <TableNameCell>
                        <TableIcon type={table.type}>
                          {table.type === 'Excel' ? <FileText size={16} /> : <Table size={16} />}
                        </TableIcon>
                        <span>{table.name}</span>
                      </TableNameCell>
                    </td>
                    <td>{table.type}</td>
                    <td>{table.records}</td>
                    <td>{table.date}</td>
                    <td>{table.size}</td>
                    <td>
                      <StatusBadge status={table.status}>
                        {table.status}
                      </StatusBadge>
                    </td>
                    <td>
                      <ActionButtons>
                        <ActionIconButton title="Visualizar">
                          <Eye size={16} />
                        </ActionIconButton>
                        <ActionIconButton title="Editar">
                          <Edit size={16} />
                        </ActionIconButton>
                        <ActionIconButton title="Excluir" danger>
                          <Trash2 size={16} />
                        </ActionIconButton>
                      </ActionButtons>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <EmptyTableMessage colSpan={8}>
                    <Table size={48} />
                    <p>Nenhuma tabela encontrada</p>
                    <span>Tente uma pesquisa diferente ou importe novas tabelas.</span>
                  </EmptyTableMessage>
                </tr>
              )}
            </tbody>
          </StyledTable>
        </TableContainer>
      </HistoryContainer>
    );
  };

  export default TableHistory;
