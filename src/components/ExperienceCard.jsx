import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = (props) => {
  const experience = props.experience;
  return (
    <div className=" mx-auto" style={{ maxWidth: "65rem" }}>
      {experience.map((exp) => (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1, transition: { duration: "1" } }}
          exit={{ x: window.innerWidth }}
          key={exp.index}
          style={{ borderRadius: "0.4rem" }}
          className="box1 p-2 mt-3"
        >
          <div className="row">
            <div className="col-md-3">
              <div>
                <img  className="rounded" src={exp.logo}  alt={exp.company}  />
              </div>
          </div>
          <div className="col-md-9">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <h2 className="name">{exp.company}</h2>
                  </div>
                </div>
                <div className="my-auto">
                  <p className="">{exp.duration}</p>
                </div>
                <ul className="clist">
                  <li>{exp.desc0}</li>
                  <li>{exp.desc1}</li>
                </ul>
              </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceCard;
