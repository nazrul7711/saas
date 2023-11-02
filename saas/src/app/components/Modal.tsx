"use client";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  let progressRef = useRef(null);
  let [progress, setProgress] = useState(0);
  let progressSteps = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 95) {
          clearInterval(interval);
          return previous;
        }
        return previous + 5;
      });
    }, 500);
    return interval;
  };

  return (
    <div className="modal-wrapper" id="wrapper">
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
            <Dropzone
              multiple={false}
              onDrop={async(acceptedFiles) => {
                setIsUploading(true);
                let progressInterval = progressSteps();
                await new Promise((resolve) =>
                  setTimeout(() => resolve("hello"), 15000)
                );
                clearInterval(progressInterval);
                setProgress(100);
              }}
            >
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
                      <div
                        className="progress-bar"
                        ref={progressRef}
                        style={{ "--width": progress } as React.CSSProperties}
                      ></div>
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
