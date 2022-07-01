import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../assets/Kiran_Bendkoli_.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/kiranbendkoli-portfolio.appspot.com/o/Kiran_Bendkoli_.pdf?alt=media&token=8224ddab-ae0d-4fc6-8b38-e0815343ed39";

  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="margintop">
     
      <div className="container resume">
      <div className="row d-flex justify-content-center">
        <h1 className="name d-flex justify-content-center mb-5">Resume</h1>
        <a
          href={url}
          style={{
            width: "10rem",
            border: "2px solid #0cb8ec",
            borderRadius: "1.5rem",
          }}
          className="btn btn-outline-info mb-4"
        >
          Download Resume
        </a>
      </div>
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.6 : 0.6} />
        </Document>
      </div>
    </div>
  );
}
export default Resume;
