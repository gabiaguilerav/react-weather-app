import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    city: "Mexico City",
    temperature: 29,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div>
      <form action="search">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          id="city-name"
        />
        <input type="submit" value="search" id="enter" />
      </form>{" "}
      <div className="Temperature">
        <h1>{weatherData.city}</h1>
        <div className="temperature-data">
          <div className="temperature-actual">
            <span className="icon-image">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </span>
            <span>{weatherData.temperature}</span>
            <span>°C</span>
          </div>
          <div className="more-data">
            <div>
              <span>{weatherData.date}</span>,{" "}
              <span>{weatherData.description}</span>
            </div>
            <div>
              Humidity:{" "}
              <strong>
                <span>{weatherData.humidity}%</span>
              </strong>
              , Wind:{" "}
              <strong>
                <span>{weatherData.wind}km/h</span>
              </strong>
            </div>
          </div>
        </div>

        <div className="prognoses">
          <div className="forecast">
            <div className="forecast-container">
              <div className="day">Mon</div>
              <div className="forecast-icon-image">🌤️</div>
              <div className="forecast-temperature">21° 13°</div>
            </div>

            <div className="forecast-container">
              <div className="day">Mon</div>
              <div className="forecast-icon-image">🌤️</div>
              <div className="forecast-temperature">21° 13°</div>
            </div>

            <div className="forecast-container">
              <div className="day">Mon</div>
              <div className="forecast-icon-image">🌤️</div>
              <div className="forecast-temperature">21° 13°</div>
            </div>

            <div className="forecast-container">
              <div className="day">Mon</div>
              <div className="forecast-icon-image">🌤️</div>
              <div className="forecast-temperature">21° 13°</div>
            </div>

            <div className="forecast-container">
              <div className="day">Mon</div>
              <div className="forecast-icon-image">🌤️</div>
              <div className="forecast-temperature">21° 13°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
