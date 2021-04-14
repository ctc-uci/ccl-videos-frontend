import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory, Link } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
// import "./EditLesson.css";

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
      <Form className="whole-page">
        <div className="header-section">
          <h1 className="title">Edit Lesson</h1>
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
              className="preview"
              onClick={(e) => {
                e.prevetDefault();
              }}
            >
              Preview Lesson
            </Button>
          </Link>
        </div>
        <div className="mid-section">
          <div className="mid-left">
            <VideoPlayer url={video}></VideoPlayer>
          </div>
          <div className="mid-right">
            <FormGroup>
              <div className="title-section">
                <label htmlFor="title">Title</label>
                <FormInput
                  required
                  value={videoTitle}
                  id="title"
                  placeholder="Enter Title Here"
                  onChange={(e) => {
                    setVideoTitle(e.target.value);
                  }}
                />
              </div>
              <div className="description-sectio>">
                <label htmlFor="description">Description</label>
                <FormTextarea
                  value={videoDescription}
                  id="description"
                  placeholder="Enter Description Here"
                  onChange={(e) => {
                    setVideoDecription(e.target.value);
                  }}
                />
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="bottom">
          <div className="delete">
            <Button theme="danger">Delete Lesson</Button>
          </div>
          <div className="button-group">
            <Button outline pill onClick={redirect}>
              Cancel
            </Button>
            <Button pill onClick={onSubmit}>
              Save Edits
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditLesson;
