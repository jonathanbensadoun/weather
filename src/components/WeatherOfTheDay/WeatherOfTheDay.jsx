import React from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const WeatherOfTheDay = ({ date, current, weatherInfo, cityName }) => {
  return (
    <div className="flex flex-col justify-around items-center bg-custom-bg bg-cover bg-center p-2 w-full h-1/2 rounded-b-3xl text-2xl">
      <div className="flex flex-col justify-center items-center">
        <h1 className="">Météo de {cityName}</h1>
        <div className="flex flex-row items-end">
          <h1 className="text-6xl font-bold text-normal sm:text-green-400 md:text-blue-400 lg:text-red-400 xl:text-yellow-400 2xl:text-purple-400">
            {current.temperature_2m}°C
          </h1>
          <img
            className="w-20 h-20 ml-2"
            src={`./icons/${weatherInfo.icon}`}
            alt={weatherInfo.description}
          />
        </div>

        <WeatherDetails
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
      <div className="flex-col items-center justify-center">
        <WeatherDetails
          label="Humidité"
          value={current.relative_humidity_2m}
          unit="%"
        />
        <WeatherDetails
          label="Vent"
          value={current.wind_speed_10m}
          unit=" km/h"
        />
        <WeatherDetails
          label="Couv. nuageuse"
          value={current.cloud_cover}
          unit="%"
        />
        {/* <WeatherDetails
          style={'sm:block hidden'}
          label="Direction du vent "
          value={current.wind_direction_10m}
          unit="°"
        /> */}
      </div>
      <p>{weatherInfo.description}</p>
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
