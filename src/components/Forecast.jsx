import React from 'react';
import moment from 'moment';

const Forecast = ({ data,unit }) => {
  return (
    <div className="mt-8 mb-4">
      <h2 className="text-2xl font-bold text-center">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {data.list.map((item) => (
          <div
            key={item.dt}
            className="bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg py-4 px-8 flex flex-col items-center w-[250px] sm:w-auto"
          >
            <p className="font-semibold">{moment(item.dt_txt).format('dddd')}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <p className="text-lg font-bold">{Math.round(item.main.temp)}°{unit === 'metric' ? 'C' : 'F'}</p>
            <p className="capitalize">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
