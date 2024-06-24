import "./App.css";
import React from "react";
import Temperature from "./Temperature.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Temperature />
        <Footer />
      </div>
    </div>
  );
}
