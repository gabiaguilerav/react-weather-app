import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
    console.log(response);
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

        <div className="Temperature">
          <h1>{city}</h1>

          <div className="row temperature-data">
            <div className="temperature-actual">
              <span className="icon-image">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="icon-image"
                />
              </span>
              <span>{Math.round(weather.temperature)}</span>
              <span className="degrees">
                <span>°C</span>
                {" | "}
                <span>°F</span>
              </span>
            </div>

            <div className="more-data">
              <div>
                <span>
                  <FormattedDate date={weather.date} />
                </span>
                , <span>{weather.description}</span>
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
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
}