import React from "react";
import Mailer from "../components/Mailer";

const Contact = () => {
  return (
    <div>
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
    </div>
  );
};

export default Contact;
