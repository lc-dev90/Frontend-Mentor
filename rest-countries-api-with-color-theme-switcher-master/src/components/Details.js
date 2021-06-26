import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import countries from "i18n-iso-countries";
import { CountrieContext } from "./CountrieContext";
import { Link } from "react-router-dom";
import { SelectContext } from "./SelectContext";
import { Redirect } from "react-router";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Details = ({ toggleDarkTheme }) => {
  const [countrie, setCountrie] = useState({});
  const [countrieC, setCountrieC] = useContext(CountrieContext);
  const [selectedItem, setSelectedItem] = useContext(SelectContext);

  useEffect(() => {
    if (countrieC) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${countrieC}`)
        .then((response) => response.json())
        .then((data) => setCountrie(data));
    }
  }, [countrieC]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container toggleDarkTheme={toggleDarkTheme}>
      <ButtonContainer toggleDarkTheme={toggleDarkTheme}>
        <Link to="/" onClick={() => setSelectedItem("")}>
          <button>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span>Back</span>
          </button>
        </Link>
      </ButtonContainer>
      <ContentContainer>
        <FlagContainer>
          <img src={countrie.flag} alt="flag" />
        </FlagContainer>
        <InformationContainer>
          <h2>{countrie.name}</h2>
          <Content>
            <List style={{ marginRight: " 100px" }}>
              <li>
                Native Name: <span>{countrie.nativeName}</span>
              </li>
              <li>
                Population:{" "}
                <span>
                  {countrie.population
                    ? numberWithCommas(countrie.population)
                    : ""}
                </span>
              </li>
              <li>
                Region: <span>{countrie.region}</span>
              </li>
              <li>
                Sub Region: <span>{countrie.subregion}</span>
              </li>
              <li>
                Capital: <span>{countrie.capital}</span>
              </li>
            </List>
            <List toggleDarkTheme={toggleDarkTheme}>
              <li>
                Top Level Domain: <span>{countrie.topLevelDomain}</span>
              </li>
              <li>
                Currencies:{" "}
                <span>
                  {countrie.currencies ? countrie.currencies[0].name : ""}
                </span>
              </li>
              <li>
                Language
                {countrie.languages
                  ? countrie.languages.length > 1
                    ? "s"
                    : ""
                  : ""}
                :
                <span>
                  {countrie.languages
                    ? countrie.languages.map((language) => (
                        <a>
                          {" "}
                          {language.name}
                          {countrie.languages[countrie.languages.length - 1] ===
                          language
                            ? ""
                            : ","}
                        </a>
                      ))
                    : ""}
                </span>
              </li>
            </List>
          </Content>
          <BordersContent toggleDarkTheme={toggleDarkTheme}>
            <span>Border Countries: </span>
            {countrie.borders
              ? countrie.borders.map((border) =>
                  countries.getName(border, "en", { select: "official" }) ? (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a
                      aria-label="Countrie"
                      onClick={() =>
                        setCountrieC(countries.alpha3ToAlpha2(border))
                      }
                    >
                      {countries.getName(border, "en", { select: "official" })}
                    </a>
                  ) : (
                    ""
                  )
                )
              : ""}
            {countrie.borders
              ? countrie.borders.length < 1
                ? "None"
                : ""
              : ""}
          </BordersContent>
        </InformationContainer>
      </ContentContainer>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 60px;
  padding-bottom: 60px;
  color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
`;

const ButtonContainer = styled.div`
  display: block;
  button {
    background-color: ${(props) =>
      props.toggleDarkTheme ? "#283640" : "white"};
    border: none;
    color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
    padding: 0.7rem 2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    box-shadow: ${(props) =>
      props.toggleDarkTheme
        ? "0px 0px 3px 5px #00000021"
        : "0px 0px 7px 5px #0000000d"};
    &:active {
      box-shadow: 0px 0px 3px 1px #00000021;
      transform: translateY(1px);
    }
    &:focus {
      border: 1px solid #ffffff24;
    }
    &:hover {
      background-color: ${(props) =>
        props.toggleDarkTheme ? "#232c32" : "white"};
    }
    i {
      color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
      font-size: 1.4rem;
      margin-right: 15px;
    }
    span {
      font-size: 1rem;
    }
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`;

const FlagContainer = styled.div`
  width: 50%;
  img {
    width: 100%;
    min-height: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 14px 3px #0000001a;
}


  }
`;

const InformationContainer = styled.div`
  width: 42%;

  margin-bottom: 1rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 34px;
  }
`;

const Content = styled.div`
  display: flex;
  font-size: 14px;
`;

const List = styled.ul`
  list-style: none;

  li {
    font-weight: 800;
    margin-bottom: 12px;

    span {
      font-weight: 400;
      a {
        color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
      }
    }
  }
`;

const BordersContent = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  span {
    margin-right: 10px;
  }
  a {
    color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};;
    margin-right: 4px;
    background-color:  ${(props) =>
      props.toggleDarkTheme ? "#283640" : "white"};
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px;
    box-shadow: 0px 0px 4px 4px#0000000f;
    &:hover {
      background-color:   ${(props) =>
        props.toggleDarkTheme ? "#272f34" : "#f0f0f0f0"};;
    box-shadow: 0px 0px 2px 2px #0000002b;
}


    }
  }
`;
