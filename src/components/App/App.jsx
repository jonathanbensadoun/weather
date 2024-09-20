import { useEffect, useRef, useState } from 'react';
import './App.scss';
import FOG from 'vanta/dist/vanta.fog.min';
import Meteo from '../Meteo/Meteo';

function App() {
  const [latitude, setLatitude] = useState(48.86);
  const [longitude, setLongitude] = useState(2.35);
  const [cityName, setCityName] = useState(null);
  const [dataDay, setDataDay] = useState(null);
  const [dataWeek, setDataWeek] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude.toFixed(2);
          const lon = position.coords.longitude.toFixed(2);
          setLatitude(lat);
          setLongitude(lon);
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
            setDataDay(data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    if (latitude !== null && longitude !== null) {
      fetchDataDay();
    }
  }, [latitude, longitude]);

  async function fetchDataCity() {
    await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
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

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
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
        highlightColor: 0xb3e5fc, // light blue
        midtoneColor: 0x3a9fca, // medium blue
        lowlightColor: 0x29b6f6, // darker blue
        baseColor: 0xe0eff7,
        zoom: 0.4,
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
