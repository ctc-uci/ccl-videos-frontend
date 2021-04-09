import React, { useRef } from "react";
const VideoUploader = ({ notifyChange }) => {
  const fileInputRef = useRef();

  const changeHandler = (event) => {
    if (event.target.files.length === 0) {
      notifyChange(null);
    } else {
      notifyChange(event.target.files[0]);
    }
  };

  return (
    <div id="chooserContainer">
      <input
        id="fileChooser"
        type="file"
        name="file"
        accept="video/*"
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

export default VideoUploader;
