import React from "react";
import Card from "../components/Card";
import projects from "../components/ProjectList";
const Portfolio = () => {
  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
