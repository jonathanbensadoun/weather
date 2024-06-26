import React from 'react';

import weatherCodeMap from '../../data/weatherCodeMap.json';

import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

const WeatherOfTheWeek = ({ weatherData }) => {
  const days = weatherData.daily.time.slice(1);

  function convertSecondsToHoursAndMinutes(totalSeconds) {
    // Calcul du nombre d'heures
    const hours = Math.floor(totalSeconds / 3600);

    // Calcul du nombre de minutes restantes
    const minutes = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');

    // Retourne le résultat sous forme de chaîne de caractères
    return hours + 'h ' + minutes + 'min';
  }

  return (
    <div className="flex text-xs justify-center items-center flex-wrap mt-4">
      {days.map((date, index) => (
        <div
          className="flex flex-col justify-center items-center p-4 border-solid border-2 bg-secondary border-gray-300 rounded-lg m-2 shadow-md "
          key={index}
        >
          <h2 className="text-lg">
            {new Date(date).toLocaleDateString('fr-FR', { weekday: 'long' })}
          </h2>
          {weatherData && weatherData.daily && (
            <>
              <img
                className="w-12 h-12"
                src={`./icons/${
                  weatherCodeMap[weatherData.daily.weather_code[index + 1]].icon
                }`}
                alt={
                  weatherCodeMap[weatherData.daily.weather_code[index + 1]]
                    .description
                }
              />
            </>
          )}
          <div className="flex flex-row">
            <div className="flex flex-row justify-end items-end ">
              <FaLongArrowAltUp className="text-red-400" />
              {weatherData.daily.temperature_2m_max[index + 1]}°
            </div>
            <div className="flex flex-row justify-end items-end">
              <FaLongArrowAltDown className="text-blue-400" />
              {weatherData.daily.temperature_2m_min[index + 1]}°{' '}
            </div>
          </div>

          <p className="hidden md:block">
            Lever du soleil :{' '}
            {new Date(weatherData.daily.sunrise[index + 1]).toLocaleTimeString(
              'fr-FR',
              {
                hour: '2-digit',
                minute: '2-digit',
              }
            )}
          </p>
          <p className="hidden md:block">
            Coucher du soleil :{' '}
            {new Date(weatherData.daily.sunset[index + 1]).toLocaleTimeString(
              'fr-FR',
              {
                hour: '2-digit',
                minute: '2-digit',
              }
            )}
          </p>
          <p className="hidden md:block">
            Durée du jour :{' '}
            {convertSecondsToHoursAndMinutes(
              weatherData.daily.daylight_duration[index + 1]
            )}
          </p>
          <p className="hidden md:block">
            Durée d'ensoleillement :{' '}
            {convertSecondsToHoursAndMinutes(
              weatherData.daily.sunshine_duration[index + 1]
            )}
          </p>

          <p className="hidden md:block">
            Heures de précipitation :{' '}
            {weatherData.daily.precipitation_hours[index + 1]}h
          </p>
          <p className="hidden md:block">
            Vitesse maximale du vent :{' '}
            {weatherData.daily.wind_speed_10m_max[index + 1]}
            km/h
          </p>
          <p className="hidden md:block">
            Rafales maximales du vent :{' '}
            {weatherData.daily.wind_gusts_10m_max[index + 1]}
            km/h
          </p>
        </div>
      ))}
    </div>
  );
};

export default WeatherOfTheWeek;
