import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id="logo">Capture</h1>
      <ul>
        <li>
          <a href="#About">1.About Us</a>
        </li>
        <li>
          <a href="#Our-Work">2.Our Work</a>
        </li>
        <li>
          <a href="#Contact">3.Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  min-height: 10vh;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: auto;
  padding: 1rem 10rem;
  background: #282828;
  #logo {
    font-size: 1.8rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default Nav;
