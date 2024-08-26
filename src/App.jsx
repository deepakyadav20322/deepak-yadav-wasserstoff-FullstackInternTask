import React, { useEffect, useState } from 'react';
import SearchBar from './components/Searchbar';
import UnitToggle from './components/UnitToggle';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { getCurrentWeather, getForecast } from './Services/weatherService';
import Loading from './components/Loading';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [units, setUnits] = useState('metric');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weatherData = await getCurrentWeather(city, units);
      const forecastData = await getForecast(city, units);
      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError('City not found. Please try again.');
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

    // Add a new function to handle the unit toggle
  const handleUnitToggle = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
    if (currentWeather && forecast) {
      handleSearch(currentWeather.name);
    }
  };
     
       // Add a useEffect hook to fetch weather data for Noida on initial render and when the unit changes 
    useEffect(() => {
      handleSearch('Noida');
    }, [units]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-black text-white"
    >
      <h1 className="text-4xl font-bold mt-8">Weather Forecast</h1>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6'>
      <SearchBar onSearch={handleSearch} />
      <UnitToggle unit={units} onToggle={handleUnitToggle} />
      </div>
     
      {loading &&<Loading/>}
      {!loading && error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && currentWeather && <CurrentWeather unit={units} data={currentWeather} />}
      {!loading && forecast && <Forecast unit={units} data={forecast} />}
    </div>
  );
}

export default App;
