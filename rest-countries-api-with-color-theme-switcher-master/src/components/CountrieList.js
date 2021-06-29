import React, { useContext, useEffect } from "react";
import styled from "styled-components";

//Context
import CountriesContext from "../contexts/countries/countriesContext";

//Components
import CountrieCard from "../components/CountrieCard";

const CountrieList = () => {
  const countriesContext = useContext(CountriesContext);
  const { loading, countries, getCountries } = countriesContext;

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <ListContainer>
        {countries
          ? countries.map((countrie) => (
              <CountrieCard
                name={countrie.name}
                population={countrie.population}
                region={countrie.region}
                capital={countrie.capital}
                flag={countrie.flag}
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
