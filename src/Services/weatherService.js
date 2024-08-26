import axios from 'axios';

const API_KEY = 'daca5701def71be6643245a0d77318b2';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city, units) => {
  const url = `${BASE_URL}/weather?q=${city}&units=${units}&appid=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

export const getForecast = async (city, units = 'metric') => {
  const url = `${BASE_URL}/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
  const response = await axios.get(url);

  // Filter data to get one forecast per day at 12:00 PM-------------->
  const dailyData = response.data.list.filter((reading) =>
    reading.dt_txt.includes('12:00:00')
  );
  return { ...response.data, list: dailyData };
};
