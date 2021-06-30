import React from "react";
import styled from "styled-components";

// Components
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import CountrieList from "../components/CountrieList";

const HomePage = () => {
  return (
    <div>
      <BarsContainer>
        <SearchBar />
        <SelectBar />
      </BarsContainer>
      <CountrieList />
    </div>
  );
};

export default HomePage;

const BarsContainer = styled.div`
  display: flex;
  padding: 48px 0;
  justify-content: space-between;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
