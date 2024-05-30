import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      
      navigator.geolocation.getCurrentPosition(function(position) {
       
        const latitude = position.coords.latitude.toFixed(2);
        const longitude = position.coords.longitude.toFixed(2);
        setLatitude(latitude);
        setLongitude(longitude);
     
      }, function(error) {
      
        console.error("Erreur lors de la récupération de la géolocalisation :", error);
      });
    } else {
     
      console.error("La géolocalisation n'est pas prise en charge par votre navigateur.");
    }
  }, []); 

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=Europe%2FLondon&forecast_days=1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [latitude, longitude]);

  return <div className="container">Hello World</div>;
}

export default App;
