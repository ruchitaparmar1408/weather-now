import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weather }) {
  const { name, sys, main, weather: weatherInfo, wind } = weather;

  return (
    <div className="weather-card">
      <h2>
        {name}, {sys.country}
      </h2>
      <h3>{weatherInfo[0].main}</h3>
      <p>{weatherInfo[0].description}</p>
      <p>🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>💨 Wind Speed: {wind.speed} m/s</p>
      <p>🕒 Last updated: {new Date(weather.dt * 1000).toLocaleTimeString()}</p>

    </div>
  );
}

export default WeatherCard;
