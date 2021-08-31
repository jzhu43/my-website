import React from "react";
import Wave from "./Wave";
import styled from "styled-components";
//Images
import cisco from "../img/cisco.png";
import bow from "../img/bowbuilder.jpeg";
import music from "../img/music-player.png";
import website from "../img/website.png";
//Framer Motion
import { motion } from "framer-motion";
import { fade, photoAnim } from "../animation";

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
          </motion.div>
          <motion.img variants={photoAnim} src={cisco} alt="Cisco's Logo" />
        </Card>
        <Wave />
        <Card>
          <motion.div variants={fade}>
            <h3>Big Bow Builder</h3>
            <p>
              A web application that aims to help UC Merced Archery Team members
              source archery equipment across a variety of reputable resellers.
            </p>
            <footer>
              <h4>Technologies Used:</h4>
              <p>Typescript, Angular, Ionic Framework</p>
            </footer>
            <a
              href='https://github.com/jzhu43/bowPartPicker-frontend'
              target='_blank'
              rel='noopener noreferrer'>
              Check It Out!
            </a>
          </motion.div>
          <img src={bow} alt='Big Bow Builder' />
        </Card>
        <Wave />
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
              Check It Out!
            </a>
          </motion.div>
          <img src={music} alt='Music Player' />
        </Card>
        <Wave />
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
              href='https://github.com/jzhu43/my-website'
              target='_blank'
              rel='noopener noreferrer'>
              Check It Out!
            </a>
          </motion.div>
          <img src={website} alt='My Website' />
        </Card>
      </Cards>
      {/* <Wave /> */}
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
  font-size: 2.5rem;
  h4 {
    margin-bottom: -2rem;
    font-size: 1.5rem;
  }
`;

const Card = styled.div`
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
    width: 80%;
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
      font-family: "Inter", sans-serif;
      &:hover {
        background-color: #4c7bcb;
      }
    }
  }

  img {
    width: 55%;
    padding: 0rem 0rem 3rem 10rem;
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
    }
    img {
      overflow: hidden;
      width: auto;
      max-width: 100%;
      height: auto;
      object-fit: scale-down;
      padding: 3rem 3rem;
    }
  }
`;

export default ProjectSection;
