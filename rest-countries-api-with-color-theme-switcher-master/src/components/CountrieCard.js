import React from "react";
import styled from "styled-components";

const CountrieCard = ({ name, population, region, capital, flag }) => {
  return (
    <Card>
      <FlagBox>
        <img src={`${flag}`} alt="" />
      </FlagBox>
      <Details>
        <h3>{name}</h3>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </Details>
    </Card>
  );
};

export default CountrieCard;

const Card = styled.div`
  background-color: white;
`;

const FlagBox = styled.div`
  img {
    max-width: 100%;
  }
`;

const Details = styled.div`
  color: black;
  ul {
    list-style: none;
  }
`;
