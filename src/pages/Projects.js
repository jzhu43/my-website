import React from "react";
//Page Components
import ProjectSection from "../components/ProjectSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Projects = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'>
      <ProjectSection />
    </motion.div>
  );
};

export default Projects;
