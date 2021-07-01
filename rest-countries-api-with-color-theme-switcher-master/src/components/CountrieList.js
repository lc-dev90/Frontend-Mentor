import React, { useContext } from "react";
import styled from "styled-components";

//Context
import CountriesContext from "../contexts/countries/countriesContext";
import themeContext from "../contexts/themes/themeContext";

//Components
import CountrieCard from "../components/CountrieCard";
import Loading from "../components/Loading";

const CountrieList = () => {
  const countriesContext = useContext(CountriesContext);
  const { darkTheme } = useContext(themeContext);
  const { filteredCountries, loading } = countriesContext;

  return (
    <div>
      <ListContainer filteredCountries={filteredCountries}>
        {loading ? (
          <Loading />
        ) : filteredCountries.length !== 0 ? (
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
          <NoResult darkTheme={darkTheme}>
            <h3>Sorry, no results.</h3>
          </NoResult>
        )}
      </ListContainer>
    </div>
  );
};

export default CountrieList;

const NoResult = styled.div`
  h3 {
    color: ${(props) => (props.darkTheme ? "white" : "#171717")};

    width: 200px;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 264px));
  justify-content: space-evenly;
  grid-gap: 73px;
  padding-bottom: ${(props) =>
    props.filteredCountries.length > 0 ? "100px" : "0"};
`;
