import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/KiranBendkoli.pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/kiranbendkoli-portfolio.appspot.com/o/KiranBendkoli.pdf?alt=media&token=d69f31c4-2056-49e8-9f04-963125ea91ab";

  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <motion.div
      initial={{width:0, opacity:0}}
      animate={{width:"100%", opacity:1, transition:{duration: 1}}}
      exit={{x:window.innerWidth}}
      >
    <div className="margintop">
     <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
      <div className="container resume">
      <div className="row d-flex justify-content-center">
        <h1 className="name d-flex justify-content-center mb-5">Resume</h1>
        
      </div>
        <Document file={pdf} className="d-flex justify-content-center">

          <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} /> 
          
        </Document>
      </div>
     
     <div className="container d-flex justify-content-center" style={{width:"100%"}}>
     <a
          href={url}
          style={{
            width: "auto",
            // border: "2px solid #0cb8ec",
            // borderRadius: "1.5rem",
          }}
          className="button mb-5"
        >
          Download Resume
        </a>
     </div>
    </div>
    </motion.div>
  );
}
export default Resume;
