import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "../assets/resume.pdf";

function Resume() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/kiranbendkoli-portfolio.appspot.com/o/r.pdf?alt=media&token=d4d77a6b-617c-48cb-93af-a7e9d04dce0f";

  // pdfjs.GlobalWorkerOptions.workerSrc =
  // `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="d-flex justify-content-center">
      
      <div className="container" style={{ width: "80rem", height: "100%" }}>
        <Worker
          workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"
          style={{
            margin: "0px",
            padding: "0px",
            background: "rgb(187,232,232)",
          }}
        >
          <Viewer
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
