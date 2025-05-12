// styles.js
import styled from 'styled-components';

export const HistoryContainer = styled.div`
  padding: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  background: #f9fafb;
  min-height: 100vh;
`;

export const HistoryHeader = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2rem;
    color: #1a237e;
    margin-bottom: 0.5rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }

  p {
    color: #546e7a;
    font-size: 1rem;
    max-width: 600px;
    line-height: 1.5;
  }
`;

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  flex: 1;
  max-width: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #5c6bc0;
    box-shadow: 0 0 0 3px rgba(92, 107, 192, 0.1);
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  padding: 0.6rem;
  margin-left: 0.5rem;
  width: 100%;
  outline: none;
  font-size: 0.95rem;
  color: #37474f;

  &::placeholder {
    color: #90a4ae;
  }
`;

export const ToolbarActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: 1px solid ${({ danger }) => (danger ? '#ffcdd2' : '#c5cae9')};
  background: ${({ danger }) => (danger ? '#ffebee' : '#e8eaf6')};
  color: ${({ danger }) => (danger ? '#c62828' : '#3949ab')};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    background: ${({ danger }) => (danger ? '#ffcdd2' : '#d1d9ff')};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TableContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  background: #ffffff;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.95rem;

  thead {
    th {
      position: sticky;
      top: 0;
      background: #f5f7fa;
      color: #37474f;
      font-weight: 600;
      padding: 1rem 1.25rem;
      border-bottom: 1px solid #e0e0e0;
      z-index: 10;
    }
  }

  tbody {
    tr {
      transition: all 0.2s ease;

      &:not(:last-child) {
        border-bottom: 1px solid #f0f0f0;
      }

      &:hover {
        background: #f8f9fa;
      }

      td {
        padding: 1rem 1.25rem;
        color: #455a64;
        vertical-align: middle;
      }
    }
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 16px;
  height: 16px;
  accent-color: #5c6bc0;
`;
export const SortableHeader = styled.th`
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #1a237e;
    background: #ebedf7;
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const TableNameCell = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TableIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ type }) => (type === 'Excel' ? '#e8f5e9' : '#e3f2fd')};
  color: ${({ type }) => (type === 'Excel' ? '#2e7d32' : '#1565c0')};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const StatusBadge = styled.span`
  padding: 0.35rem 0.9rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${({ status }) =>
    status === 'Completo' ? '#e8f5e9' : '#fff3e0'};
  color: ${({ status }) =>
    status === 'Completo' ? '#2e7d32' : '#e65100'};
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ status }) =>
      status === 'Completo' ? '#4caf50' : '#ff9800'};
    margin-right: 0.3rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ActionIconButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ danger }) => (danger ? '#e53935' : '#5c6bc0')};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: 36px;
  height: 36px;

  &:hover {
    background: ${({ danger }) => (danger ? '#ffebee' : '#f0f2ff')};
    color: ${({ danger }) => (danger ? '#c62828' : '#3949ab')};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const EmptyTableMessage = styled.td`
  padding: 4rem 1rem;
  text-align: center;
  color: #90a4ae;

  svg {
    opacity: 0.6;
  }

  p {
    font-size: 1.1rem;
    margin: 1.5rem 0 0.75rem;
    color: #37474f;
    font-weight: 500;
  }

  span {
    font-size: 0.95rem;
    display: block;
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  gap: 1.5rem;
  color: #5c6bc0;
`;

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(92, 107, 192, 0.1);
  border-top: 4px solid #5c6bc0;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;