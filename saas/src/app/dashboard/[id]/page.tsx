"use client";
import React, { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "@/styles/id.scss";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { GrRefresh } from "react-icons/gr";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PageProps {
  params: {
    id: string;
  };
}

const Id = ({ params }: PageProps) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>();
  const [file, setFile] = useState<string | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);


  useEffect(() => {
    let fetcher = async () => {
      let res = await fetch("http://localhost:3000/api/getPdfFile");
      let data = await res.json();
      setFile(data.msg);
    };
    fetcher();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  function pageChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPageNumber(parseInt(e.target.value));
  }

  let { id } = params;
  return (
    <div className="id">
      <div className="left">
        <div className="top">
          <div className="left-side">
            <AiOutlineDown />
            <div className="input-side">
              <input type="text" onChange={pageChangeHandler} defaultValue={1} />
              <span>/{numPages}</span>
            </div>
            <AiOutlineUp />
          </div>
          <div className="right-side">
            <AiOutlineSearch size={20} />
            <select name="" id="">
              <option value="100">100%</option>
              <option value="50">50%</option>
              <option value="25">25%</option>
            </select>
            <GrRefresh size={20} />
            <AiOutlineClose size={20} />
          </div>
        </div>
        <Document
          loading={<div className="loading">loading....</div>}
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={currentPageNumber} />
        </Document>
      </div>
      <div className="right">
        <div className="some"></div>
      </div>
    </div>
  );
};

export default Id;
