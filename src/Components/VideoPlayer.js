import React from "react";
const VideoPlayer = ({ url }) => {
  return (
    <div>
      <video controls preload="auto" class="video-js" data-setup="{}">
        <source src={url} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoPlayer;
