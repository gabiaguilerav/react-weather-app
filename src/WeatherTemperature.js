import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="degrees-data">
        <div>
          <span>{Math.round(props.celsius)}</span>
        </div>

        <div className="degrees">
          <span>
            <span className="degrees-bold">°C |</span>{" "}
            <small>
              <a href="/" onClick={convertFahrenheit}>
                °F
              </a>
            </small>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheitTemperature = (props.celsius * 9) / 5 + 32;

    return (
      <div className="degrees-data">
        <div>
          <span>{Math.round(fahrenheitTemperature)}</span>
        </div>

        <div className="degrees">
          <span>
            <span className="degrees-bold">°F |</span>{" "}
            <small>
              <a href="/" onClick={convertCelsius}>
                °C{" "}
              </a>
            </small>
          </span>
        </div>
      </div>
    );
  }
}
