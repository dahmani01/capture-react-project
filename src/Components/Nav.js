import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/capture-react-project/" id="logo">
        Capture
      </Link>
      <ul>
        <li>
          <Link to="/capture-react-project/">1.About Us</Link>
        </li>
        <li>
          <Link to="/capture-react-project/work">2.Our Work</Link>
        </li>
        <li>
          <Link to="/capture-react-project/contactus">3.Contact Us</Link>
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
