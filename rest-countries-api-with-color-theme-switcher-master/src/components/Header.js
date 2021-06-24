import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <nav>
        <h1>Where in the world?</h1>

        <div>
          <a href="/">
            <i className="fas fa-moon"></i>Dark Mode
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100vw;
  background-color: #283640;
  color: white;
  nav {
    width: 1280px;
    max-width: 95%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      a {
        color: white;
        font-weight: 600;
        i {
          margin-right: 6px;
        }
      }
    }
  }
`;
