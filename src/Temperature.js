import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";

export default function Temperature(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        required
        id="city-name"
        onChange={updateCity}
      />
      <input type="submit" id="enter" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="Temperature">
          <h1>{city}</h1>
          <div className="temperature-data">
            <div className="temperature-actual">
              <span className="icon-image">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="icon-image"
                />
              </span>
              <span>{Math.round(weather.temperature)}</span>
              <span>°C</span>
            </div>
            <div className="more-data">
              <div>
                <span>Monday 10:00</span>, <span>{weather.description}</span>
              </div>
              <div>
                Humidity:{" "}
                <strong>
                  <span>{weather.humidity}%</span>
                </strong>
                , Wind:{" "}
                <strong>
                  <span>{weather.wind}km/h</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
