import React, { useEffect, useState } from "react";
import styled from "styled-components";
import countries from "i18n-iso-countries";
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Details = () => {
  const [countrie, setCountrie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        /* `https://restcountries.eu/rest/v2/name/${countrie}` */
        `https://restcountries.eu/rest/v2/name/Belgium`
      );

      const [data] = await response.json();
      setCountrie(data);
    };
    fetchData();
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Container>
      <ButtonContainer>
        <button>
          <i className="fas fa-long-arrow-alt-left"></i>
          <span>Back</span>
        </button>
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
            <List>
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
          <BordersContent>
            <span>Border Countries: </span>
            {countrie.borders
              ? countrie.borders.map((border) => (
                  <a>
                    {countries.getName(border, "en", { select: "official" })}
                  </a>
                ))
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
  color: white;
  height: calc(100vh-80px);
`;

const ButtonContainer = styled.div`
  display: block;
  button {
    background-color: #283640;
    border: none;
    color: white;
    padding: 0.7rem 2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: 1px solid transparent;
    box-shadow: 0px 0px 3px 5px #00000021;
    &:active {
      box-shadow: 0px 0px 3px 1px #00000021;
      transform: translateY(1px);
    }
    &:focus {
      border: 1px solid #ffffff24;
    }
    &:hover {
      background-color: #232c32;
    }
    i {
      color: white;
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
  width: 43%;
  img {
    width: 100%;
    height: 400px;
  }
`;

const InformationContainer = styled.div`
  width: 47%;
  justify-content: flex-end;
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
        color: white;
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
    color: white;
    margin-right: 4px;
    background-color: #283640;
    padding: 5px 20px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px 10px;
    &:hover {
      background-color: #272f34;
    box-shadow: 0px 0px 2px 2px #0000002b;
}


    }
  }
`;
