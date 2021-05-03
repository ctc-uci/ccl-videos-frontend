import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from 'customerVideoPlayer/CustomerVideoPlayer';
import axios from 'axios';
import config from 'config';

const Previewer = () => {
  const { id } = useParams();
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const getLesson = async () => {
    const res = await axios.get(`${config.apiURL}/lessons/${id}`);
    console.log(res);
    const { title, description, videoUrl } = res.data;
    setTitle(title);
    setUrl(videoUrl);
    setDescription(description);
  };

  useEffect(() => {
    console.log('hi');
    getLesson();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <VideoPlayer url={url} title={title} desc={description}></VideoPlayer>
    </div>
  );
};

export default Previewer;

