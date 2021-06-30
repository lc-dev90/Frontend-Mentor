import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import themeContext from "../contexts/themes/themeContext";

// Components
import { Search } from "@styled-icons/fluentui-system-filled/Search";

const CountrieCard = ({ name, population, region, capital, flag, code }) => {
  const { darkTheme } = useContext(themeContext);
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <Card darkTheme={darkTheme}>
      <div className="card-details">
        <SearchIcon darkTheme={darkTheme} className="card-details__icon" />
        <p>details</p>
      </div>

      <Link to={`/detail/${code}`} className="link">
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
      </Link>
    </Card>
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
    props.darkTheme ? " 2px 2px 10px #1e272d63" : "2px 2px 10px #1e272d63"};
  outline: none;
  .card-details {
    p {
      position: absolute;
      font-size: 13px;
      display: block;
      text-align: center;
      font-weight: 800;
      font-family: "Nunito Sans", sans-serif;
      position: absolute;
      margin-top: 13px;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: white;
      opacity: 0;
      display: none;
      transition: opacity 200ms linear;
    }
  }
  &::after {
    content: "";
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000d1;
    position: absolute;
    pointer-events: none;
  }
  a {
    text-decoration: none;
    outline: none;
    border: none;
  }
  &:hover {
    &::after {
      height: 100%;
    }
    p {
      opacity: 1;
      z-index: 10;
      top: 56%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
    }
    .card-details__icon {
      top: 45% !important;
    }
  }
  &:focus-within {
    transform: scale(1.03);
  }

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

const SearchIcon = styled(Search)`
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  width: 60px;
  font-weight: bold !important;
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 2.5rem;
  color: white;
  z-index: 2;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  pointer-events: none;
`;
