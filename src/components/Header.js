import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--document-padding);
  height: 90px;
  margin-bottom: 80px;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const NavLinkContainer = styled.div`
  height: 40px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: dodgerblue;
  font-size: 22px;

  &.active ~ div {
    display: block;
  }
`;

const Underline = styled.div`
  display: none;
  height: 4px;
  width: 100%;
  background-color: red;
  border-radius: 10px;
`;

function Header() {
  return (
    <Nav>
      <Heading>Fruit Emporium</Heading>
      <Navbar>
        <NavLinkContainer>
          <StyledLink exact to="/" activeClassName="active">Home</StyledLink>
          <Underline></Underline>
        </NavLinkContainer>
        <NavLinkContainer>
          <StyledLink to="/about" activeClassName="active">About</StyledLink>
          <Underline></Underline>
        </NavLinkContainer>
      </Navbar>
    </Nav>
  );
}

export default Header;
