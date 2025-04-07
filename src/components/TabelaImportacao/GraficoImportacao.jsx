import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ContainerGrafico = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  height: 300px;
`;

const GraficoImportacao = ({ dados, colunas }) => {
  // Encontrar colunas numéricas para o gráfico
  const encontrarColunasNumericas = () => {
    if (!dados || !colunas || dados.length === 0 || colunas.length === 0) return [];
  
    return colunas.filter(coluna => {
      return dados.some(linha => {
        const valor = linha[coluna];
        return !isNaN(parseFloat(valor)) && isFinite(valor);
      });
    });
  };

  const colunasNumericas = encontrarColunasNumericas();
  
  // Se não houver colunas numéricas, não exibir o gráfico
  if (colunasNumericas.length === 0) {
    return null;
  }

  // Criar dataset para cada coluna numérica
  const datasets = colunasNumericas.map((coluna, index) => {
    const valores = dados.map(linha => parseFloat(linha[coluna]) || 0);
    
    // Gerar cores diferentes para cada dataset
    const hue = (index * 360 / colunasNumericas.length) % 360;
    return {
      label: coluna,
      data: valores,
      backgroundColor: `hsla(${hue}, 70%, 50%, 0.5)`,
      borderColor: `hsla(${hue}, 70%, 50%, 1)`,
      borderWidth: 1
    };
  });

  const data = {
    labels: dados.map((_, index) => `Linha ${index + 1}`),
    datasets: datasets
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <ContainerGrafico>
      <Bar 
        data={data} 
        options={options} 
        height={250}
      />
    </ContainerGrafico>
  );
};

export default GraficoImportacao;