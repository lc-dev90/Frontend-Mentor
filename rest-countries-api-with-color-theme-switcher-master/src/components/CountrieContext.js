import React, { useState, createContext } from "react";

export const CountrieContext = createContext();

export const CountrieProvider = (props) => {
  const [countrie, setCountrie] = useState("");
  return (
    <CountrieContext.Provider value={[countrie, setCountrie]}>
      {props.children}
    </CountrieContext.Provider>
  );
};
