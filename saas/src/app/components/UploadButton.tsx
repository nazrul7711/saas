"use client";
import React, { useContext, useState } from "react";
import "@/styles/upload.scss";
import { SaasContext} from "../providers/ContextProvider";

const UploadButton = () => {
  let ctx = useContext(SaasContext);

  return (
    <div className="dialog">
      <button className="upload" onClick={() => ctx?.setShowModal(true)}>
        Upload PDF
      </button>
    </div>
  );
};

export default UploadButton;
