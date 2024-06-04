import React from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const WeatherOfTheDay = ({ date, current, weatherInfo }) => {
  return (
    <div className="flex flex-row justify-between p-2  h-1/2">
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-row items-end">
          <h1 className="text-2xl font-bold text-normal sm:text-green-400 md:text-blue-400 lg:text-red-400 xl:text-yellow-400 2xl:text-purple-400">
            {current.temperature_2m}°C
          </h1>
          <img
            className="w-12 h-12 ml-2"
            src={`./icons/${weatherInfo.icon}`}
            alt={weatherInfo.description}
          />
          {/* <p>{weatherInfo.description}</p> */}
        </div>
        <WeatherDetails
          style={'text-xs'}
          label="Température ressentie"
          value={current.apparent_temperature}
          unit="°C"
        />
      </div>
      {/* <WeatherDetails
        label="Température extérieure"
        value={current.temperature_2m}
        unit="°C"
      /> */}
      {/* <h2>Données météo du jour</h2> */}
      <div className="flex-col">
        <WeatherDetails
          style={'text-xs'}
          label="Humidité"
          value={current.relative_humidity_2m}
          unit="%"
        />
        <WeatherDetails
          style={'text-xs'}
          label="Vitesse du vent"
          value={current.wind_speed_10m}
          unit=" km/h"
        />
        <WeatherDetails
          style={'text-xs'}
          label="Couverture nuageuse"
          value={current.cloud_cover}
          unit="%"
        />
        <WeatherDetails
          style={'text-xs'}
          label="Direction du vent"
          value={current.wind_direction_10m}
          unit="°"
        />
      </div>
      {/* <p>Date: {date}</p> */}
      {/* <WeatherDetails
        label="Précipitations"
        value={current.precipitation}
        unit=" mm"
      /> */}
      {/* <WeatherDetails
        label="Rafales de vent"
        value={current.wind_gusts_10m}
        unit=" km/h"
      /> */}

      {/* <WeatherDetails
        label="Pression atmosphérique"
        value={current.pressure_msl}
        unit=" hPa"
      /> */}
    </div>
  );
};

export default WeatherOfTheDay;
