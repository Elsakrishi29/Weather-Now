import React from 'react';
import './WeatherCard.css';

function WeatherCard({ weather }) {
	return(
		<div className="weather-card">
			<h2>{weather.location}</h2>
			<p>Temperature 🌡: {weather.temperature} °C</p>
			<p>Wind Speed: {weather.windspeed} km/h</p>
			<p>Wind Direction: {weather.winddirection}°</p>
			<p>Time: {weather.time}</p>
		</div>
	);

}

export default WeatherCard;