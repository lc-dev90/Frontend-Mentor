import React from "react";
import styled from "styled-components";

import Search from "./Search";
import SelectInput from "./SelectInput";
import CountriesContainer from "./CountriesContainer";

const Home = () => {
  return (
    <div>
      <FilterContainer>
        <Search />
        <SelectInput />
      </FilterContainer>
      <CountriesContainer />
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
`;
