import React from "react";
import Card from "../components/Card";
import projects from "../components/ProjectList";

import { motion } from "framer-motion";
const Portfolio = () => {
  return (
    <motion.div
      initial={{width:0, opacity:0}}
      animate={{width:"100%",opacity:1, transition:{duration: 1}}}
      exit={{x:window.innerWidth}}
      >
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="container margintop mb-5 justify-content-self gbackground">
        <center>
          <h1 className="name mb-5 ">My Portfolio</h1>
        </center>
        <Card projects={projects} />
      </div>
    </motion.div>
  );
};

export default Portfolio;
