import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartRef = useRef(null); // Reference for the chart

  // Prepare the data for the bar chart
  const chartData = {
    labels: data.map(item => item.Age),  // Age on x-axis
    datasets: [
      {
        label: 'NAT Results',
        data: data.map(item => item.NAT_Results),  // NAT_Results on y-axis
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Blue color with transparency
        borderColor: 'rgba(54, 162, 235, 1)',  // Solid blue for the bars
        borderWidth: 1,  // Border width for each bar
      },
    ],
  };

  // Chart.js options
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age',
        },
      },
      y: {
        title: {
          display: true,
          text: 'NAT Results',
        },
        min: 0,  // Minimum value for the y-axis
        max: 100, // Maximum value for the y-axis
        ticks: {
          stepSize: 10,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'NAT Results by Age',
      },
    },
  };

  // Clean up the chart when the component unmounts or data changes
  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;

      // Destroy the previous chart instance to prevent memory leaks and re-render errors
      if (chartInstance) {
        chartInstance.destroy();
      }
    }
  }, [data]);

  return (
    <div>
      <h3>NAT Results by Age</h3>
      <Bar data={chartData} options={chartOptions} ref={chartRef} />
    </div>
  );
};

export default BarChart;
