import React, { useState, useEffect } from 'react';
import VideoUploader from './VideoUploader';
import axios from 'axios';
import config from '../config';

const getUploadURL = async () => {
  try {
    const res = await axios.post(`${config.apiURL}/upload`, {
      'bucket': 'ccl-videos',
      'contentType': 'video/mp4'
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

const uploadVideo = async (uploadURL, file) => {
  try {
    console.log(uploadURL);
    const res = await axios.put(uploadURL, file, {
      headers: {
        'Content-Type': 'video/mp4',
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const onChange = async (selectedFile) => {
  const uploadURL = await getUploadURL();
  const res = await uploadVideo(uploadURL.data.uploadURL, selectedFile);
  console.log(res);
};


const Test = () => {
  return (
    <div>
      <h1>hello</h1>
      <VideoUploader notifyChange={onChange} />
    </div>
  );
};

export default Test;
