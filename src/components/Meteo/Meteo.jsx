import React, { useEffect, useState } from 'react';
import weatherCodeMap from '../../data/weatherCodeMap.json';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import WeatherOfTheDay from '../WeatherOfTheDay/WeatherOfTheDay';
import WeatherOfTheWeek from '../WeatherOfTheWeek/WeatherOfTheWeek';

const getWeatherInfo = (weatherCode) => {
  return (
    weatherCodeMap[weatherCode] || {
      icon: 'unknown.png',
      description: 'Inconnu',
    }
  );
};

const getCityName = (cityName) => {
  return (
    cityName.town ||
    cityName.village ||
    cityName.city ||
    cityName.name ||
    'Ville inconnue'
  );
};

const Meteo = ({ dataDay, cityName, dataWeek }) => {
  const [date, setDate] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState({ icon: '', description: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      setDate(now.toLocaleString('fr-FR', dateOptions));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (dataDay && dataDay.current) {
      const weatherCode = dataDay.current.weather_code;
      setWeatherInfo(getWeatherInfo(weatherCode));
    }
  }, [dataDay]);

  if (!dataDay || !dataDay.current || !cityName) {
    return <div>Chargement des données météo...</div>;
  }

  const city = getCityName(cityName);
  const { current } = dataDay;

  return (
    <div className="h-full w-full  lg:bg-opacity-50  lg:flex lg:flex-col lg:justify-center lg:items-center">
      <WeatherOfTheDay
        date={date}
        current={current}
        weatherInfo={weatherInfo}
        cityName={city}
      />

      {/* <h2>Prévisions météo de la semaine</h2> */}
      {/* {dataWeek.temperature_2m_max.map((day, index) => (
        <p key={index}>- {day.temperature_2m_max}°C</p>
      ))} */}
      <WeatherOfTheWeek weatherData={dataWeek} />
    </div>
  );
};

export default Meteo;
