import React from "react";
const VideoPlayer = ({ url }) => {
  return (
    <div style={{ height: "inherit" }}>
      {url ? (
        <iframe
          title="videoTitle"
          frameBorder="0"
          allowFullScreen
          style={{ width: "100%", height: "100%" }}
          src={url}
        ></iframe>
      ) : (
        <p>No video has been uploaded</p>
      )}
    </div>
  );
};

export default VideoPlayer;
