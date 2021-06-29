import React from "react";
import styled from "styled-components";

const CountrieCard = ({ name, population, region, capital, flag }) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Card>
      <div className="flag-container">
        <img src={flag} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div>
          <span>Population: </span>
          <span className="info">{numberWithCommas(population)}</span>
        </div>
        <div>
          <span>Region: </span>
          <span className="info">{region}</span>
        </div>
        <div>
          <span>Capital: </span>
          <span className="info">{capital}</span>
        </div>
      </div>
    </Card>
  );
};

export default CountrieCard;

const Card = styled.div`
  background-color: #283640;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  .details {
    height: 176px;
    padding: 0 25px;
    color: white;
    font-size: 14px;
    div {
      margin-bottom: 5px;
      span {
        &:nth-of-type(1) {
          font-weight: 600;
        }
      }
    }
    h3 {
      padding-top: 28px;
      padding-bottom: 15px;
    }
  }
  .flag-container {
    height: 160px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
