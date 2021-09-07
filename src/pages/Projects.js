import React from "react";
//Page Components
import ProjectSection from "../components/ProjectSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../ScrollToTop";

const Projects = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <ProjectSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default Projects;
