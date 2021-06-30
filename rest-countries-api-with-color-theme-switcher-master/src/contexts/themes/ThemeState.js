import React, { useReducer } from "react";

import ThemeContext from "./themeContext";
import ThemeReducer from "./themeReducer";
import { TOGGLE_DARK_THEME } from "../types";

const ThemeState = (props) => {
  const initialState = {
    darkTheme: true,
  };
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

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
