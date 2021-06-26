import React, { useContext } from "react";
import styled from "styled-components";
import { CountrieContext } from "./CountrieContext";
import { Link } from "react-router-dom";

const CountrieCard = ({
  name,
  population,
  region,
  capital,
  flag,
  code,
  toggleDarkTheme,
}) => {
  const [countrie, setCountrie] = useContext(CountrieContext);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Link
      to={"/rest-countries-api-with-color-theme-switcher-master/build/details"}
    >
      <Card onClick={() => setCountrie(code)} toggleDarkTheme={toggleDarkTheme}>
        <i className="fas fa-search">
          <p>DETAILS</p>
        </i>

        <FlagBox>
          <img src={`${flag}`} alt="" />
        </FlagBox>
        <Details toggleDarkTheme={toggleDarkTheme}>
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
    </Link>
  );
};

export default CountrieCard;

const Card = styled.div`
  background-color: ${(props) => (props.toggleDarkTheme ? "#283640" : "white")};
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: ${(props) =>
    props.toggleDarkTheme
      ? "0px 0px 11px 5px #00000029"
      : "0px 0px 11px 5px #0000003d"};
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
  }
  i {
    position: absolute;
    font-size: 2.5rem;
    color: white;
    z-index: 2;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms ease-in-out;
    p {
      font-size: 13px;
      display: block;
      text-align: center;
      font-weight: 800;
      font-family: "Nunito Sans", sans-serif;
      position: absolute;
      width: 180%;
      transform: translateX(-20%);
      margin-top: 13px;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: white;
    }
  }
  &:hover {
    &::after {
      height: 100%;
    }
    i {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const FlagBox = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 160px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Details = styled.div`
  padding: 30px 26px;
  color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
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
