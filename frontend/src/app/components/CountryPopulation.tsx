"use client";
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { CountryInfo, PopulationData } from '@/app/types';

interface CountryPopulationProps {
  country: CountryInfo;
}

const CountryPopulation = ({ country }: CountryPopulationProps) => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  useEffect(() => {
    setPopulationData(country.population);
    setLoading(false);
  }, [country]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-72">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!populationData) {
    return (
      <div className="flex items-center justify-center w-full h-72">
        <p className="text-lg">No population data available.</p>
      </div>
    );
  }

  const chartData = {
    labels: populationData.map((item) => item.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map((item) => item.value),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Population Data for ${country.commonName}`,
      },
    },
  };

  return (
    <div>
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CountryPopulation;