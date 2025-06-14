import React from 'react';
import Wave from './Wave';
import styled from 'styled-components';
//Images
import cisco from '../img/cisco.png';
import music from '../img/music-player.png';
import website from '../img/website.png';
import stock from '../img/stock.jpeg';
//Framer Motion
import { motion } from 'framer-motion';
import { fade, photoAnim } from '../animation';
import ScrollToTop from '../ScrollToTop';

const ProjectSection = () => {
  return (
    <Projects>
      <Wave />
      <h2>Projects</h2>
      <Cards>
        <Card>
          <motion.div variants={fade}>
            <h3>Cisco's Box to Cloud</h3>
            <p>
              Built for Cisco Systems, Box to Cloud is a progressive web
              application that provides onsite technicians step-by-step
              instructions on how to build assigned server racks. With a variety
              of functions such as barcode scanning and displaying technician's
              tasks, this hybrid application helps to reduce errors before they
              occur.
            </p>
            <footer>
              <h4>Technologies Used:</h4>
              <p>Typescript, Angular, Ionic Framework, XCode</p>
            </footer>
            <a
              href='https://youtu.be/cpdxy30E5jU'
              target='_blank'
              rel='noopener noreferrer'>
              Youtube Presentation
            </a>
          </motion.div>
          <motion.img variants={photoAnim} src={cisco} alt="Cisco's Logo" />
        </Card>
        {/* <Wave /> */}
        <Card>
          <motion.div variants={fade}>
            <h3>Stock 'ems</h3>
            <p>
              A complete MERN stack web application designed for stock traders
              to post ideas and discuss amongst other traders!
            </p>
            <footer>
              <h4>Technologies Used:</h4>
              <p>MongoDB, Express, Node.js, React, Redux</p>
            </footer>
            <a
              href='https://trade-connector.onrender.com'
              target='_blank'
              rel='noopener noreferrer'>
              Check It Out!
            </a>
            <a
              href='https://github.com/jzhu43/Stock--ems'
              target='_blank'
              rel='noopener noreferrer'>
              Github Link
            </a>
          </motion.div>
          <img src={stock} alt="Stock 'ems" />
        </Card>
        {/* <Wave /> */}
        <Card>
          <motion.div variants={fade}>
            <h3>Beats Music Player</h3>
            <p>
              A simple music player that is able to play music with the
              functionality of skipping tracks and choosing from a library menu.
            </p>
            <footer>
              <h4>Technologies Used:</h4>
              <p>Javascript, React</p>
            </footer>
            <a
              href='https://github.com/jzhu43/music-player'
              target='_blank'
              rel='noopener noreferrer'>
              Github Link
            </a>
          </motion.div>
          <img src={music} alt='Music Player' />
        </Card>
        {/* <Wave /> */}
        <Card>
          <motion.div variants={fade}>
            <h3>My Website</h3>
            <p>
              With a responsive web design in mind, this is my portfolio website
              showcasing my recent projects and resume.
            </p>
            <footer>
              <h4>Technologies Used:</h4>
              <p>Javascript, React, Figma</p>
            </footer>
            <a
              href='https://jasonzhu.netlify.app'
              target='_blank'
              rel='noopener noreferrer'>
              Check It Out!
            </a>
            <a
              href='https://github.com/jzhu43/my-website'
              target='_blank'
              rel='noopener noreferrer'>
              Github link
            </a>
          </motion.div>
          <img src={website} alt='My Website' />
        </Card>
      </Cards>
      <ScrollToTop />
    </Projects>
  );
};

const Projects = styled.div`
  padding: 1rem 10rem;
  color: white;
  /* background: blue; */
  h2 {
    padding: 1rem 0rem 0rem 0rem;
    text-align: center;
  }
`;

const Cards = styled.div`
  // outline-style: solid;
  font-size: 2.5rem;
  h4 {
    margin-bottom: -2rem;
    font-size: 1.5rem;
  }
`;

const Card = styled.div`
  // outline-style: dashed;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 12rem;
  padding-top: 5rem;
  h3 {
    margin-bottom: 0rem;
    color: #4c7bcb;
  }
  div {
    float: right;
    width: 100%;
    padding: 2rem 0rem;
    a {
      cursor: pointer;
      font-weight: bold;
      border-radius: 25px;
      background: transparent;
      color: white;
      text-decoration: none;
      padding: 1rem;
      font-size: 1.1rem;
      border: 3px solid #4c7bcb;
      transition: all 0.5s ease;
      font-family: 'Inter', sans-serif;
      &:hover {
        background-color: #4c7bcb;
      }
    }
  }

  img {
    width: 55%;
    padding: 0rem 0rem 5rem 10rem;
    object-fit: cover;
    z-index: 2;
  }
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    div {
      width: 100%;
      padding: 2rem 0rem;
    }
    img {
      overflow: hidden;
      width: auto;
      height: auto;
      object-fit: fill;
      padding: 3rem 3rem;
    }
  }
`;

export default ProjectSection;
