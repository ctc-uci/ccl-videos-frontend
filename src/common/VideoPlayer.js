import React from "react";
const VideoPlayer = ({ url, thumbnail }) => {
  console.log(thumbnail);
  return (
    <div className="vid-container">
      <video
        controls
        controlsList="nodownload"
        preload="auto"
        class="video-js"
        data-setup='{"fluid": true}'
        aspectRatio="16:9"
        poster={thumbnail}
      >
        <source src={url} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoPlayer;
