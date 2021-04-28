/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'shards-react';
import uploadIcon from 'icons/upload-icon.png';
import 'lessonManager/VideoDropzone.css';

function VideoDropzone({ notifyUpload }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: 'video/mp4',
    maxFiles: 1,
    onDropAccepted: (files) => {
      setSelectedFiles(files);
      notifyUpload(files);
    },
    onFileDialogCancel: (files) => {
      setSelectedFiles([]);
      console.log('canceled', files);
    },
  });

  const [uploaded, setUploaded] = useState(false);

  const dropzoneBox = useMemo(() => {
    let base = 'dropzone-zone';
    if (isDragActive) {
      base += ' dropzone-active';
    }
    if (isDragAccept) {
      base += ' dropzone-accept';
    }
    if (isDragReject) {
      base += ' dropzone-reject';
    }
    return base;
  }, [isDragActive, isDragReject, isDragAccept]);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      setUploaded(true);
    } else {
      setUploaded(false);
    }
  }, [selectedFiles]);

  return (
    <div className={`container ${uploaded ? 'hidden' : ''}`}>
      <div className={dropzoneBox} {...getRootProps()}>
        <input {...getInputProps()} />
        <img className='video-upload-icon' src={uploadIcon} alt='Upload Cloud'></img>
        <span className='dropzone-text'>Drop File to Upload, or</span>
        <Button onClick={open}>Select Video</Button>
      </div>
    </div>
  );
}

export default VideoDropzone;
