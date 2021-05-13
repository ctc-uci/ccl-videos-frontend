import React from 'react';
import { apiURL, bucket } from 'config';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';

const VideoUploader = ({ handleOnPrepare = null, handleSetVideoURL, handleSubmit }) => {
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

  const dropzoneInputContent = () => {
    return (
      <div>
        <p>Drop file to upload or,</p>
        {/* <Button onClick={(e) => {e.preventDefault();}}>Select Video (mp4)</Button> */}
      </div>
    );
  };

  return (
    <Dropzone
      inputContent={dropzoneInputContent}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
      accept='video/*'
    />
  );
};

export default VideoUploader;
