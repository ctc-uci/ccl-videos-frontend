import React from 'react';
// import { useDropzone } from "react-dropzone";
// import { Button } from "shards-react";
// import uploadIcon from "icons/upload-icon.png";
// import "lessonManager/VideoDropzone.css";
import { apiURL, bucket } from 'config';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

const VideoUploader = ({ handleOnPrepare=null, handleSetVideoURL, handleSubmit }) => {
  const getUploadParams = async ({ file }) => {
    try {
      let uploadConfig = { contentType: 'video/mp4', bucket: bucket };
      const res = await axios.post(`${apiURL}/upload/`, uploadConfig);
      console.log(res);
      const fileUrl = `${bucket}/${res.data.key}`;
      onUploadSuccess(res.data.fileName);
      return {
        body: file,
        meta: { fileUrl, ACL: 'public-read' },
        url: res.data.uploadURL,
        method: 'PUT',
      };
    } catch (err) {
      console.log(err);
    }
  };

  const onUploadSuccess = (fileName) => {
    const videoURL = `https://${bucket}.s3-us-west-1.amazonaws.com/${fileName}`;
    handleSetVideoURL(videoURL);
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === 'preparing') {
      if (handleOnPrepare) {
        handleOnPrepare();
      }
    }
    if (status === 'done') {
      console.log('done');
      handleSubmit();
    }
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      accept='video/*'
    />
  );
};

export default VideoUploader;
