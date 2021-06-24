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

  return (
    <Container>
      {countries.map((countrie) => (
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
