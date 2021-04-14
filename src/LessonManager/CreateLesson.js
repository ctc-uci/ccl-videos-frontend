import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory, Link } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
import VideoDropzone from "./VideoDropzone";
import Dropzone from "react-dropzone";
import "./CreateLesson.css";

const CreateLesson = () => {
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDecription] = useState(null);
  // const [thumbnailURL, setThumbnail] = useState(thumbnail);
  const [videoURL, setVideo] = useState(null);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  async function onSubmit() {
    // const newForm = {
    //   title: videoTitle,
    //   description: videoDescription,
    //   videoUrl: videoURL,
    //   thumbnailUrl: thumbnailURL,
    // };
    // await axios
    // .post(`${apiURL}/lessons`, newForm, {
    //   withCredentials: true,
    // })
    // .then((res) => {
    //   console.log("create res", res);
    //   // redirect();
    // })
    // .catch((error) => {
    //   console.log("create error", error);
    // });
  }
  return (
    <div>
      <Form className="whole-page">
        <div className="header-section">
          <h1 className="title">Create New Lesson</h1>
          <Link
            to={{
              pathname: "/previewLesson",
              state: {
                video: videoURL,
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
            <VideoDropzone></VideoDropzone>
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
          <div className="delete"></div>
          <div className="button-group">
            <Button outline pill onClick={redirect}>
              Cancel
            </Button>
            <Button pill onClick={onSubmit}>
              Create Lesson
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateLesson;
