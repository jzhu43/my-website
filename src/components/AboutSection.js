import React from "react";
// import home1 from "../img/home1.png";
import myself from "../img/Myself.png";

import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>My name is</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Jason Zhu!</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          I am a recent graduate at the University of California, Merced with a
          degree in computer science and engineering. I am currently looking for
          entry level software engineering positions.
        </motion.p>
        <StyledIcons variants={fade}>
          <a
            href='https://www.linkedin.com/in/jason-zhu-01/'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='7x' />
          </a>
          <a
            href='https://github.com/jzhu43'
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithubSquare} size='7x' />
          </a>
        </StyledIcons>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={myself} alt='Its me!' />
      </Image>
      <Wave />
    </About>
  );
};

const StyledIcons = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  a {
    color: #ccc;
    &:hover {
      color: #4c72cb;
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

export default AboutSection;
