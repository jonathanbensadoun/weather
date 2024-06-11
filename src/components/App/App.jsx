import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Meteo from '../Meteo/Meteo';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [dataDay, setDataDay] = useState(null);
  const [dataWeek, setDataWeek] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude.toFixed(2);
          const longitude = position.coords.longitude.toFixed(2);
          setLatitude(latitude);
          setLongitude(longitude);
        },
        function (error) {
          console.error(
            'Erreur lors de la récupération de la géolocalisation :',
            error
          );
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas prise en charge par votre navigateur."
      );
    }
  }, []);
  //dwd-icon
  useEffect(() => {
    async function fetchDataWeek() {
      if (latitude !== null && longitude !== null) {
        fetch(
          `https://api.open-meteo.com/v1/meteofrance?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=Europe%2FLondon`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              // console.log('semaine', JSON.stringify(data));
              // console.log('semaine', data);
              setDataWeek(data);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
    fetchDataWeek();
  }, [latitude, longitude]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      async function fetchDataDay() {
        fetch(
          `https://api.open-meteo.com/v1/meteofrance?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              console.log('jour', data);
              // console.log('jour', data.current);
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
        await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${
            latitude + 1
          }&lon=${longitude + 1}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              // console.log('where', data);

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

  const myRef = useRef(null);

  useEffect(() => {
    let vantaEffect;
    if (myRef.current) {
      vantaEffect = FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0xe1ff,
        midtoneColor: 0x478ca2,
        lowlightColor: 0x96ff,
        baseColor: 0xffffff,
        zoom: 0.2,
        THREE: THREE,
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div
      ref={myRef}
      className="App bg-primary h-screen flex justify-center items-start font-bold text-normal text-shadow-custom-md lg:px-20 lg:py-10"
    >
      <Meteo dataDay={dataDay} cityName={cityName} dataWeek={dataWeek} />
    </div>
  );
}

export default App;
