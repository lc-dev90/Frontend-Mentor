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
          <Link to="/" onClick={toggleDarkTheme}>
            {darkTheme ? <MoonLightFill /> : <MoonLight />}

            <p>Dark Mode</p>
          </Link>
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
    }
    p {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 0.5rem;
      display: inline-block;
      transform: translateY(1px);
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
