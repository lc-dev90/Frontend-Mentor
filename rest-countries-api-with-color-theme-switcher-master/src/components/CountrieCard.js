import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import themeContext from "../contexts/themes/themeContext";

const CountrieCard = ({ name, population, region, capital, flag, code }) => {
  const { darkTheme } = useContext(themeContext);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Link to={`/detail/${code}`} style={{ textDecoration: "none" }}>
      <Card darkTheme={darkTheme}>
        <div className="flag-container">
          <img src={flag} alt={name} />
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
    </Link>
  );
};

export default CountrieCard;

const Card = styled.div`
  background-color: ${(props) => (props.darkTheme ? "#283640" : "white")};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s ease;
  position: relative;
  box-shadow: ${(props) =>
    props.darkTheme
      ? "inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63"
      : "2px 2px 10px #1e272d63"};
  .details {
    height: 176px;
    padding: 0 25px;
    color: ${(props) => (props.darkTheme ? "white" : "black")};
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
