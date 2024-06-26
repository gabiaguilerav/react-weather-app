import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="Temperature">
        <h1>{props.data.city}</h1>

        <div className="row temperature-data">
          <div className="temperature-actual">
            <span className="icon-image">
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="icon-image"
              />
            </span>
            <span>{Math.round(props.data.temperature)}</span>
            <span className="degrees">
              <span>°C</span>
              {" | "}
              <span>°F</span>
            </span>
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
