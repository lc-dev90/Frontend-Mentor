import React, { useContext } from "react";
import styled from "styled-components";

//Context
import CountriesContext from "../contexts/countries/countriesContext";

//Components
import CountrieCard from "../components/CountrieCard";
import Loading from "../components/Loading";

const CountrieList = () => {
  const countriesContext = useContext(CountriesContext);
  const { filteredCountries, loading } = countriesContext;

  return (
    <div>
      <ListContainer>
        {loading ? (
          <Loading />
        ) : filteredCountries ? (
          filteredCountries.map((countrie) => (
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
        ) : (
          "Sorry, no results."
        )}
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
