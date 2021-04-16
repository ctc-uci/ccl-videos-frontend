import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
import VideoDropzone from "./VideoDropzone";
import "./CreateLesson.css";

const CreateLesson = () => {
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDecription] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  function notifyUpload(file) {
    console.log("upaloadedFuke", file);
    console.log(file[0].type);
    let videoFileURL = URL.createObjectURL(file[0]);
    setVideoURL(videoFileURL);
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
          <Button
            href={`/previewLesson/${videoTitle}/${videoDescription}/${encodeURIComponent(
              videoURL
            )}`}
            target="_blank"
          >
            Preview Lesson
          </Button>
        </div>
        <div className="mid-section">
          <div className="mid-left">
            <VideoDropzone notifyUpload={notifyUpload}></VideoDropzone>
            <VideoPlayer url={videoURL}></VideoPlayer>
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
                  required
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
            <Button type="Submit" pill onClick={onSubmit}>
              Create Lesson
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateLesson;
