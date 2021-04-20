import React from "react";
import VideoPlayer from 'common/VideoPlayer';
import 'customerVideoPlayer/VideoPlayer.css';

const LessonVideo = ({ url, thumbnail, title, desc, date }) => {
  const getDate = (uploadDate) => {
    const dateObj = new Date(uploadDate);
    const month = dateObj.toLocaleDateString(undefined, { month: '2-digit' });
    const day = dateObj.toLocaleDateString(undefined, { day: '2-digit' });
    const year = dateObj.toLocaleDateString(undefined, { year: '2-digit' });
    const time = dateObj.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    return `${month}/${day}/${year}, ${time}`;
  };

  return (
    <div style={{ height: "inherit" }} className="lesson-page">
      {url ? (
        <VideoPlayer url={url} thumbnail={thumbnail}/>
      ) : (
        <p>No video has been uploaded</p>
      )}
      <p className="expiration-date">Expiration Date: {getDate(date)}</p>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default LessonVideo;