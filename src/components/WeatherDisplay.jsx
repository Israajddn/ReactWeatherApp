import React from 'react';
import { useState, useEffect } from "react";

export default function WeatherDisplay({weather}) {
    // Function to return loaded JSX
  const loaded = () => {
    return (
        <div className='WeatherDisplay'>
            {/* <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> */}
            <h1>{weather.name}</h1>
            <h2>{weather.main.temp}</h2>
            <div className="description">{weather.weather[0].description}</div>
            <div className="humidity">{weather.main.humidity}</div>
            <div className="wind">{weather.wind.speed}</div>
        </div>
    )
};
 // Function to return loading JSX
 const loading = () => {
    return <h1>No Weather to Display</h1>;
  };

  // Ternary operator will determine which functions JSX we will return
  return weather ? loaded() : loading();
}



