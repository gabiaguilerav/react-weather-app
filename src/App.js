import "./App.css";
import Temperature from "./Temperature";
import "./Footer.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Temperature />
        <div className="footer">
          <p>
            This project was coded by{" "}
            <a href="https://github.com/gabiaguilerav" target={"_blank"}>
              Gabriela Aguilera
            </a>{" "}
            and is on{" "}
            <a
              href="https://github.com/gabiaguilerav/meteo.git"
              target={"_blank"}
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://gabriela-react-weather-app.netlify.app/"
              target={"_blank"}
            >
              Netlify{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
