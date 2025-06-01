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
import ScrollToTop from "../ScrollToTop";

const SecondSection = () => {
  const [element, controls] = useScroll();
  return (
    <Second
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}>
      <Description>
        <h2>Coding Experience</h2>
        <p>
          At the University of California, Merced, I built a solid foundation
          in core programming concepts with a strong emphasis on object-oriented design.
          Over time, I discovered a passion for frontend and full-stack development,
          where I enjoy bringing ideas to life through clean, interactive interfaces.
          Feel free to explore my projects!
        </p>
        <Link to='/projects'>
          <button>See Projects</button>
        </Link>
      </Description>
      <Wave />
      <Image>
        <img src={coding} alt='coding' />
      </Image>
      <ScrollToTop />
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
