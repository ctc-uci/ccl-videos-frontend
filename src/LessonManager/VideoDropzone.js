/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "shards-react";
import uploadIcon from "../icons/upload-icon.png";
import "./VideoDropzone.css";

function VideoDropzone({ notifyUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: "video/*",
    maxFiles: 1,
    onDropAccepted: (files) => {
      setSelectedFiles(files);
      notifyUpload(files);
    },
    onFileDialogCancel: (files) => {
      setSelectedFiles([]);
      console.log("canceled", files);
    },
  });

  const [uploaded, setUploaded] = useState(false);

  // useEffect(() => {
  //   let done = true;
  //   const progress = document.getElementsByClassName("progress");
  //   for (let i = 0; i < progress; i += 1) {
  //     if (
  //       progress.innerHTML !==
  //       '<img alt="Progress spinner" src="/icons/check-icon.png" height="50px" />'
  //     ) {
  //       done = false;
  //       break;
  //     }
  //   }
  //   setUploaded(done);
  // });

  const dropzoneBox = useMemo(() => {
    let base = "dropzone-zone";
    if (isDragActive) {
      base += " dropzone-active";
    }
    if (isDragAccept) {
      base += " dropzone-accept";
    }
    if (isDragReject) {
      base += " dropzone-reject";
    }
    return base;
  }, [isDragActive, isDragReject, isDragAccept]);

  //   const myUploadProgress = (myFileId) => (progressEvent) => {
  //     const { loaded, total } = progressEvent;
  //     const percent = Math.floor((loaded * 100) / total);
  //     const progress = document.getElementById(myFileId);
  //     progress.innerHTML =
  //       '<img alt="Progress spinner" src="/icons/spinner-icon.png" height="50px" className="spinning-progress" />';
  //     if (percent === 100) {
  //       progress.innerHTML =
  //         '<img alt="Progress spinner" src="/icons/check-icon.png" height="50px" />';
  //     }
  //   };

  //   const uploadTemplates = () => {
  //     const upload = async (file, options) => {
  //       await axios.post(`${config.apiUrl}/templates`, file, {
  //         withCredentials: true,
  //         ...options,
  //       });
  //     };
  //     if (acceptedFiles.length !== 0) {
  //       for (let i = 0; i < acceptedFiles.length; i += 1) {
  //         const options = {
  //           onUploadProgress: myUploadProgress(acceptedFiles[i].path),
  //         };

  //         const formData = new FormData();
  //         formData.append("file", acceptedFiles[i]);
  //         upload(formData, options);
  //       }
  //       if (uploaded) {
  //         setTimeout(() => {
  //           onClose();
  //         }, 750);
  //       }
  //     }
  //   };
  useEffect(() => {
    if (selectedFiles.length > 0) {
      setUploaded(true);
    } else {
      setUploaded(false);
    }
  }, [selectedFiles]);

  // const deleteUploadedTemplate = (event) => {
  //   const index = acceptedFiles.findIndex(
  //     (file) => file.name === event.target.parentNode.parentNode.parentNode.id
  //   );
  //   acceptedFiles.splice(index, 1);
  // };
  return (
    <div className={`container ${uploaded ? "hidden" : ""}`}>
      <div className={dropzoneBox} {...getRootProps()}>
        <input {...getInputProps()} />
        <img className="icon" src={uploadIcon} alt="Upload Cloud"></img>
        <span className="dropzone-text">Drop File to Upload, or</span>
        <Button onClick={open}>Select Video</Button>
      </div>
      <aside>
        {/* <ul className="files-list">
          {acceptedFiles.map((file) => (
            <li key={file.path} className="file-item">
              <span id={file.path} className="progress">
                <div />
              </span>
              <p>
                {file.path}
                <br />
                {file.size / 1000} KB
              </p> */}
        {/* <button
                type="button"
                className="remove-file-btn"
                aria-label="Remove"
                onClick={deleteUploadedTemplate}
              >
                <img
                  alt="Close upload template form"
                  src="/icons/close-icon.png"
                />
              </button> */}
        {/* </li>
          ))}
        </ul> */}
      </aside>
      {/* <div className="popup-buttons">
        <button
          type="button"
          className="orange-outline-btn popup-btn"
          onClick={onClose}
        >
          Cancel
        </button>
        {acceptedFiles.length === 0 ? (
          <button
            type="button"
            className="disabled-btn orange-btn popup-btn"
            // onClick={uploadTemplates}
          >
            Upload All
          </button>
        ) : (
          <button
            type="button"
            className="orange-btn popup-btn"
            // onClick={uploadTemplates}
          >
            Upload All
          </button>
        )}
      </div> */}
    </div>
  );
}

export default VideoDropzone;
