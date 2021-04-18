import React, { useState } from "react";
import axios from "axios";
import { apiURL, bucket } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
import VideoDropzone from "./VideoDropzone";
import "./CreateLesson.css";

const CreateLesson = () => {
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDecription] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  function notifyUpload(file) {
    setVideoFile(file[0]);
    let videoFileURL = URL.createObjectURL(file[0]);
    setVideoURL(videoFileURL);
    console.log("vidFile", videoFile);
  }

  const getUploadURL = async () => {
    try {
      let uploadConfig = { ID: "", contentType: "video/mp4", bucket: bucket };
      const res = await axios.post(`${apiURL}/s3/`, uploadConfig);
      console.log("getUploadURL", res);
      return res.data.uploadURL;
    } catch (err) {
      console.log(err);
    }
  };

  const uploadVideo = async (link) => {
    try {
      console.log(videoFile);
      const res = await axios.put(link, videoFile, {
        headers: {
          "Content-Type": "video/mp4",
        },
      });
      console.log("uploadVideo res", res);
      var vidLink = res.config.url.split("?")[0];
      return vidLink;
    } catch (err) {
      console.log(err);
    }
  };

  async function onSubmit() {
    let vidLink;
    try {
      const uploadUrl = await getUploadURL();
      vidLink = await uploadVideo(uploadUrl);
      console.log("vidLinK", vidLink);
    } catch (err) {
      console.log(err);
    }

    try {
      let newLesson = {
        lessonId: vidLink.split("/video/")[1].split(".")[0],
        title: videoTitle,
        description: videoDescription,
        videoUrl: vidLink,
      };
      console.log("newLesson", newLesson);
      await axios.post(`${apiURL}/lessons/`, newLesson, {
        withCredentials: true,
      });
      // redirect();
    } catch (err) {
      console.log(err);
    }
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
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Replace Video
            </Button>
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
            <Button
              type="Submit"
              pill
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              Create Lesson
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateLesson;
