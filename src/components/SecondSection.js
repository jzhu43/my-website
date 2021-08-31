import React from "react";
import { Link } from "react-router-dom";
//Import Image
import coding from "../img/coding.png";
//Styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";

import Wave from "./Wave";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const SecondSection = () => {
  const [element, controls] = useScroll();
  return (
    <Second
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}>
      <Description>
        <h2>Project Experience</h2>
        <p>
          During my time at the University of California, Merced, I have learned
          the core programming concepts, which helped me build a strong
          object-oriented background. I have developed a strong interest in
          frontend and full-stack development. Check out my projects!
        </p>
        <Link to='/projects'>
          <button>See Projects</button>
        </Link>
      </Description>
      <Wave />
      <Image>
        <img src={coding} alt='coding' />
      </Image>
    </Second>
  );
};

const Second = styled(About)`
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 100%;
    padding: 0rem 0rem 2rem 0rem;
  }
`;

export default SecondSection;
