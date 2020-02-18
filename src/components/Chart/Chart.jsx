import React from 'react';

import { Pie } from 'react-chartjs-2';

const ChartComponent = ({ total, subsidy }) => {
  const data = {
    datasets: [
      {
        data: [total, subsidy],
        backgroundColor: ['#fff', '#999'],
        hoverBackgroundColor: ['#fff', '#999'],
        borderWidth: 5,
        borderColor: '000',
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, d) => {
          const labels = ['Total', 'Subsidy'];
          const sum = d.datasets[tooltipItem.datasetIndex].data.reduce((a, b) => a + b, 0);
          const item = d.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          const name = labels[tooltipItem.index];
          return `${name}: ${Math.round((item / sum) * 100)}%`;
        },
      },
    },
  };

  return <Pie data={data} height={80} width={80} options={options} />;
};

export default ChartComponent;
