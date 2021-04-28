import React from 'react';

const VideoPlayer = ({ url, thumbnail }) => {
  return (
    <video
      id='my-player'
      className='video-js'
      controls
      poster={thumbnail}
      preload='auto'
      data-setup='{}'
      controlsList='nodownload'>
      <source src={url} type='video/mp4'></source>
      <p className='vjs-no-js'>
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a
          href='https://videojs.com/html5-video-support/'
          target='_blank'
          rel='noopener noreferrer'>
          supports HTML5 video
        </a>
      </p>
    </video>
  );
};

export default VideoPlayer;
