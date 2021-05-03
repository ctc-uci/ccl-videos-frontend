import React from 'react';
import VideoPlayer from 'common/VideoPlayer';
import 'customerVideoPlayer/CustomerVideoPlayer.css';

const CustomerVideoPlayer = ({ url, thumbnail, title, desc, date }) => {
  const getDate = (date) => {
    // date is null when used in previewer
    if (!date) {
      return new Date().toDateString();
    }
    const dateObj = new Date(date);
    const month = dateObj.toLocaleDateString(undefined, { month: '2-digit' });
    const day = dateObj.toLocaleDateString(undefined, { day: '2-digit' });
    const year = dateObj.toLocaleDateString(undefined, { year: '2-digit' });
    const time = dateObj.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
    return `${month}/${day}/${year}, ${time}`;
  };

  return (
    <div className='lesson-page'>
      {url ? <VideoPlayer src={url} thumbnail={thumbnail} /> : <p>No video has been uploaded</p>}
      <div className='customer-video-text-container'>
        <p className='customer-video-expiration-date'>Expiration Date: {getDate(date)}</p>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default CustomerVideoPlayer;
