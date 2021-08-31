import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import SecondSection from "../components/SecondSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <AboutSection />
      <SecondSection />
    </motion.div>
  );
};

export default AboutMe;
