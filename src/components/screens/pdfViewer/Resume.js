import React from "react";

//import PdfViewer component
import Resume from "../../parts/pdfViewer/PDFViewer";

//import Css for pdf format
import "./Resume.css";

//need to run npm react-pdf
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {
  return (
    <div className="all-page-container">
      <Resume pdf={"assets/pdf/RESUME.pdf"} />
    </div>
  );
};

export default PDFViewer;
