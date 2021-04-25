import React, { useEffect } from "react";

const VideoPlayer = ({ url }) => {
  useEffect(() => {
    document.getElementById("videoSource").parentElement.load();
  }, [url]);

  return (
    <video
      className="video-player vjs-default-skin"
      controls
      width="100%"
      height="100%"
      preload="auto"
      data-setup="{}"
      controlsList="nodownload"
    >
      <source id="videoSource" src={url} type="video/mp4"></source>
      <p className="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a
          href="https://videojs.com/html5-video-support/"
          target="_blank"
          rel="noopener noreferrer"
        >
          supports HTML5 video
        </a>
      </p>
    </video>
  );
};

export default VideoPlayer;
