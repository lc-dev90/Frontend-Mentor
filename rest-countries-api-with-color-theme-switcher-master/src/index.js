import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Context
import CountriesState from "./contexts/countries/CountriesState";

ReactDOM.render(
  <CountriesState>
    <App />
  </CountriesState>,
  document.getElementById("root")
);
