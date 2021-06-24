import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountrieCard from "./CountrieCard";

const CountriesContainer = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  console.log(countries);
  return (
    <Container>
      {countries.map((countrie) => (
        <CountrieCard
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
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 48px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
