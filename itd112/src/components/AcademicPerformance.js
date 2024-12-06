// src/components/AcademicPerformanceChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AcademicPerformanceChart = ({ data }) => {
  // Prepare the data for the bar chart
  const academicPerformance = data.map(item => item.academic_perfromance);

  const counts = academicPerformance.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Academic Performance Distribution',
        data: Object.values(counts),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3>Academic Performance Distribution</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default AcademicPerformanceChart;
