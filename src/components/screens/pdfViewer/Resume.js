import React from "react";
import { Lines } from "react-preloaders";

//import components
import Resume from "../../parts/pdfViewer/PDFViewer";

//import Css for pdf format
import "./Resume.css";

//need to run npm react-pdf
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class PDFViewer extends React.Component {
  render() {
    return (
      <div>
        <div className="all-page-container">
          <Resume pdf={"assets/pdf/RESUME.pdf"} />
        </div>
        <Lines />
      </div>
    );
  }
}
