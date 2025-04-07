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

const GraficoBalancoDiario = ({ notas }) => {
  // Processa os dados para o gráfico
  const processarDados = () => {
    const dadosPorData = {};
    
    notas.forEach(nota => {
      const data = new Date(nota.dataEmissao).toLocaleDateString();
      if (!dadosPorData[data]) {
        dadosPorData[data] = 0;
      }
      dadosPorData[data] += parseFloat(nota.valor);
    });
    
    const labels = Object.keys(dadosPorData);
    const valores = Object.values(dadosPorData);
    
    // Gerar cores baseadas no valor
    const cores = valores.map(valor => {
      const intensidade = Math.min(0.2 + (valor / Math.max(...valores)) * 0.8, 1);
      return `rgba(75, 192, 192, ${intensidade})`;
    });
    
    return {
      labels,
      datasets: [
        {
          label: 'Valor Total (R$)',
          data: valores,
          backgroundColor: cores,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };
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
            return `R$ ${context.raw.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return `R$ ${value}`;
          }
        }
      }
    }
  };

  const data = processarDados();

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

export default GraficoBalancoDiario;