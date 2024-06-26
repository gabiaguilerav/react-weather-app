import "./App.css";
import Weather from "./Weather.js";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <Weather defaultCity="Maastricht" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
