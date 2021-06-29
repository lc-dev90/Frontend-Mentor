import React, { useReducer } from "react";
import axios from "axios";

import CountriesContext from "./countriesContext";
import CountriesReducer from "./countriesReducer";
import {
  SET_LOADING,
  GET_COUNTRIES,
  GET_COUNTRIE_DETAIL,
  CLEAR_COUNTRIE_DETAIL,
} from "../types";

const CountriesState = (props) => {
  const initialState = {
    countries: [],
    singleCountrie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  const getCountries = async () => {
    dispatch({
      type: SET_LOADING,
    });
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);

    dispatch({
      type: GET_COUNTRIES,
      payload: data,
    });
  };

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        getCountries,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
