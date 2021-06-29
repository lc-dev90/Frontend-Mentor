import React from "react";
import styled from "styled-components";

// Components
/* import { Search } from "@styled-icons/bootstrap/Search"; */
/* import { Search } from "@styled-icons/fa-solid/Search"; */
import { Search } from "@styled-icons/fluentui-system-filled/Search";

const SearchBar = () => {
  return (
    <SearchContainer>
      <form>
        <SearchIcon />
        <input type="text" placeholder="Search for a country..." />
      </form>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  margin: 48px 0;
  width: 480px;
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
