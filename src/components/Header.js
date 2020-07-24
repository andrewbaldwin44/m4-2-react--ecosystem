import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.header`
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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

const StyledLink = styled(Link)`
  
  text-decoration: none;
  color: dodgerblue;

  font-size: 22px;
`;

const Header = () => {
  return (
    <Nav>
      <Heading>Fruit Emporium</Heading>
      <Navbar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </Navbar>
    </Nav>
  );
};

export default Header;
