import React from "react";
import { Typewriter } from "react-simple-typewriter";
import front from "../images/bitmoji3-min.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  let btnStyle = {
    border: "2px solid #0cb8ec",
    borderRadius: "24px",
  };
  return (
    <>
      <div className="container myh margintop">
        <div className="row  box1 ">
          <div className="col-10 mx-auto my-auto align-self-center">
            <div className="row ">
              <div className="col-lg-6  common order-2 my-5 align-self-center order-lg-1">
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
                  I am a third year Computer Engineering Student at MVPS's
                  KBTCOE Nashik. I love to develop web apps and android apps and
                  I enjoy learning new techonologies.
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
                  className="btn btn-outline-info shadow"
                  style={btnStyle}
                >
                  Portfolio
                </NavLink>
               
              </div>
              <div className="d-flex justify-content-center col-lg-6 order-1 order-lg-2">
                <div className="inner align-center">
                  <div className="img-fluid">
                    <img
                      src={front}
                      alt=""
                      className="img inverted"
                      height="80%"
                      width="80%"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="s-icons row mb-5">
                <div className="minline">
                  <div
                    className="card shadow"
                    style={{
                      width: "2.8",
                      height: "2.8rem",
                      borderRadius: "2rem",
                    }}
                  >
                    <a
                      className="hv btn btn-outline-info my-auto "
                      style={{ borderRadius: "2rem", height: "2.8rem" }}
                      href="https://github.com/KiranBendkoli1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        size="1.5rem"
                        border="2px solid #0cb8ec"
                        color="#000"
                      />
                    </a>
                  </div>
                  <div
                    className="card shadow"
                    style={{
                      width: "2.8",
                      height: "2.8rem",
                      borderRadius: "2rem",
                    }}
                  >
                    <a
                      className="hv btn btn-outline-info my-auto "
                      style={{ borderRadius: "2rem", height: "2.8rem" }}
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
                  </div>
                  <div
                    className="card shadow"
                    style={{
                      width: "2.8",
                      height: "2.8rem",
                      borderRadius: "2rem",
                    }}
                  >
                    <a
                      className="hv btn btn-outline-info my-auto "
                      style={{ borderRadius: "2rem", height: "2.8rem" }}
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
        </div>
      </div>
    </>
  );
};

export default Home;
