import React from 'react';
import { WiStrongWind, WiHumidity, WiThermometer, WiDirectionUp } from 'react-icons/wi';

const CurrentWeather = ({ data,unit }) => {
  const {
    name,
    sys: { country },
    weather,
    main: { temp, temp_min, temp_max, humidity },
    wind: { speed, deg },
  } = data;

  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="bg-neutral-800 backdrop-blur-lg rounded drop-shadow-lg p-4 sm:p-8 mx-2 sm:mx-1 mt-8">
      <div className="flex items-center justify-center">
        <img src={iconUrl} alt="weather icon" />
        <div>
          <h2 className="text-4xl font-bold text-blue-500">
            {name}, {country}
          </h2>
          <p className="text-xl">{weather[0].description}</p>
        </div>
      </div>
      <div className="flex justify-around mt-4 flex-wrap">
        <div className="flex items-center">
          <WiThermometer size={24} />
          <span className="ml-2 text-lg">Temp: {Math.round(temp)}°{unit === 'metric' ? 'C' : 'F'}</span>
        </div>
        <div className="flex items-center">
          <WiThermometer size={24} />
          <span className="ml-2 text-lg">Min: {Math.round(temp_min)}°</span>
        </div>
        <div className="flex items-center">
          <WiThermometer size={24} />
          <span className="ml-2 text-lg">Max: {Math.round(temp_max)}°</span>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <div className="flex items-center">
          <WiHumidity size={24} />
          <span className="ml-2 text-lg">Humidity: {humidity}%</span>
        </div>
        <div className="flex items-center justify-center">
          <WiStrongWind size={24} />
          <span className="ml-2 text-lg">Wind: <span>{speed}m/s</span></span>
        </div>
        <div className="flex items-center">
          <WiDirectionUp size={24} style={{ transform: `rotate(${deg}deg)` }} />
          <span className="ml-2 text-lg">Direction: {deg}°</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
