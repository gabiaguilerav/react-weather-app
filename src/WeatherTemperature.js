import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="degrees-data">
      <div>
        <span>{Math.round(props.celsius)}</span>
      </div>

      <div className="degrees">
        <span>
          <span className="degrees-bold">°C</span>{" "}
        </span>
      </div>
    </div>
  );
}
