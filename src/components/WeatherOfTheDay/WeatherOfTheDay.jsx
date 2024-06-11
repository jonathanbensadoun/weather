import React, { useEffect, useRef } from 'react';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const WeatherOfTheDay = ({ date, current, weatherInfo, cityName }) => {
  return (
    <div className=" h-2/3 lg:h-auto text-primary">
      <div className="flex flex-col md:flex-row justify-around items-center  rounded-b-3xl lg:bg-transparent p-2 w-full h-full   text-2xl ">
        <div className="flex flex-col justify-center items-center">
          <p className="hidden md:block ">{date}</p>
          <h1 className="">Météo de {cityName}</h1>
          <div className="flex flex-row items-end">
            <h1 className="text-6xl md:text-8xl font-bold">
              {current.temperature_2m}°C
            </h1>
            <img
              className="w-20 h-20 ml-2 md:w-24 md:h-24"
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
        <div className="flex flex-col items-center justify-center">
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
          <WeatherDetails
            label="Direction du vent "
            value={current.wind_direction_10m}
            unit="°"
          />
          <WeatherDetails
            style={'hidden md:block'}
            label="Précipitations"
            value={current.precipitation}
            unit=" mm"
          />
          <WeatherDetails
            style={'hidden md:block'}
            label="Rafales de vent"
            value={current.wind_gusts_10m}
            unit=" km/h"
          />

          <WeatherDetails
            style={'hidden md:block'}
            label="Pression atmosphérique"
            value={current.pressure_msl}
            unit=" hPa"
          />
        </div>
        {/* <p>{weatherInfo.description}</p> */}
      </div>
    </div>
  );
};

export default WeatherOfTheDay;
