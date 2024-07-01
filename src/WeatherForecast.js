import React, { useState, useEffect } from "react";
import axios from "axios";

import "./WeatherForecast.css";

import ForecastDayInfo from "./ForecastDayInfo";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleSubmitForecast(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="WeatherForecast">
        <div className="row weather-forecast">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col forecast-container" key={index}>
                  <ForecastDayInfo data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "5aac6d0188c6f17d6d2bbe6591b6fef0";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmitForecast);
  }
}
