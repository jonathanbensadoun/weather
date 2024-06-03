import React from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';

const WeatherOfTheDay = ({ date, current, weatherInfo }) => {
  return (
    <div>
      <h2>Données météo du jour</h2>
      <p>Date: {date}</p>
      <img
        className="w-20 h-20"
        src={`./icons/${weatherInfo.icon}`}
        alt={weatherInfo.description}
      />
      <p>{weatherInfo.description}</p>
      <WeatherDetails
        label="Température extérieure"
        value={current.temperature_2m}
        unit="°C"
      />
      <WeatherDetails
        label="Température ressentie"
        value={current.apparent_temperature}
        unit="°C"
      />
      <WeatherDetails
        label="Humidité"
        value={current.relative_humidity_2m}
        unit="%"
      />
      <WeatherDetails
        label="Précipitations"
        value={current.precipitation}
        unit=" mm"
      />
      <WeatherDetails
        label="Vitesse du vent"
        value={current.wind_speed_10m}
        unit=" km/h"
      />
      <WeatherDetails
        label="Rafales de vent"
        value={current.wind_gusts_10m}
        unit=" km/h"
      />
      <WeatherDetails
        label="Direction du vent"
        value={current.wind_direction_10m}
        unit="°"
      />
      <WeatherDetails
        label="Pression atmosphérique"
        value={current.pressure_msl}
        unit=" hPa"
      />
      <WeatherDetails
        label="Couverture nuageuse"
        value={current.cloud_cover}
        unit="%"
      />
    </div>
  );
};

export default WeatherOfTheDay;
