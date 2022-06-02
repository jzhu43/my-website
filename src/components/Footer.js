import React from 'react';
import styled from 'styled-components';
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <StyledFooter>
      <FontAwesomeIcon icon={faCopyright} size='2x' />
      <h1>2022 Jason Zhu</h1>
      <div>
        <a
          href='https://www.linkedin.com/in/jason-zhu-01/'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faLinkedin} size='3x' />
        </a>
        <a
          href='https://github.com/jzhu43'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithubSquare} size='3x' />
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  /* max-width: 100%; */
  bottom: 0;
  width: 100%;
  min-height: 7vh;
  padding: 1.5rem 4rem;
  background: #282828;
  color: white;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    width: 10%;
    justify-content: space-evenly;
    padding: 0px 0px 0px 10px;
    a {
      color: white;
      &:hover {
        color: #4c72cb;
      }
      @media (max-width: 1300px) {
        display: flex;
        justify-content: space-between;
      }
    }
    @media (max-width: 1300px) {
      width: 20%;
    }
  }
  @media (max-width: 1300px) {
    position: relative;
    bottom: 0;
  }
`;

export default Footer;
