import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../assets/Resume.pdf";

function Resume() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/kiranbendkoli-portfolio.appspot.com/o/Resume%20(2).pdf?alt=media&token=eb7ef01a-3a75-4157-a2cb-f76dc8c99560";

  // pdfjs.GlobalWorkerOptions.workerSrc =
  // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="d-flex justify-content-center">
      
      <div className="container resume-container" >
        <div className="row d-flex justify-content-center">
          <h1 className="name d-flex justify-content-center mb-5">Resume</h1>
          <a href={url} style={{width:"10rem", border: "2px solid #0cb8ec",
    borderRadius: "2rem",}} className="btn btn-outline-info mb-4">Download Resume</a>
        </div>
        <Worker
          workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"
          style={{  
            margin: "0px",
            padding: "0px",
            background: "rgb(187,232,232)",
          }}
        >
          <Viewer 
          className="resume-container"
            fileUrl={pdf}
            style={{
              margin: "0px",
              padding: "0px",
              background: "rgb(187,232,232)",
            }}
          />
        </Worker>
      </div>
      {/* <iframe src={url} frameborder="0" style={{width:"80vh",height:"100vh"}}></iframe> */}
      
    </div>
  );
}
export default Resume;
