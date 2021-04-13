import React from "react";
import { Button } from "shards-react";
import VideoPlayer from "../common/VideoPlayer";

const Previewer = ({ video, title, description }) => {
  return (
    <div>
      <Button
        pill
        theme="danger"
        onClick={() => {
          window.close();
        }}
      >
        Close
      </Button>
      <div>
        <VideoPlayer url={video}></VideoPlayer>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <h5>Description</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Previewer;
