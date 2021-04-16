import React, { useState } from "react";
import axios from "axios";
import { apiURL, bucket } from "../config";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import VideoPlayer from "../common/VideoPlayer";
import VideoDropzone from "./VideoDropzone";
import ConfirmModal from "./ConfirmModal";
import vid from "../video.mp4";
import "./EditLesson.css";

const EditLesson = ({ id, title, description, video }) => {
  const [videoTitle, setVideoTitle] = useState(title);
  const [videoDescription, setVideoDecription] = useState(description);
  const [videoURL, setVideoURL] = useState(video);
  const [showConfirmation, setShowConfirmation] = useState(false);
  let history = useHistory();

  function redirect() {
    history.goBack();
  }

  function onDelete() {
    setShowConfirmation(true);
  }

  async function onSubmit() {
    const updatedForm = {
      title: videoTitle,
      description: videoDescription,
      videoUrl: video,
    };

    // const awsRes = await axios.post(
    //   `${apiURL}/upload/`,
    //   {
    //     contentType: "video/mp4",
    //     bucket: bucket,
    //   },
    //   {
    //     withCredentials: true,
    //   }
    // );

    // console.log(awsRes.data.uploadURL);

    // const uploadRes = await axios.post(`${awsRes.data.uploadURL}`, vid, {
    //   withCredentials: true,
    // });
    // console.log(uploadRes);

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
            <Button theme="danger" onClick={onDelete}>
              Delete Lesson
            </Button>
          </div>
          <div className="button-group">
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
          isOpen={showConfirmation}
          toggler={setShowConfirmation}
        ></ConfirmModal>
      </Form>
    </div>
  );
};

export default EditLesson;
