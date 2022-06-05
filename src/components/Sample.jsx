import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Sample.css";

export default function Sample() {
  const [file, setFile] = useState("./sample.pdf");
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <br />
      <br />
      <br />
      <div className="Example__container">
        <div className="Example__container__document">
          <h2 style={{ color: "#446A46" }} className="text-center">
            Your Certificate is here 🎉
          </h2>
          <Document file="sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <button className="btn btn-danger m-4">Download PDF</button>
      </div>
    </div>
  );
}
