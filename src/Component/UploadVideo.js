import React, { useState, useEffect } from 'react';
import VideoUploader from './VideoUploader';
import axios from 'axios';

const TEST_URL = 'https://ccl-videos.s3.us-west-1.amazonaws.com/frontendtest.mp4?AWSAccessKeyId=AKIA5T6AQNXWJPHZNHYB&Content-Type=video%2Fmp4&Expires=1618012353&Signature=qk%2B7nb3HH6%2BhbFfKBwyTapyw%2Fpg%3D&x-amz-acl=public-read-write';

const Test = () => {
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    const uploadVideo = async () => {
      const res = await axios.post(TEST_URL);
      console.log(res);
    }
    uploadVideo();
  }, [videoFile])

  const fileChange = (selectedFile) => {
    setVideoFile(selectedFile);
  }

  return (
    <div>
      <h1>hello</h1>
      <VideoUploader notifyChange={fileChange}/>
    </div>
  )
}

export default Test
