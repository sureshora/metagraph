import { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Select from 'react-select';
import Head from 'next/head';

// Register the necessary Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [message, setMessage] = useState('');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Correct country options with ISO 3166-1 alpha-2 codes
  const countryOptions = [
    { value: 'US', label: 'United States' }, 
    { value: 'IN', label: 'India' },
    { value: 'UK', label: 'United Kingdom' },
  ];

  // City options based on the selected country
  const cityOptions = {
    US: [
      { value: 'New York', label: 'New York' },
      { value: 'Los Angeles', label: 'Los Angeles' },
    ],
    IN: [
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Mumbai', label: 'Mumbai' },
    ],
    UK: [
      { value: 'London', label: 'London' },
      { value: 'Manchester', label: 'Manchester' },
    ],
  };

  // When a country is selected, auto-populate the cities dropdown
  const handleCountryChange = (selected) => {
    setCountry(selected.value);
    setCities(cityOptions[selected.value] || []);
    setCity(''); 
  };

  // Function to fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async () => {
    if (!city || !country) {
      setMessage('Please select both a city and country.');
      return;
    }

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`
      );
      const weatherData = response.data;

      const temperature = weatherData.main.temp;
      const humidity = weatherData.main.humidity;

      // Log the data before sending to the backend
      console.log('Sending data to API:', { city, country, temperature, humidity });

      // Store the fetched data in the custom API endpoint
      await axios.post('/api/data', {
        city,
        country,
        temperature,
        humidity,
      });

      // Fetch stored data for displaying on the chart
      const storedData = await axios.get('/api/data');
      const cityLabels = storedData.data.data.map((entry) => entry.city);
      const temperatureData = storedData.data.data.map((entry) => entry.temperature);
      const humidityData = storedData.data.data.map((entry) => entry.humidity);

      // Update chart data
      setChartData({
        labels: cityLabels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperatureData,
            borderColor: 'rgba(255,99,132,1)',
            fill: false,
          },
          {
            label: 'Humidity (%)',
            data: humidityData,
            borderColor: 'rgba(54,162,235,1)',
            fill: false,
          },
        ],
      });

      setMessage(`Weather data for ${city}, ${country} fetched and stored successfully.`);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setMessage('Error fetching weather data. Please check the city and country names.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Head>
        <title>ECOSPHERE: Real-Time Environmental Intelligence</title>
      </Head>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600">Welcome to ECOSPHERE</h1>
        <p className="mt-5 text-lg">Select a country and city to fetch environmental data.</p>

        {/* Form to select country and city */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchWeatherData();
          }}
          className="mt-10 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4"
        >
          {/* Country selection */}
          <Select
            options={countryOptions}
            onChange={handleCountryChange}
            placeholder="Select a country"
            className="w-full md:w-1/2"
          />

          {/* City selection (auto-filtered based on country) */}
          <Select
            options={cities}
            onChange={(selected) => setCity(selected.value)}
            value={cities.find((c) => c.value === city)}
            placeholder="Select a city"
            className="w-full md:w-1/2"
            isDisabled={!country} 
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-500 transition"
          >
            Fetch Data
          </button>
        </form>

        {message && <p className="mt-5 text-green-500">{message}</p>}

        {/* Chart Display */}
        <div className="mt-10">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

