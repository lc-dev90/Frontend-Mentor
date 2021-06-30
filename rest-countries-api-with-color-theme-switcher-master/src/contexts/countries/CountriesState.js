import React, { useReducer, useEffect } from "react";
import axios from "axios";

import CountriesContext from "./countriesContext";
import CountriesReducer from "./countriesReducer";
import {
  SET_LOADING,
  GET_COUNTRIES,
  GET_COUNTRIE_DETAIL,
  CLEAR_COUNTRIE_DETAIL,
  FILTER_SEARCH_COUNTRIES,
  FILTER_SELECT_COUNTRIES,
  FILTER_COUNTRIES,
} from "../types";

const CountriesState = (props) => {
  const initialState = {
    countries: [],
    countrieDetail: {},
    loading: false,
    filteredCountries: [],
    searchTerm: "",
    selectValue: null,
  };

  const [state, dispatch] = useReducer(CountriesReducer, initialState);

  const filterCountries = (selectValue, searchTerm) => {
    console.log("selectValue: ", selectValue, "searchTerm: ", searchTerm);
    dispatch({
      type: FILTER_COUNTRIES,
      payload: { selectValue, searchTerm },
    });
  };

  const filterSearchCountries = (searchTerm) => {
    dispatch({
      type: FILTER_SEARCH_COUNTRIES,
      payload: searchTerm,
    });
  };
  const filterSelectCountries = (selectValue) => {
    dispatch({
      type: FILTER_SELECT_COUNTRIES,
      payload: selectValue,
    });
  };

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

  useEffect(() => {
    getCountries();
    clearCountrieDetail();
  }, []);

  const getCountrieDetail = async (code) => {
    dispatch({
      type: SET_LOADING,
    });
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${code}`
    );
    dispatch({
      type: GET_COUNTRIE_DETAIL,
      payload: data,
    });
  };

  const clearCountrieDetail = () => {
    dispatch({
      type: CLEAR_COUNTRIE_DETAIL,
    });
  };

  return (
    <CountriesContext.Provider
      value={{
        countries: state.countries,
        countrieDetail: state.countrieDetail,
        loading: state.loading,
        searchTerm: state.searchTerm,
        selectValue: state.selectValue,
        filteredCountries: state.filteredCountries,
        getCountries,
        getCountrieDetail,
        clearCountrieDetail,
        filterSelectCountries,
        filterSearchCountries,
        filterCountries,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesState;
