import React from "react";
import styled from "styled-components";

// Components

import { Search } from "@styled-icons/fluentui-system-filled/Search";

const SearchBar = ({ handleSearch }) => {
  return (
    <SearchContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  width: 480px;
  margin-right: 20px;
  form {
    position: relative;
    width: 100%;

    input {
      background-color: #283640;
      border-radius: 5px;
      border: none;
      font-size: 14px;
      color: white;
      padding: 20px 20px 20px 80px;
      width: 100%;
      ::placeholder {
        color: white;
        font-size: 13px;
      }
    }
  }
`;

const SearchIcon = styled(Search)`
  color: white;
  width: 22px;
  font-weight: bold !important;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
`;
