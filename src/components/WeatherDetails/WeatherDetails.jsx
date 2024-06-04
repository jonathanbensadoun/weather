import React from 'react';

const WeatherDetails = ({ label, value, unit, style }) => (
  <p className={style}>
    {label}: {value}
    {unit}
  </p>
);

export default WeatherDetails;
