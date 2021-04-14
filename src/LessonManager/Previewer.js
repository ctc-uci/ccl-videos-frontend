import React from "react";
import { Button } from "shards-react";
import VideoPlayer from "../common/VideoPlayer";

const Previewer = ({ video, title, description }) => {
  var thumbnail =
    "https://ccl-video-thumbnails.s3-us-west-1.amazonaws.com/wireframe_fidelity_assignment4.png";
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
        <VideoPlayer url={video} thumbnail={thumbnail}></VideoPlayer>
      </div>
      <div>
        <h2>{title || "Empty Title"}</h2>
      </div>
      <div>
        <h5>Description</h5>
        <p>{description || "Empty Description"}</p>
      </div>
    </div>
  );
};

export default Previewer;
