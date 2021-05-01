import React, { useState } from "react";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import { apiURL, bucket } from "config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import VideoPlayer from "common/VideoPlayer";
import VideoDropzone from "lessonManager/VideoDropzone";
import "lessonManager/CreateLesson.css";

const CreateLesson = () => {
  const [videoTitle, setVideoTitle] = useState(null);
  const [videoDescription, setVideoDecription] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  function notifyUpload(file) {
    setVideoFile(file[0]);
    setIsVideo(true);
    let videoFileURL = URL.createObjectURL(file[0]);
    setVideoURL(videoFileURL);
    console.log("videoFileURL", videoFileURL);
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
          <h1 className="lesson-title">Create New Lesson</h1>
          <Button
            id="previewer"
            href={`/previewLesson/${videoTitle}/${videoDescription}/${encodeURIComponent(
              videoURL
            )}`}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faExternalLinkAlt}
              className="external-link-alt"
            />
            Preview Lesson
          </Button>
        </div>
        <div className="mid-section">
          <div className="mid-left">
            <div className={videoURL ? "vid-container" : "hidden"}>
              <VideoPlayer url={videoURL}></VideoPlayer>
            </div>
            <VideoDropzone
              notifyUpload={notifyUpload}
              isVideo={isVideo}
            ></VideoDropzone>
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
            <Button
              type="Submit"
              id="submitter"
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
