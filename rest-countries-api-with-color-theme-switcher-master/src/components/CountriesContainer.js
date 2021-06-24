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

  console.log(countries);
  return (
    <Container>
      {countries.map((countrie) => (
        <CountrieCard
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
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 48px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

/* countrie.name;
countrie.population;
countrie.region;
countrie.capital;
countrie.flag; */
/* 
{
  "name": "Afghanistan",
  "topLevelDomain": [
    ".af"
  ],
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "callingCodes": [
    "93"
  ],
  "capital": "Kabul",
  "altSpellings": [
    "AF",
    "Afġānistān"
  ],
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 27657145,
  "latlng": [
    33.0,
    65.0
  ],
  "demonym": "Afghan",
  "area": 652230.0,
  "gini": 27.8,
  "timezones": [
    "UTC+04:30"
  ],
  "borders": [
    "IRN",
    "PAK",
    "TKM",
    "UZB",
    "TJK",
    "CHN"
  ],
  "nativeName": "افغانستان",
  "numericCode": "004",
  "currencies": [
    {
      "code": "AFN",
      "name": "Afghan afghani",
      "symbol": "؋"
    }
  ],
  "languages": [
    {
      "iso639_1": "ps",
      "iso639_2": "pus",
      "name": "Pashto",
      "nativeName": "پښتو"
    },
    {
      "iso639_1": "uz",
      "iso639_2": "uzb",
      "name": "Uzbek",
      "nativeName": "Oʻzbek"
    },
    {
      "iso639_1": "tk",
      "iso639_2": "tuk",
      "name": "Turkmen",
      "nativeName": "Türkmen"
    }
  ],
  "translations": {
    "de": "Afghanistan",
    "es": "Afganistán",
    "fr": "Afghanistan",
    "ja": "アフガニスタン",
    "it": "Afghanistan",
    "br": "Afeganistão",
    "pt": "Afeganistão",
    "nl": "Afghanistan",
    "hr": "Afganistan",
    "fa": "افغانستان"
  },
  "flag": "https://restcountries.eu/data/afg.svg",
  "regionalBlocs": [
    {
      "acronym": "SAARC",
      "name": "South Asian Association for Regional Cooperation",
      "otherAcronyms": [
        
      ],
      "otherNames": [
        
      ]
    }
  ],
  "cioc": "AFG"
}, */
