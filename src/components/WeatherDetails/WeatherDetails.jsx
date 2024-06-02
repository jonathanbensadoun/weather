import React from 'react';

const WeatherDetails = ({ label, value, unit }) => (
  <p>
    {label}: {value}
    {unit}
  </p>
);

export default WeatherDetails;
