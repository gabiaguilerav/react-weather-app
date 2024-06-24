import logo from "./logo.svg";
import "./App.css";
import Temperature from "./Temperature.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Temperature />
        <Footer />
      </div>
    </div>
  );
}

export default App;
