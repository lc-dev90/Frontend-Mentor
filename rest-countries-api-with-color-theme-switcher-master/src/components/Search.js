import React from "react";
import styled from "styled-components";

const Search = () => {
  return (
    <div>
      <SearchCountry>
        <i className="fas fa-search"></i>
        <label htmlFor="country">
          <input
            type="text"
            id="country"
            placeholder="Search for a country..."
          />
        </label>
      </SearchCountry>
    </div>
  );
};

export default Search;

const SearchCountry = styled.form`
  background-color: #283640;
  color: white;
  border-radius: 5px;
  width: 480px;
  box-shadow: 2px 2px 10px #1e272dab;
  display: flex;
  align-items: center;
  position: relative;
  i {
    position: absolute;
    left: 30px;
  }
  label {
    width: 100%;
    input {
      padding: 22px 32px;
      background-color: transparent;
      width: 100%;
      height: 100%;
      color: white;
      border: none;
      outline: none;
      font-size: 14px;
      padding-left: 74px;
      border-radius: 5px;
      &:focus {
        box-shadow: inset 0 0 4px #000000b3;
      }
      &::placeholder {
        color: white;
      }
    }
  }
`;
