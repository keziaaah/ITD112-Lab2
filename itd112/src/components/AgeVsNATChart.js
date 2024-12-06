import React, { useState } from 'react';
import { Scatter, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AgeVsNATChart = ({ data }) => {
  const [chartType, setChartType] = useState('scatter'); // Default chart type is 'scatter'

  const chartData = {
    datasets: [
      {
        label: 'Age vs NAT Results',
        data: data.map(item => ({
          x: item.Age,
          y: item.NAT_Results,
        })),
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age',
        },
        min: 0,  // Set the minimum value for the Age axis
        max: 100, // Set the maximum value for the Age axis
        ticks: {
          stepSize: 10,  // Set the tick step size for the x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: 'NAT Results',
        },
        min: 0,  // Set the minimum value for the NAT Results axis
        max: 100, // Set the maximum value for the NAT Results axis
        ticks: {
          stepSize: 10, // Set the tick step size for the y-axis
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Age vs NAT Results',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Age: ${tooltipItem.raw.x}, NAT Result: ${tooltipItem.raw.y}`;
          },
        },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line data={chartData} options={chartOptions} />;
      case 'bar':
        return <Bar data={chartData} options={chartOptions} />;
      default:
        return <Scatter data={chartData} options={chartOptions} />;
    }
  };

  return (
    <div className="chart-container">
      <h3>Age vs NAT Results</h3>
      <div className="chart-type-selection">
        <button className="btn btn-secondary" onClick={() => setChartType('scatter')}>
          Scatter Chart
        </button>
        <button className="btn btn-secondary" onClick={() => setChartType('line')}>
          Line Chart
        </button>
        <button className="btn btn-secondary" onClick={() => setChartType('bar')}>
          Bar Chart
        </button>
      </div>
      {renderChart()}
    </div>
  );
};

export default AgeVsNATChart;
