import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <FooterContainer>Made with s2 by Luiz Claudio</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  background: #283640;
`;
