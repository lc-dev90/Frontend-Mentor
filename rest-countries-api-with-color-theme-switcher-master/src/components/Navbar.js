import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Components
import { Moon } from "@styled-icons/bootstrap/Moon";
import { MoonFill } from "@styled-icons/bootstrap/MoonFill";

// Context
import themeContext from "../contexts/themes/themeContext";

const Navbar = () => {
  const { toggleDarkTheme, darkTheme } = useContext(themeContext);

  return (
    <Header darkTheme={darkTheme}>
      <div className="container">
        <div>
          <Link to="/">
            <h2>Where in the world?</h2>
          </Link>
        </div>
        <div>
          <span onClick={toggleDarkTheme} tabIndex="0">
            {darkTheme ? <MoonLightFill /> : <MoonLight />}

            <p>Dark Mode</p>
          </span>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  height: 80px;
  display: flex;
  background-color: ${(props) => (props.darkTheme ? "#283640" : "white")};
  box-shadow: ${(props) =>
    props.darkTheme
      ? "inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63"
      : "2px 2px 10px #1e272d63"};
  .container {
    max-width: 90%;
    width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div {
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      color: ${(props) => (props.darkTheme ? "white" : "black")};
      outline: none;
      h2 {
        @media (max-width: 450px) {
          font-size: 1.2rem !important;
        }
        @media (max-width: 370px) {
          font-size: 1rem !important;
        }
      }
      &:focus {
        transform: scale(1.02);
        filter: brightness(0.9);
      }
      &:hover {
        filter: brightness(0.85);
      }
    }
    span {
      color: ${(props) => (props.darkTheme ? "white" : "black")};
      cursor: pointer;
      outline: none;

      &:focus {
        transform: scale(1.02);
        filter: brightness(0.9);
      }
      &:hover {
        filter: brightness(0.85);
      }
    }
    p {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 0.5rem;
      display: inline-block;
      transform: translateY(1px);
      @media (max-width: 370px) {
        font-size: 13px !important;
      }
    }
  }
`;

const MoonLight = styled(Moon)`
  color: black;
  width: 14px;
`;
const MoonLightFill = styled(MoonFill)`
  color: white;
  width: 14px;
`;
