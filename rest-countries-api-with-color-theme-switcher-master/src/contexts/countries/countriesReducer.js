import {
  GET_COUNTRIES,
  GET_COUNTRIE_DETAIL,
  SET_LOADING,
  CLEAR_COUNTRIE_DETAIL,
  FILTER_COUNTRIES,
  FILTER_SEARCH_COUNTRIES,
  FILTER_SELECT_COUNTRIES,
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
        filteredCountries: action.payload,
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
    case FILTER_COUNTRIES:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
        selectValue: action.payload.selectValue,
        filteredCountries: state.countries
          .filter((countrie) =>
            countrie.name
              .toLowerCase()
              .includes(action.payload.searchTerm.toLowerCase().trim())
          )
          .filter((countrie) =>
            countrie.region
              .toLowerCase()
              .includes(action.payload.selectValue.toLowerCase().trim())
          ),
      };
    case FILTER_SEARCH_COUNTRIES:
      return {
        ...state,
        searchTerm: action.payload,
        filteredCountries: state.countries.filter((countrie) =>
          countrie.name
            .toLowerCase()
            .includes(action.payload.toLowerCase().trim())
        ),
      };
    case FILTER_SELECT_COUNTRIES:
      return {
        ...state,
        selectValue: action.payload,
        filteredCountries: state.countries.filter((countrie) =>
          countrie.region.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default countriesReducer;
