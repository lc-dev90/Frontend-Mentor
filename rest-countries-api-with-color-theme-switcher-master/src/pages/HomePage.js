import React from "react";
import styled from "styled-components";

// Components
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";

const HomePage = () => {
  return (
    <div>
      <BarsContainer>
        <SearchBar />
        <SelectBar />
      </BarsContainer>
    </div>
  );
};

export default HomePage;

const BarsContainer = styled.div`
  display: flex;
  margin: 48px 0;
  justify-content: space-between;
`;
