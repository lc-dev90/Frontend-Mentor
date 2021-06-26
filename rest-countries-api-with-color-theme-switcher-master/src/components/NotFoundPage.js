import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = ({ toggleDarkTheme }) => {
  return (
    <Container>
      <ButtonContainer toggleDarkTheme={toggleDarkTheme}>
        <Link to="/rest-countries-api-with-color-theme-switcher-master/build/">
          <button>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span>Back</span>
          </button>
        </Link>
      </ButtonContainer>
      <h1>NOT FOUND 404</h1>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  width: 1280px;
  max-width: 95%;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: block;
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }
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
