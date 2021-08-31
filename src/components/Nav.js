import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// import Resume from "./pages/Resume";
import Pdf from "../Jason-Zhu_Resume.pdf";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          Jason Zhu - Aspiring Software Engineer
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <a href={Pdf} target='_blank' rel='noopener noreferrer'>
            Resume
          </a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  max-width: 100%;
  position: sticky;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  z-index: 3;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 4rem;
    position: relative;
  }
  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #4c72cb;
  width: 0;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 1300px) {
    left: 25%;
  }
`;

export default Nav;
