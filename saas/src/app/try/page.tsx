"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "@/styles/try.scss";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";

const page = () => {
  return (
    <div className="try">
      <div className="pdf">
        <div className="pdf">hello</div>
      </div>
    </div>
  );
};

export default page;
