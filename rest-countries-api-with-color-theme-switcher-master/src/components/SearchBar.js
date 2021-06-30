import React, { useContext } from "react";
import styled from "styled-components";

// Components
import { Search } from "@styled-icons/fluentui-system-filled/Search";

// Context
import themeContext from "../contexts/themes/themeContext";
import countriesContext from "../contexts/countries/countriesContext";

const SearchBar = ({ handleSearch }) => {
  const { darkTheme } = useContext(themeContext);
  const { searchTerm, selectValue, filterCountries, filterSearchCountries } =
    useContext(countriesContext);
  return (
    <SearchContainer darkTheme={darkTheme}>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchIcon darkTheme={darkTheme} />
        <input
          type="text"
          value={searchTerm}
          placeholder="Search for a country..."
          onChange={(e) =>
            selectValue
              ? filterCountries(selectValue, e.target.value)
              : filterSearchCountries(e.target.value)
          }
        />
      </form>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  width: 480px;
  margin-right: 20px;
  @media (max-width: 690px) {
    width: 100%;
    margin-right: 0;
  }
  form {
    position: relative;
    width: 100%;

    input {
      background-color: ${(props) => (props.darkTheme ? "#283640" : "white")};
      border-radius: 5px;
      border: none;
      font-size: 14px;
      color: ${(props) => (props.darkTheme ? "white" : "black")};
      padding: 20px 20px 20px 80px;
      width: 100%;
      outline: none;
      box-shadow: ${(props) =>
        props.darkTheme
          ? "inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63"
          : "2px 2px 10px #1e272d63"};
      @media (max-width: 690px) {
        width: 100%;
        margin-right: 0;
      }
      ::placeholder {
        color: ${(props) => (props.darkTheme ? "white" : "black")};
        font-size: 13px;
      }
      &:hover {
        background-color: ${(props) => (props.darkTheme ? "#272f34" : "white")};
        box-shadow: 0px 0px 2px 2px #0000002b;
      }
      &:focus {
        background-color: ${(props) => (props.darkTheme ? "#272f34" : "white")};
        box-shadow: 0px 0px 2px 2px #0000002b;
      }
    }
  }
`;

const SearchIcon = styled(Search)`
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  width: 22px;
  font-weight: bold !important;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
`;
