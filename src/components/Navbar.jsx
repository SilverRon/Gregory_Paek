import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  background-color: #111;
  color: white;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 500px; */
  margin: 10px 60px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 0px;
    right: 10px;
    background-color: #111;
    width: 80vw;
    border-radius: 5px;
    border: white 1px solid;
  }
`;

const NavLink = styled.a`
  margin: 10px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff725c;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 10px 0;
    text-align: center;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>GREGORY S.H. PAEK</Logo>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <NavLinks open={isOpen}>
        <NavLink href="#about" onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink href="#affiliation" onClick={toggleMenu}>
          Affiliation
        </NavLink>
        <NavLink href="#publications" onClick={toggleMenu}>
          Publications
        </NavLink>{" "}
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SilverRon"
        >
          github
        </NavLink>
        <NavLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://orcid.org/0000-0002-6639-6533"
        >
          orcid
        </NavLink>
        {/* <NavLink href="#gallery" onClick={toggleMenu}>
          Gallery
        </NavLink>
        <NavLink href="#collaborations" onClick={toggleMenu}>
          Collaborations
        </NavLink>
        <NavLink href="#speakingSection" onClick={toggleMenu}>
          Speaking
        </NavLink> */}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
