import { TOGGLE_DARK_THEME } from "../types";

const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return {
        darkTheme: !state.darkTheme,
      };

    default:
      return state;
  }
};

export default themeReducer;
