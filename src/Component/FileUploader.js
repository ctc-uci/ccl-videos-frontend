import React, { useRef } from "react";
import "./FileUploader.css";
const FileUploader = ({ notifyChange }) => {
  const fileInputRef = useRef();

  const changeHandler = (event) => {
    if (event.target.files.length === 0) {
      notifyChange(false, null);
    } else {
      notifyChange(true, event.target.files[0]);
    }
  };

  return (
    <div id="chooserContainer">
      <input
        id="fileChooser"
        type="file"
        name="file"
        accept="image/*"
        onChange={changeHandler}
        ref={fileInputRef}
      />
      <button
        id="uploader"
        onClick={(e) => {
          e.preventDefault();
          fileInputRef.current.click();
        }}
      >
        Upload Thumbnail
      </button>
    </div>
  );
};

export default FileUploader;
