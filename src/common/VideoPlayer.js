import React from "react";
const VideoPlayer = ({ url }) => {
  return (
    <div>
      <video
        controls
        controlsList="nodownload"
        preload="auto"
        class="video-js"
        data-setup="{}"
        aspectRatio="16:9"
        poster="https://ccl-video-thumbnails.s3-us-west-1.amazonaws.com/wireframe_fidelity_assignment4.png"
      >
        <source src={url} type="video/mp4"></source>
      </video>
    </div>
  );
};

export default VideoPlayer;
