import React, { useEffect, useState } from "react";
const VideoPlayer = ({ url }) => {
  const [selectedUrl, setSelectedUrl] = useState(url);

  useEffect(() => {
    setSelectedUrl(url);
    document.getElementById("videoSource").parentElement.load();
  }, [url]);

  return (
    <div className={url ? "vid-container" : "hidden"}>
      <video
        controls
        controlsList="nodownload"
        preload="auto"
        className="video-js"
        data-setup='{"fluid": true}'
        aspectratio="16:9"
      >
        <source id="videoSource" src={selectedUrl}></source>
      </video>
    </div>
  );
};

export default VideoPlayer;
