import React from "react";
import styled from "styled-components";

import Search from "./Search";
import SelectInput from "./SelectInput";
import CountriesContainer from "./CountriesContainer";

const Home = ({ toggleDarkTheme }) => {
  return (
    <div>
      <FilterContainer>
        <Search toggleDarkTheme={toggleDarkTheme} />
        <SelectInput toggleDarkTheme={toggleDarkTheme} />
      </FilterContainer>
      <CountriesContainer toggleDarkTheme={toggleDarkTheme} />
    </div>
  );
};

export default Home;

const FilterContainer = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
