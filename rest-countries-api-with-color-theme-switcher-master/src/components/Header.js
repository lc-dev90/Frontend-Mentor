import React from "react";
import styled from "styled-components";

const Header = ({ toggleDarkTheme, setToggleDarkTheme }) => {
  const handleClick = () => {
    setToggleDarkTheme((prevToggleDarkTheme) => !prevToggleDarkTheme);
  };
  return (
    <Container toggleDarkTheme={toggleDarkTheme}>
      <nav>
        <a href="/">
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
    a {
      color: ${(props) => (props.toggleDarkTheme ? "white" : "black")};
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

        cursor: pointer;
        i {
          margin-right: 6px;
        }
      }
    }
  }
`;
