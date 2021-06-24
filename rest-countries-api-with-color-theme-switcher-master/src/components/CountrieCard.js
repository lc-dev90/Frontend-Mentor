import React from "react";
import styled from "styled-components";

const CountrieCard = ({ name, population, region, capital, flag }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Card>
      <FlagBox>
        <img src={`${flag}`} alt="" />
      </FlagBox>
      <Details>
        <h3>{name}</h3>
        <ul>
          <li>
            Population: <span>{numberWithCommas(population)}</span>
          </li>
          <li>
            Region: <span>{region}</span>
          </li>
          <li>
            Capital: <span>{capital}</span>
          </li>
        </ul>
      </Details>
    </Card>
  );
};

export default CountrieCard;

const Card = styled.div`
  background-color: #283640;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const FlagBox = styled.div`
  border-radius: 5px;
  height: 160px;
  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Details = styled.div`
  padding: 30px 26px;
  color: white;
  h3 {
    margin-bottom: 1rem;
    font-size: 18px;
  }
  ul {
    list-style: none;
    li {
      margin-bottom: 5px;
      font-weight: 600;
      span {
        font-weight: 400;
      }
    }
  }
`;
