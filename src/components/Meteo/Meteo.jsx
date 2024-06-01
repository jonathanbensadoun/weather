import React, { useEffect, useState } from 'react';

const Meteo = ({ dataDay, cityName }) => {
  const [date, setDate] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState({ icon: '', description: '' });

  // Mise à jour de la date en direct
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
    }, 1000); // Mise à jour chaque seconde

    return () => clearInterval(interval);
  }, []);

  // Mise à jour du code météo
  useEffect(() => {
    if (dataDay && dataDay.current) {
      const weatherCode = dataDay.current.weather_code;
      let weatherIcon = '';
      let weatherDescription = '';

      switch (weatherCode) {
        case 0:
          weatherIcon = '0.png';
          weatherDescription = 'Ciel dégagé';
          break;
        case 1:
          weatherIcon = '1.png';
          weatherDescription =
            'Ciel légèrement nuageux / Partiellement nuageux';
          break;
        case 2:
          weatherIcon = '2.png';
          weatherDescription = 'Ciel nuageux';
          break;
        case 3:
          weatherIcon = '3.png';
          weatherDescription = 'Ciel très nuageux / Très couvert';
          break;
        case 4:
          weatherIcon = '4.png';
          weatherDescription = 'Ciel couvert / Couvert';
          break;
        case 5:
          weatherIcon = '5.png';
          weatherDescription = 'Brouillard';
          break;
        case 10:
          weatherIcon = '10.png';
          weatherDescription =
            'Ciel avec brouillard épais ou avec une épaisseur de neige au sol';
          break;
        case 16:
          weatherIcon = '16.png';
          weatherDescription = 'Pluie';
          break;
        case 17:
          weatherIcon = '17.png';
          weatherDescription = 'Tempête / Orage';
          break;
        case 20:
          weatherIcon = '20.png';
          weatherDescription = 'Chutes de neige';
          break;
        case 21:
          weatherIcon = '21.png';
          weatherDescription = 'Neige fondue';
          break;
        case 24:
          weatherIcon = '24.png';
          weatherDescription = 'Pluie et neige fondue';
          break;
        case 26:
          weatherIcon = '26.png';
          weatherDescription = 'Pluie ou averses de neige';
          break;
        case 27:
          weatherIcon = '27.png';
          weatherDescription = 'Neige ou averses de neige';
          break;
        case 28:
          weatherIcon = '28.png';
          weatherDescription = 'Pluie ou averses de pluie et de neige';
          break;
        case 29:
          weatherIcon = '29.png';
          weatherDescription = 'Brouillard avec pluie ou neige';
          break;
        case 30:
          weatherIcon = '30.png';
          weatherDescription = 'Pluie faible';
          break;
        case 31:
          weatherIcon = '31.png';
          weatherDescription = 'Pluie modérée';
          break;
        case 32:
          weatherIcon = '32.png';
          weatherDescription = 'Pluie forte';
          break;

        case 33:
          weatherIcon = '33.png';
          weatherDescription = 'Averses de pluie';
          break;
        case 34:
          weatherIcon = '34.png';
          weatherDescription = 'Pluie faible et intermittente';
          break;
        case 35:
          weatherIcon = '35.png';
          weatherDescription = 'Pluie modérée et intermittente';
          break;
        case 36:
          weatherIcon = '36.png';
          weatherDescription = 'Pluie forte et intermittente';
          break;
        case 37:
          weatherIcon = '37.png';
          weatherDescription = 'Averses de pluie faibles';
          break;
        case 38:
          weatherIcon = '38.png';
          weatherDescription = 'Averses de pluie modérées';
          break;
        case 39:
          weatherIcon = '39.png';
          weatherDescription = 'Averses de pluie fortes';
          break;
        case 40:
          weatherIcon = '40.png';
          weatherDescription = 'Neige faible';
          break;
        case 41:
          weatherIcon = '41.png';
          weatherDescription = 'Neige modérée';
          break;
        case 42:
          weatherIcon = '42.png';
          weatherDescription = 'Neige forte';
          break;
        case 43:
          weatherIcon = '43.png';
          weatherDescription = 'Averses de neige';
          break;
        case 44:
          weatherIcon = '44.png';
          weatherDescription = 'Neige faible et intermittente';
          break;
        case 45:
          weatherIcon = '45.png';
          weatherDescription = 'Neige modérée et intermittente';
          break;
        case 46:
          weatherIcon = '46.png';
          weatherDescription = 'Neige forte et intermittente';
          break;
        case 47:
          weatherIcon = '47.png';
          weatherDescription = 'Averses de neige faibles';
          break;
        case 48:
          weatherIcon = '48.png';
          weatherDescription = 'Averses de neige modérées';
          break;
        case 49:
          weatherIcon = '49.png';
          weatherDescription = 'Averses de neige fortes';
          break;
        case 50:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie ou neige faibles';
          break;
        case 51:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie ou neige modérées';
          break;
        case 52:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie ou neige fortes';
          break;
        case 53:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie faible et neige modérée';
          break;
        case 54:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie modérée et neige faible';
          break;
        case 55:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie modérée et neige modérée';
          break;
        case 56:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie modérée et neige forte';
          break;
        case 57:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie forte et neige modérée';
          break;
        case 58:
          weatherIcon = '4.png';
          weatherDescription = 'Pluie modérée et neige forte';
          break;
        case 60:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage faible ou modéré, mais sans grêle ni rafales de vent violentes';
          break;
        case 61:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage fort sans grêle ni rafales de vent violentes';
          break;
        case 62:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage faible ou modéré avec grêle et/ou rafales de vent violentes';
          break;
        case 63:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage fort avec grêle et/ou rafales de vent violentes';
          break;
        case 64:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage faible ou modéré, avec grêle et/ou rafales de vent violentes, mais sans averse';
          break;
        case 65:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage fort, avec grêle et/ou rafales de vent violentes, mais sans averse';
          break;
        case 66:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage faible ou modéré, sans grêle ni rafales de vent violentes, mais avec averse';
          break;
        case 67:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage fort, sans grêle ni rafales de vent violentes, mais avec averse';
          break;
        case 68:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage faible ou modéré, avec grêle et/ou rafales de vent violentes et avec averse';
          break;
        case 69:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage fort, avec grêle et/ou rafales de vent violentes et avec averse';
          break;
        case 70:
          weatherIcon = '70.png';
          weatherDescription = 'Averses de pluie et/ou neige faibles';
          break;
        case 71:
          weatherIcon = '71.png';
          weatherDescription = 'Averses de pluie et/ou neige modérées';
          break;
        case 72:
          weatherIcon = '72.png';
          weatherDescription = 'Averses de pluie et/ou neige fortes';
          break;
        case 73:
          weatherIcon = '73.png';
          weatherDescription = 'Averses de pluie faibles, continues';
          break;
        case 74:
          weatherIcon = '74.png';
          weatherDescription = 'Averses de pluie modérées, continues';
          break;
        case 75:
          weatherIcon = '75.png';
          weatherDescription = 'Averses de pluie fortes, continues';
          break;
        case 76:
          weatherIcon = '76.png';
          weatherDescription = 'Averses de neige faibles, continues';
          break;
        case 77:
          weatherIcon = '77.png';
          weatherDescription = 'Averses de neige modérées, continues';
          break;
        case 78:
          weatherIcon = '78.png';
          weatherDescription = 'Averses de neige fortes, continues';
          break;
        case 79:
          weatherIcon = '79.png';
          weatherDescription =
            'Averses de pluie et/ou neige faibles, continues';
          break;
        case 80:
          weatherIcon = '80.png';
          weatherDescription =
            'Averses de pluie et/ou neige modérées, continues';
          break;
        case 81:
          weatherIcon = '81.png';
          weatherDescription = 'Averses de pluie et/ou neige fortes, continues';
          break;
        case 82:
          weatherIcon = '82.png';
          weatherDescription =
            'Averses de pluie et/ou neige faibles, discontinues ';
          break;
        case 83:
          weatherIcon = '83.png';
          weatherDescription =
            'Averses de pluie et/ou neige modérées, discontinues';
          break;
        case 84:
          weatherIcon = '84.png';
          weatherDescription =
            'Averses de pluie et/ou neige fortes, discontinues';
          break;
        case 85:
          weatherIcon = '85.png';
          weatherDescription =
            'Averses de pluie et/ou neige faibles, discontinues, peu fréquentes';
          break;
        case 86:
          weatherIcon = '86.png';
          weatherDescription =
            'Averses de pluie et/ou neige modérées, discontinues, peu fréquentes';
          break;
        case 87:
          weatherIcon = '87.png';
          weatherDescription =
            'Averses de pluie et/ou neige fortes, discontinues, peu fréquentes';
          break;
        case 89:
          weatherIcon = '89.png';
          weatherDescription = 'Brouillard';
          break;
        case 90:
          weatherIcon = '90.png';
          weatherDescription = 'Brouillard épais';
          break;
        case 91:
          weatherIcon = '91.png';
          weatherDescription = 'Brouillard avec bancs de brouillard';
          break;
        case 92:
          weatherIcon = '92.png';
          weatherDescription =
            'Brouillard avec visibilité réduite par la fumée';
          break;
        case 93:
          weatherIcon = '93.png';
          weatherDescription = 'Brouillard de poussière';
          break;
        case 94:
          weatherIcon = '13.png';
          weatherDescription = 'Brouillard de sable';
          break;
        case 95:
          weatherIcon = '17.png';
          weatherDescription =
            'Brouillard de poussière ou de sable avec visibilité très réduite';
          break;
        case 96:
          weatherIcon = '17.png';
          weatherDescription = '';
          break;
        case 97:
          weatherIcon = '17.png';
          weatherDescription = 'Orage faible ou modéré, mais sans grêle';
          break;
        case 99:
          weatherIcon = '17.png';
          weatherDescription =
            'Orage faible ou modéré, mais sans grêle ni rafales de vent violentes';
          break;
        default:
          weatherIcon = 'unknown.png';
          weatherDescription = 'Inconnu';
          break;
      }

      setWeatherInfo({ icon: weatherIcon, description: weatherDescription });
    }
  }, [dataDay]);

  if (!dataDay || !dataDay.current || !cityName) {
    return <div>Chargement des données météo...</div>;
  }

  return (
    <div>
      <h1>
        Météo de{' '}
        {cityName.town || cityName.village || cityName.city || cityName.name}
      </h1>
      <h2>Données météo du jour</h2>
      <p>Date: {date}</p>
      <p>Température extérieure: {dataDay.current.temperature_2m}°C</p>
      <p>Température ressentie: {dataDay.current.apparent_temperature}°C</p>
      <p>Humidité: {dataDay.current.relative_humidity_2m}%</p>
      <p>Précipitations: {dataDay.current.precipitation} mm</p>
      <p>Vitesse du vent: {dataDay.current.wind_speed_10m} km/h</p>
      <p>Rafales de vent: {dataDay.current.wind_gusts_10m} km/h</p>
      <p>Direction du vent: {dataDay.current.wind_direction_10m}°</p>
      <p>Pression atmosphérique: {dataDay.current.pressure_msl} hPa</p>
      <p>Couverture nuageuse: {dataDay.current.cloud_cover}%</p>
      <img src={`./icons/${weatherInfo.icon}`} alt={weatherInfo.description} />
    </div>
  );
};

export default Meteo;
