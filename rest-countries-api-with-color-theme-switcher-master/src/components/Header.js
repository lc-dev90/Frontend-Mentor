import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>Where in the world?</h1>
    </Container>
  );
};

export default Header;

const Container = styled.nav`
  height: 80px;
  background-color: #283640;
`;
