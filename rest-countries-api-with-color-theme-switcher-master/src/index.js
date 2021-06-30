import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Context
import CountriesState from "./contexts/countries/CountriesState";
import ThemeState from "./contexts/themes/ThemeState";

ReactDOM.render(
  <CountriesState>
    <ThemeState>
      <App />
    </ThemeState>
  </CountriesState>,
  document.getElementById("root")
);
