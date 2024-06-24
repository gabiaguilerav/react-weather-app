import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/gabiaguilerav"
          target={"_blank"}
          rel="noreferrer"
        >
          Gabriela Aguilera
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/gabiaguilerav/react-weather-app.git"
          target={"_blank"}
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://gabriela-react-weather-app.netlify.app/"
          target={"_blank"}
          rel="noreferrer"
        >
          Netlify{" "}
        </a>
      </p>
    </div>
  );
}
