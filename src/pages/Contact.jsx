import React from "react";
import Mailer from "../components/Mailer";

import { motion } from "framer-motion";
const Contact = () => {
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
      <div className="container margintop">
        <div className="row justify-content-center ">
          <div className="mx-auto">
            <Mailer />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
