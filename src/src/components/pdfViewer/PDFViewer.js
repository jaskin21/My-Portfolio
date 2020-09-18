import React from "react";
import PDFViewer from "pdf-viewer-reactjs";

const ResumePDF = () => {
  return (
    <PDFViewer
      document={{
        url:
          "https://drive.google.com/drive/u/1/folders/1J-bPp6GiwzvdwH6RJbsGhEedXi3wcCC_",
      }}
    />
  );
};

export default ResumePDF;
