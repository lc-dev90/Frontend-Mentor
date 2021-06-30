import React, { useState } from "react";
import styled from "styled-components";

// Components
import SearchBar from "../components/SearchBar";
import SelectBar from "../components/SelectBar";
import CountrieList from "../components/CountrieList";

const HomePage = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [inputSelect, setInputSelect] = useState("");

  const handleSearch = (searchTerm) => {
    setInputSearch(searchTerm);
  };

  const handleSelectChange = (value) => {
    setInputSelect(value);
  };

  return (
    <div>
      <BarsContainer>
        <SearchBar handleSearch={handleSearch} />
        <SelectBar handleSelectChange={handleSelectChange} />
      </BarsContainer>
      <CountrieList searchTerm={inputSearch} selectValue={inputSelect} />
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
