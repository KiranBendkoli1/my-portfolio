import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/Kiran_Resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/kiranbendkoli-portfolio.appspot.com/o/Kiran_Resume.pdf?alt=media&token=e432dde4-0936-4cad-bff1-1629f2a0685b";

  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
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
  );
}
export default Resume;
