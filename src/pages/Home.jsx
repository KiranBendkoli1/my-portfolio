import React from "react";
import { Typewriter } from "react-simple-typewriter";
import kiran from "../images/kiran2.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1, transition: { duration: 1 } }}
      exit={{ x: window.innerWidth }}
    >
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="container myh margintop">
        <div className="row  box1 ">
          <div className="col-10 mx-auto my-auto align-self-center">
            <div className="row ">
              <div className="col-lg-6  common order-2 my-5 align-self-center order-lg-1">
                <div className="row">
                  <div>
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2 }}
                    >
                      Hi, I'm a{" "}
                      <span className="name">
                        <Typewriter
                          words={[
                            "Computer Engineering Student",
                            "Web Developer",
                            "Coder",
                          ]}
                          loop
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                        />{" "}
                      </span>
                      <div className=".blob"></div>
                    </motion.h1>

                    <motion.p
                      className="my-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 2.5 }}
                    >
                      I am a final year Computer Engineering Student at MVPS's
                      KBTCOE Nashik. I love to develop web apps and android apps
                      and I enjoy learning new techonologies.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 3 }}
                    >
                      you can check out some of my projects down here
                    </motion.p>

                    <NavLink
                      exact
                      to="/Portfolio"
                      // className="btn btn-outline-info shadow"
                      // style={btnStyle}
                      className="button"
                    >
                      Portfolio
                    </NavLink>
                  </div>

                  <div className="row mt-5">
                    <div className="s-icons row mb-5">
                      <div className="">
                        <a
                          className="button"
                          style={{
                            height: "2.8rem",
                            marginRight: "1rem",
                            marginTop: "0px",
                          }}
                          href="https://github.com/KiranBendkoli1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub size="1.5rem" marginTop="0" color="#000" />
                        </a>

                        <a
                          className="button "
                          style={{
                            height: "2.8rem",
                            marginRight: "1rem",
                            marginTop: "0px",
                          }}
                          href="https://www.linkedin.com/in/kiran-bendkoli-2a2b741b9/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn
                            size="1.5rem"
                            border="2px solid #0cb8ec"
                            color="#1168cc"
                          />
                        </a>

                        <a
                          className="button "
                          style={{ height: "2.8rem", marginTop: "0px" }}
                          href="https://www.instagram.com/kiran_bendkoli_/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram
                            size="1.5rem"
                            border="2px solid #0cb8ec"
                            color="#af0298"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center col-lg-6 order-1 order-lg-2">
                <div className="inner pt-3 align-center"  style={{borderRadius:"2rem"}}>
                  <div className="img-fluid image-container">
                    <img
                      src={kiran}
                      height="auto"
                      width="auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
