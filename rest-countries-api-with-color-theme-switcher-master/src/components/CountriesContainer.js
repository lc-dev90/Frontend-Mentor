import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CountrieCard from "./CountrieCard";

import { SearchContext } from "./SearchContext";
import { SelectContext } from "./SelectContext";

const CountriesContainer = ({ toggleDarkTheme }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm] = useContext(SearchContext);
  const [selectedItem, setSelectedItem] = useContext(SelectContext);

  let filteredCountries = [];
  const filterCountries = () => {
    if (selectedItem && searchTerm) {
      filteredCountries = countries
        .filter((countrie) =>
          countrie.region.toLowerCase().includes(selectedItem.toLowerCase())
        )
        .filter((countrie) =>
          countrie.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        );

      return;
    } else if (selectedItem) {
      filteredCountries = countries.filter((countrie) =>
        countrie.region.toLowerCase().includes(selectedItem.toLowerCase())
      );
      return;
    } else if (searchTerm) {
      filteredCountries = countries.filter((countrie) =>
        countrie.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
      return;
    }
    filteredCountries = countries;
  };
  filterCountries();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <Container toggleDarkTheme={toggleDarkTheme}>
      {filteredCountries.length === 0 ? (
        <p>Sorry, no results for your search.</p>
      ) : (
        filteredCountries.map((countrie) => (
          <CountrieCard
            toggleDarkTheme={toggleDarkTheme}
            key={countrie.numericCode}
            name={countrie.name}
            population={countrie.population}
            region={countrie.region}
            capital={countrie.capital}
            code={countrie.alpha2Code}
            flag={countrie.flag}
          />
        ))
      )}
    </Container>
  );
};

export default CountriesContainer;

const Container = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
  padding-bottom: 80px;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, 266px);
  justify-content: space-between;
  @media (max-width: 1120px) {
    justify-content: space-evenly;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
    width: 500px;
  }
`;
