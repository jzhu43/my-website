import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import SecondSection from "../components/SecondSection";
import ContactSection from "../components/ContactSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../ScrollToTop";

const AboutMe = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <AboutSection />
      <SecondSection />
      <ContactSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutMe;
