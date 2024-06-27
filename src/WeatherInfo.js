import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="Temperature">
        <h1>{props.data.city}</h1>

        <div className="row temperature-data">
          <div className="temperature-actual">
            <div className="icon-image">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
                size={60}
              />
            </div>

            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="more-data">
            <div>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              , <span>{props.data.description}</span>
            </div>
            <div>
              Humidity:{" "}
              <strong>
                <span>{props.data.humidity}%</span>
              </strong>
              , Wind:{" "}
              <strong>
                <span>{props.data.wind}km/h</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
