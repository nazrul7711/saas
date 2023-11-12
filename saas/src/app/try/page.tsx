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

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBfnZINF9_VO5sM59N2v9uIQs8woS1Bf_I",
  authDomain: "e-commerce-400807.firebaseapp.com",
  projectId: "e-commerce-400807",
  storageBucket: "e-commerce-400807.appspot.com",
  messagingSenderId: "505760981286",
  appId: "1:505760981286:web:fb49c3e804f4a1576aa1e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const page = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>();
  const [file, setFile] = useState<string | null>(null);

  

  

  return (
    <div className="try">
      <div className="pdf">
        {file && (
          <div className="pdf">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
