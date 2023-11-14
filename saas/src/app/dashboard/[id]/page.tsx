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
import { useResizeDetector } from "react-resize-detector";
import SimpleBar from "simplebar-react";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PageProps {
  params: {
    id: string;
  };
}

const Id = ({ params }: PageProps) => {
  const [rotation,setRotation] = useState<number>(0)
  const [numPages, setNumPages] = useState<number>();
  const [file, setFile] = useState<string | null>(null);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const { width, ref } = useResizeDetector();
  const [font, setFont] = useState<number>(100);

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
  function upHandler() {
    setCurrentPageNumber((prev) =>
      currentPageNumber === numPages ? prev : prev + 1
    );
  }
  function downHandler() {
    setCurrentPageNumber((prev) => (currentPageNumber === 1 ? prev : prev - 1));
  }
  function selectHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    setFont(parseInt(e.target.value));
  }
  function rotationHandler(){
    setRotation(prev=>prev+90)
  }

  let { id } = params;
  return (
    <div className="id">
      <div className="left">
        <div className="top">
          <div className="left-side">
            <div className="down" onClick={downHandler}>
              <AiOutlineDown />
            </div>
            <div className="input-side">
              <input
                type="text"
                onChange={pageChangeHandler}
                defaultValue={1}
              />
              <span>/{numPages}</span>
            </div>
            <div className="up" onClick={upHandler}>
              <AiOutlineUp />
            </div>
          </div>
          <div className="right-side">
            <AiOutlineSearch size={20} className="search" />
            <select onChange={selectHandler}>
              <option value={2}>200%</option>
              <option value={1.5}>150%</option>
              <option value={1}>100%</option>
              <option value={0.5}>50%</option>
              <option value={0.25}>25%</option>
            </select>
            <div className="refresh" onClick={rotationHandler}>
            <GrRefresh size={20} />
            </div>
            <AiOutlineClose size={20} className="close" />
          </div>
        </div>
        <SimpleBar autoHide={false} style={{ maxHeight: `calc(100vh - 1rem)` }}>
          <div ref={ref}>
            {" "}
            <Document
              loading={<div className="loading">loading....</div>}
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={currentPageNumber}
                width={width ? width : 1}
                scale={font}
                rotate={rotation}
              />
            </Document>
          </div>
        </SimpleBar>
      </div>
      <div className="right">
        <div className="some"></div>
      </div>
    </div>
  );
};

export default Id;
