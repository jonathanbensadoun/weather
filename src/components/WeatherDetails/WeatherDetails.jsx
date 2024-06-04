import React from 'react';

const WeatherDetails = ({ label, value, unit, style }) => (
  <p className={[style, 'text-xs sm:text-md  ']}>
    {label}: {value}
    {unit}
  </p>
);

export default WeatherDetails;
