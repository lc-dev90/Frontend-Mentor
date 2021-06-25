import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <div>
      <Container>
        <ButtonContainer>
          <button>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span>Back</span>
          </button>
        </ButtonContainer>
        <ContentContainer>
          <FlagContainer>
            <img src="#" alt="flag" />
          </FlagContainer>
          <InformationContainer>
            <h2>Belgium</h2>
            <Content>
              <List>
                <li>
                  Native Name: <span>Belgie</span>
                </li>
                <li>
                  Population: <span>11,456,334</span>
                </li>
                <li>
                  Region: <span>Europe</span>
                </li>
                <li>
                  Sub Region: <span>Western Europe</span>
                </li>
                <li>
                  Capital: <span>Brussels</span>
                </li>
              </List>
              <List>
                <li>
                  Top Level Domain: <span>.be</span>
                </li>
                <li>
                  Currencies: <span>Euro</span>
                </li>
                <li>
                  Language: <span>Dutch, French, German</span>
                </li>
              </List>
            </Content>
            <BordersContent>
              <span>Border Countries: </span>
              <a>France</a>
              <a>Germany</a>
              <a>Netherlands</a>
            </BordersContent>
          </InformationContainer>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default Details;

const Container = styled.main`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
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
  margin-top: 80px;
`;

const FlagContainer = styled.div``;

const InformationContainer = styled.div``;

const Content = styled.div``;

const List = styled.ul``;

const BordersContent = styled.div``;
