import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import experience from "../components/ExperienceList";
const Experience = () => {
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
      <div className="container margintop mb-5  justify-content-self gbackground">
        <center>
          <h1 className="name mb-5 ">Experience</h1>
        </center>
        <ExperienceCard experience={experience}/>
      </div>
    </motion.div>
  );
};

export default Experience;
