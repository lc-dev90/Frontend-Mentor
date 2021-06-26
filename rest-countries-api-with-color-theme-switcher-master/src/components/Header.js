import React from "react";
import styled from "styled-components";

const Header = ({ toggleDarkTheme, setToggleDarkTheme }) => {
  const handleClick = () => {
    setToggleDarkTheme((prevToggleDarkTheme) => !prevToggleDarkTheme);
  };
  return (
    <Container toggleDarkTheme={toggleDarkTheme}>
      <nav>
        <a href="/rest-countries-api-with-color-theme-switcher-master/build/">
          <h1>Where in the world?</h1>
        </a>
        <div onClick={handleClick}>
          <button>
            {toggleDarkTheme ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="far fa-moon"></i>
            )}
            Dark Mode
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  background-color: ${(props) => (props.toggleDarkTheme ? "#283640" : "white")};
  color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
  box-shadow: ${(props) =>
    props.toggleDarkTheme
      ? "2px 2px 10px #1e272dab"
      : "0px 0px 10px 0px #1e272d2e"};

  nav {
    width: 1280px;
    max-width: 95%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1024px) {
      width: 80%;
      margin: 0 auto;
    }
    a {
      color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
      outline: none;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        background: #f0f0f0;
        width: 0px;
        height: 2px;
        transition: width 250ms linear;
      }
      &:hover,
      &:focus {
        &::after {
          width: 100%;
        }
      }
      h1 {
        @media (max-width: 600px) {
          font-size: 1.3rem;
        }
        @media (max-width: 450px) {
          font-size: 1.2rem;
        }
        @media (max-width: 400px) {
          font-size: 1rem;
        }
      }
    }
    div {
      display: flex;
      cursor: pointer;
      button {
        color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
        background-color: ${(props) =>
          props.toggleDarkTheme ? "#283640" : "white"};
        font-weight: 400;
        border: none;
        font-size: 17px;
        outline: none;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          background: #f0f0f0;
          width: 0px;
          height: 2px;
          left: 0;
          bottom: -10px;
          transition: width 250ms linear;
        }
        &:hover,
        &:focus {
          &::after {
            width: 100%;
          }
        }
        @media (max-width: 400px) {
          font-size: 14px;
        }
        @media (max-width: 400px) {
          font-size: 1rem;
        }
        cursor: pointer;
        i {
          margin-right: 10px;
          @media (max-width: 400px) {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
