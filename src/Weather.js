import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response);
  }

  function search() {
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-4">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city..."
                required
                id="city-name"
                onChange={updateCity}
              />
              <input type="submit" id="enter" className="btn" />
            </form>
          </div>
        </div>

        <WeatherInfo data={weather} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return <h2>Loading...</h2>;
  }
}
