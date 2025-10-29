import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import './WeatherApp.css';

function WeatherApp() {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState('');
	const [bgClass, setBgClass] = useState('default-bg');

	const fetchWeather = async () => {
		try {
			setError('');
			setWeather(null);

			const encodedCity = encodeURIComponent(city.trim());
			const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}`);
			if (!geoRes.ok) throw new Error ('Failed to fetch location data');
			const geoData = await geoRes.json();

			if (!geoData.results || geoData.results.length === 0) {
				setError('City not found');
				return;
			}

			const { latitude, longitude, name, country } = geoData.results[0];

			const weatherRes = await fetch (
					`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
				)

			if (!weatherRes.ok) throw new Error ('Failed to weather data');
			const weatherData = await weatherRes.json();

			const currentWeather = {
				...weatherData.current_weather,
				location: `${name}, ${country}`,
			};

			setWeather(currentWeather);
			changeBackground(currentWeather.temperature);
		} catch (err) {
			console.error(err);
			setError('Failed to fetch Weather');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (city.trim() === ''){
			setError('Please Enter the city Name');
			return;
		}
		fetchWeather();
	};

	const changeBackground = (temp) => {
		console.log("Changing background for temp:", temp);
		if (temp < 10) setBgClass('cold-bg');
		else if (temp < 25) setBgClass('warm-bg');
		else if (temp < 35) setBgClass('hot-bg');
		else setBgClass('veryhot-bg');
	};

	return (
		<div className={`weather-container ${bgClass}`}>
			<h1>Weather Now</h1>
			<form onSubmit={handleSubmit} className="Weather-form">
				<input type="text" 
				placeholder="Enter city name"
				onChange={(e) => setCity(e.target.value)} 
				value={city}
				className="city-input"
				/>
				<br></br>
				<button type="submit" className="search-btn">Search</button>
			</form>

			{error && <p className="error-text">{error}</p>}
			{weather && <WeatherCard weather={weather} city={city} />}
		</div>
	);
}

export default WeatherApp;