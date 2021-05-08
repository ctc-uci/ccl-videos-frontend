import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlert } from "common/AlertBannerSlice";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import config from "config";
import VideoPlayer from "common/VideoPlayer";
import VideoUploader from "lessonManager/VideoUploader";
import "lessonManager/CreateLesson.css";
import Previewer from "./Previewer";

const CreateLesson = () => {
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDecription] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [playerVisible, setPlayerVisible] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = () => {
    history.goBack();
  };

  const handleSetVideoUrl = (videoURL) => {
    setVideoURL(videoURL);
  };

  const createLesson = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.apiURL}/lessons`, {
        title: videoTitle,
        description: videoDescription,
        videoUrl: videoURL,
      });
      console.log(res);
      if (res.status === 200) {
        dispatch(
          createAlert({
            theme: "success",
            message: "Lesson created successfully!",
          })
        );
      }
      history.push("/lessons");
    } catch (err) {
      dispatch(createAlert({ theme: "danger", message: `Error: ${err}` }));
    }
  };

  const renderPlayer = () => {
    setPlayerVisible(true);
  };

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return isPreviewMode ? (
    <div className="whole-page">
      <Previewer
        title={videoTitle}
        description={videoDescription}
        videoUrl={videoURL}
        closePreviewer={togglePreview}
      ></Previewer>
    </div>
  ) : (
    <div>
      <Form className="whole-page">
        <div className="header-section">
          <h1 className="lesson-title">Create New Lesson</h1>
          <Button onClick={togglePreview}>Preview Lesson</Button>
        </div>
        <div className="mid-section">
          <div className="mid-left">
            {playerVisible ? <VideoPlayer src={videoURL}></VideoPlayer> : null}
            <VideoUploader
              handleSubmit={renderPlayer}
              handleSetVideoURL={handleSetVideoUrl}
            ></VideoUploader>
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
              <div className="description-section">
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
            <Button type="Submit" id="submitter" pill onClick={createLesson}>
              Create Lesson
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreateLesson;
