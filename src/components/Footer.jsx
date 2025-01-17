// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #000;
  color: white;
  text-align: center;
  padding: 20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>"Not all those who wander are lost." – J.R.R. Tolkien</p>
    </FooterContainer>
  );
}

export default Footer;
