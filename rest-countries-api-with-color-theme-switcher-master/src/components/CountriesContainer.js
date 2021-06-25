import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CountrieCard from "./CountrieCard";

import { SearchContext } from "./SearchContext";
import { SelectContext } from "./SelectContext";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm] = useContext(SearchContext);
  const [selectedItem] = useContext(SelectContext);

  /*   let filteredSelectedCountries = [];
  const filterSelected = () => {
    if (selectedItem) {
      filteredSelectedCountries = countries.filter((countrie) =>
        countrie.region.toLowerCase().includes(selectedItem.toLowerCase())
      );
      return;
    }
    filteredSelectedCountries = countries;
  };
  filterSelected();
  
  if (searchTerm) {
      filteredCountries = countries.filter((countrie) =>
        countrie.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return;
    }
    filteredCountries = countries;

  */

  let filteredCountries = [];
  const filterCountries = () => {
    if (selectedItem && searchTerm) {
      filteredCountries = countries
        .filter((countrie) =>
          countrie.region.toLowerCase().includes(selectedItem.toLowerCase())
        )
        .filter((countrie) =>
          countrie.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return;
    } else if (selectedItem) {
      filteredCountries = countries.filter((countrie) =>
        countrie.region.toLowerCase().includes(selectedItem.toLowerCase())
      );
      return;
    } else if (searchTerm) {
      filteredCountries = countries.filter((countrie) =>
        countrie.name.toLowerCase().includes(searchTerm.toLowerCase())
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
    <Container>
      {filteredCountries.map((countrie) => (
        <CountrieCard
          key={countrie.numericCode}
          name={countrie.name}
          population={countrie.population}
          region={countrie.region}
          capital={countrie.capital}
          flag={countrie.flag}
        />
      ))}
    </Container>
  );
};

export default CountriesContainer;

const Container = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, 266px);
  justify-content: space-between;
`;
