import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import countries from "i18n-iso-countries";

//Context
import CountriesContext from "../contexts/countries/countriesContext";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const DetailsPage = ({ match }) => {
  const countriesContext = useContext(CountriesContext);
  const { loading, getCountrieDetail, countrieDetail } = countriesContext;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    getCountrieDetail(match.params.id);
  }, []);

  return (
    <DetailsCountainer>
      <button>Back</button>
      {countrieDetail ? (
        <div className="details">
          <div className="details-flag">
            <img src={countrieDetail.flag} alt={countrieDetail.name} />
          </div>
          <div className="information">
            <h2>{countrieDetail.name}</h2>
            <div className="flex">
              <div>
                <div>
                  <span>Native name: </span>
                  <span>{countrieDetail.nativeName}</span>
                </div>
                <div>
                  <span>Population: </span>
                  <span>{numberWithCommas(countrieDetail.population)}</span>
                </div>
                <div>
                  <span>Region: </span>
                  <span>{countrieDetail.region}</span>
                </div>
                <div>
                  <span>Sub Region: </span>
                  <span>{countrieDetail.subregion}</span>
                </div>
                <div>
                  <span>Capital: </span>
                  <span>{countrieDetail.capital}</span>
                </div>
              </div>
              <div>
                <div>
                  <span>Top Level Domain: </span>
                  <span>{countrieDetail.topLevelDomain}</span>
                </div>
                <div>
                  <span>Currencies: </span>
                  {countrieDetail.currencies
                    ? countrieDetail.currencies[0].name
                    : ""}
                </div>
                <div>
                  <span>Languages: </span>
                  <span>
                    {countrieDetail.languages
                      ? countrieDetail.languages.map((language) => (
                          <span key={language.nativeName}>
                            {" "}
                            {language.name}
                            {countrieDetail.languages[
                              countrieDetail.languages.length - 1
                            ] === language
                              ? ""
                              : ","}
                          </span>
                        ))
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span>Border Countries: </span>
              {countrieDetail.borders
                ? countrieDetail.borders.map((border) =>
                    countries.getName(border, "en", {
                      select: "official",
                    }) ? (
                      <a aria-label="Countrie" key={border}>
                        {countries.getName(border, "en", {
                          select: "official",
                        })}
                      </a>
                    ) : (
                      ""
                    )
                  )
                : ""}
              {countrieDetail.borders
                ? countrieDetail.borders.length < 1
                  ? "None"
                  : ""
                : ""}
            </div>
          </div>
          <div />
        </div>
      ) : (
        ""
      )}
    </DetailsCountainer>
  );
};

export default DetailsPage;

const DetailsCountainer = styled.div`
  a {
    margin-right: 4px;
    background-color: #283640;
    padding: 4px 20px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px;
    box-shadow: 0px 0px 4px 4px #0000000d;
    display: inline-block;
    &:hover {
      background-color: #272f34;
      box-shadow: 0px 0px 2px 2px #0000002b;
    }
  }
  button {
    margin: 8vh 0;
    background-color: #283640;
    border: none;
    color: white;
    padding: 0.5rem 2rem;
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
      background-color: "#232c32";
    }
  }
  .details {
    display: flex;
    justify-content: space-between;
  }

  .details-flag {
    width: 45%;
    img {
      width: 100%;
    }
  }

  .information {
    width: 45%;
    margin-left: auto;
    color: #ece3e3eb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      color: white;
      margin-bottom: 22px;
    }
    div {
      margin-bottom: 7px;
      span {
        font-size: 14px;
        &:nth-of-type(1) {
          font-weight: 800;
          color: #ffffffeb;
        }
      }
    }
  }
  .flex {
    display: flex;
    margin-bottom: 30px !important;
    div {
      &:nth-of-type(1) {
        flex: 1;
      }
    }
  }
`;
