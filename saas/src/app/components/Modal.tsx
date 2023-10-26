"use client";
import React, { ReactNode, useCallback, useContext, useState } from "react";
import { SaasContext } from "../providers/ContextProvider";
import "@/styles/modal.scss";
import {
  AiOutlineCloseCircle,
  AiOutlineCloud,
  AiOutlineFilePpt,
} from "react-icons/ai";
import Dropzone from "react-dropzone";

const Modal = ({ children }: { children: ReactNode }) => {
  let ctx = useContext(SaasContext);
  let [isUploading, setIsUploading] = useState<boolean>(true);

  return (
    <div className="modal-wrapper">
      {" "}
      {ctx?.showModal && (
        <div
          className={`backdrop`}
          onClick={() => ctx?.setShowModal(false)}
        ></div>
      )}
      {ctx?.showModal && (
        <div className="modal">
          <div>
            <Dropzone multiple={false} onDrop={(accept) => console.log(accept)}>
              {({ getRootProps, getInputProps, acceptedFiles }) => (
                <div {...getRootProps()} className="dropbox">
                  <input {...getInputProps()} />
                  <AiOutlineCloud size={30} />
                  <p>
                    <strong>Click to upload or drag and drop</strong>
                  </p>
                  <p>PDF [up to 4mb]</p>
                  {acceptedFiles && acceptedFiles[0] ? (
                    <div className="file">
                      <AiOutlineFilePpt size={30} />
                      <p>{acceptedFiles[0].name}</p>
                    </div>
                  ) : null}

                  {isUploading ? (
                    <div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                      />
                    </div>
                  ) : null}
                </div>
              )}
            </Dropzone>
          </div>
          <div className="close" onClick={() => ctx?.setShowModal(false)}>
            <AiOutlineCloseCircle size={25} />
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Modal;
