import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import countries from "i18n-iso-countries";

//Context
import CountriesContext from "../contexts/countries/countriesContext";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const DetailsPage = ({ match }) => {
  const countriesContext = useContext(CountriesContext);
  const { loading, getCountrieDetail, countrieDetail } = countriesContext;

  useEffect(() => {
    getCountrieDetail(match.params.id);
  }, []);

  return (
    <DetailsCountainer>
      {countrieDetail ? (
        <>
          <div>
            <img src={countrieDetail.flag} alt={countrieDetail.name} />
          </div>
          <div className="information">
            <h2>{countrieDetail.name}</h2>
            <div>
              <div>
                <div>
                  <span>Native name: </span>
                  <span>{countrieDetail.nativeName}</span>
                </div>
                <div>
                  <span>Population: </span>
                  <span>{countrieDetail.population}</span>
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
        </>
      ) : (
        ""
      )}
    </DetailsCountainer>
  );
};

export default DetailsPage;

const DetailsCountainer = styled.div`
  div {
    img {
      width: 100%;
    }
  }
`;
