import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Components
import { Moon } from "@styled-icons/bootstrap/Moon";
import { MoonFill } from "@styled-icons/bootstrap/MoonFill";

const Navbar = () => {
  return (
    <Header>
      <div className="container">
        <div>
          <Link to="/">
            <h2>Where in the world?</h2>
          </Link>
        </div>
        <div>
          <Link to="/">
            <MoonLightFill width="14" />
            <p>Dark Mode</p>
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  padding: 20px 0;
  background-color: #283640;
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
      color: white;
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
  color: white;
`;
const MoonLightFill = styled(MoonFill)`
  color: white;
`;
