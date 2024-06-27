import React from "react";

import "./WeatherForecast.css";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col forecast-container">
          <div className="forecast-day">Mon</div>
          <div className="forecast-icon-image">
            <WeatherIcon code={"03n"} size={50} />
          </div>
          <div className="forecast-temperature">
            <span className="forecast-max-temperture">21°</span> -{" "}
            <span className="forecast-min-temperture">13°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
