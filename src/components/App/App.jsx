import React, { useEffect, useState } from 'react';
import './App.scss';
import Meteo from '../Meteo/Meteo';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [dataDay, setDataDay] = useState(null);

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

  // useEffect(() => {
  //   async function fetchDataWeek() {
  //       if (latitude !== null && longitude !== null) {
  //     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,precipitation_hours,wind_speed_10m_max,wind_gusts_10m_max&timezone=Europe%2FLondon`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data) {
  //         console.log("semaine",JSON.stringify(data));
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //     }
  //     fetchDataWeek();
  //   }
  // }, [latitude, longitude]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
    async function fetchDataDay() {
      console.log(latitude, longitude); 
      fetch(`https://api.open-meteo.com/v1/meteofrance?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
          console.log("jour",(data));
          console.log("jour",(data.current));
          setDataDay(data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
      fetchDataDay();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
    async function fetchDataCity() {
      await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude+1}&lon=${longitude+1}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
          console.log('where',(data));
          
          setCityName(data.address);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
      fetchDataCity();
    }
  }, [latitude, longitude]);

  return (
    <div className="App">
      
      <Meteo dataDay={dataDay} cityName={cityName}  />
    </div>
  );
}

export default App;
