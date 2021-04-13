import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import VideoPlayer from "../common/VideoPlayer";
import Previewer from "./Previewer";
import { useHistory, Link } from "react-router-dom";

const EditLesson = ({ id, title, description, video, thumbnail }) => {
  const [videoTitle, setVideoTitle] = useState(title);
  const [videoDescription, setVideoDecription] = useState(description);
  // const [thumbnailURL, setThumbnail] = useState(thumbnail);
  // const [videoURL, setVideo] = useState(video);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  async function onSubmit() {
    // const updatedForm = {
    //   title: videoTitle,
    //   description: videoDescription,
    //   videoUrl: video,
    //   thumbnailUrl: thumbnailURL,
    // };
    // await axios
    //   .patch(`${apiURL}/lessons/${id}`, updatedForm, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log("edit res", res);
    //     // redirect();
    //   })
    //   .catch((error) => {
    //     console.log("edit error", error);
    //   });
  }
  return (
    <div>
      <Form>
        <Link
          to={{
            pathname: "/previewLesson",
            state: {
              video: video,
              title: videoTitle,
              description: videoDescription,
            },
          }}
          target="_blank"
        >
          <Button
            onClick={(e) => {
              e.prevetDefault();
            }}
          >
            Preview Lesson
          </Button>
        </Link>
        <FormGroup>
          <label htmlFor="title">Title</label>
          <FormInput
            required
            value={videoTitle}
            id="title"
            placeholder="Enter a title for video"
            onChange={(e) => {
              setVideoTitle(e.target.value);
            }}
          />
          <label htmlFor="description">Description</label>
          <FormTextarea
            value={videoDescription}
            id="description"
            placeholder="Enter a description for video"
            onChange={(e) => {
              setVideoDecription(e.target.value);
            }}
          />
        </FormGroup>
        <VideoPlayer url={video}></VideoPlayer>
        <Button outline pill theme="secondary" onClick={redirect}>
          Cancel
        </Button>
        <Button pill onClick={onSubmit}>
          Save Edits
        </Button>
        <Button theme="danger">Delete Lesson</Button>
      </Form>
    </div>
  );
};

export default EditLesson;
