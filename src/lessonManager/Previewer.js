import React from "react";
import { Button } from "shards-react";
import VideoPlayer from "customerVideoPlayer/CustomerVideoPlayer";
import "lessonManager/Previewer.css";

const Previewer = ({ title, description, videoUrl, closePreviewer }) => {
  return (
    <div>
      <div className="top">
        <Button className="exit" theme="danger" onClick={closePreviewer}>
          Exit Preview
        </Button>
      </div>
      <VideoPlayer
        url={videoUrl}
        title={title}
        desc={description}
      ></VideoPlayer>
    </div>
  );
};

export default Previewer;
