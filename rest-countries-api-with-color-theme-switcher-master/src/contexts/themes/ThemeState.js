import React, { useReducer, useEffect } from "react";

import ThemeContext from "./themeContext";
import ThemeReducer from "./themeReducer";
import { TOGGLE_DARK_THEME } from "../types";

const ThemeState = (props) => {
  const initialState = {
    darkTheme: true,
  };
  const [state, dispatch] = useReducer(ThemeReducer, initialState, () => {
    const localData = localStorage.getItem("darkTheme");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(state));
  }, [state]);

  const toggleDarkTheme = () => {
    dispatch({
      type: TOGGLE_DARK_THEME,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme: state.darkTheme,
        toggleDarkTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
