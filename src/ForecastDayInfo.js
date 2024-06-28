import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function ForecastDayInfo(props) {
  function maxTemp() {
    let temperatureMax = Math.round(props.data.temp.max);
    return `${temperatureMax}°`;
  }

  function minTemp() {
    let temperatureMin = Math.round(props.data.temp.min);
    return `${temperatureMin}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon-image">
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>
      <div className="forecast-temperature">
        <span className="forecast-max-temperture">{maxTemp()}</span> -{" "}
        <span className="forecast-min-temperture">{minTemp()}</span>
      </div>
    </div>
  );
}
