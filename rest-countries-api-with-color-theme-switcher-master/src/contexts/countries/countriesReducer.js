import {
  GET_COUNTRIES,
  GET_COUNTRIE_DETAIL,
  SET_LOADING,
  CLEAR_COUNTRIE_DETAIL,
} from "../types";

const countriesReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case GET_COUNTRIE_DETAIL:
      return {
        ...state,
        countrieDetail: action.payload,
        loading: false,
      };
    case CLEAR_COUNTRIE_DETAIL:
      return {
        ...state,
        countrieDetail: {},
      };

    default:
      return state;
  }
};

export default countriesReducer;
