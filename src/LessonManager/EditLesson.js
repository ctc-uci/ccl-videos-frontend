import React, { useState } from "react";
import { apiURL, bucket } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "lessonManager/common/VideoPlayer";
import ConfirmModal from "lessonManager/ConfirmModal";
import VideoDropzone from "lessonManager/VideoDropzone";
import "lessonManager/EditLesson.css";

const EditLesson = ({ id, title, description, video }) => {
  const [videoTitle, setVideoTitle] = useState(title);
  const [videoDescription, setVideoDecription] = useState(description);
  const [videoURL, setVideoURL] = useState(video);
  const [videoFile, setVideoFile] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  function onDelete() {
    setShowConfirmation(true);
  }

  function notifyUpload(file) {
    setVideoFile(file[0]);
    let videoFileURL = URL.createObjectURL(file[0]);
    setVideoURL(videoFileURL);
    console.log("vidFile", videoFile);
  }

  const getUploadURL = async () => {
    try {
      let uploadConfig = { ID: id, contentType: "video/mp4", bucket: bucket };
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
      var url = res.config.url.split("?")[0];
      return url;
    } catch (err) {
      console.log(err);
    }
  };

  async function onSubmit() {
    let vidLink = videoURL;
    if (videoFile) {
      try {
        const uploadUrl = await getUploadURL();
        vidLink = await uploadVideo(uploadUrl);
        console.log("vidLinK", vidLink);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      let newLesson = {
        lessonId: id,
        title: videoTitle,
        description: videoDescription,
        videoUrl: vidLink,
      };
      console.log("newLesson", newLesson);
      await axios.patch(`${apiURL}/lessons/${id}`, newLesson, {
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
          <h1 className="title">Edit Lesson</h1>
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
            <VideoPlayer url={videoURL}></VideoPlayer>
            <VideoDropzone notifyUpload={notifyUpload}></VideoDropzone>
            {/* <Button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Replace Video
            </Button> */}
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
          <div className="delete">
            {/* <Button theme="danger" onClick={onDelete}>
              Delete Lesson
            </Button> */}
          </div>
          <div className="button-group">
            <Button theme="danger" onClick={onDelete}>
              Delete Lesson
            </Button>
            <Button outline pill onClick={redirect}>
              Cancel
            </Button>
            <Button
              pill
              type="Submit"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              Save Edits
            </Button>
          </div>
        </div>
        <ConfirmModal
          id={id}
          extension={"mp4"}
          isOpen={showConfirmation}
          toggler={setShowConfirmation}
        ></ConfirmModal>
      </Form>
    </div>
  );
};

export default EditLesson;
