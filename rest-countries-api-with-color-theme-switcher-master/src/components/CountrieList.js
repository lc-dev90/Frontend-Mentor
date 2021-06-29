import React, { useContext, useEffect } from "react";
import styled from "styled-components";

//Context
import CountriesContext from "../contexts/countries/countriesContext";

//Components
import CountrieCard from "../components/CountrieCard";

const CountrieList = ({ searchTerm, selectValue }) => {
  const countriesContext = useContext(CountriesContext);
  const { loading, countries, getCountries, clearCountrieDetail } =
    countriesContext;

  useEffect(() => {
    getCountries();
    clearCountrieDetail();
  }, []);

  let filteredCountries = countries;
  if (searchTerm && selectValue) {
    filteredCountries = countries
      .filter((countrie) =>
        countrie.region.toLowerCase().includes(selectValue.toLowerCase())
      )
      .filter((countrie) =>
        countrie.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
  } else if (searchTerm) {
    filteredCountries = countries.filter((countrie) =>
      countrie.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  } else if (selectValue) {
    filteredCountries = countries.filter((countrie) =>
      countrie.region.toLowerCase().includes(selectValue.toLowerCase())
    );
  }

  return (
    <div>
      <ListContainer>
        {filteredCountries
          ? filteredCountries.map((countrie) => (
              <CountrieCard
                key={countrie.alpha2Code}
                name={countrie.name}
                population={countrie.population}
                region={countrie.region}
                capital={countrie.capital}
                flag={countrie.flag}
                code={countrie.alpha3Code}
              />
            ))
          : ""}
      </ListContainer>
    </div>
  );
};

export default CountrieList;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 264px));
  justify-content: space-evenly;
  grid-gap: 73px;
`;
