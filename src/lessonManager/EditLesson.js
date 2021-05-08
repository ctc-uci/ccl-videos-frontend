import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, FormInput, FormGroup, FormTextarea, Button } from "shards-react";
import { useHistory } from "react-router-dom";
import { createAlert } from "common/AlertBannerSlice";
import config from "config";
import axios from "axios";
import VideoPlayer from "common/VideoPlayer";
import ConfirmModal from "lessonManager/ConfirmModal";
import VideoUploader from "lessonManager/VideoUploader";
import "lessonManager/EditLesson.css";
import Previewer from "./Previewer";

const EditLesson = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(true);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const getLesson = async () => {
    const res = await axios.get(`${config.apiURL}/lessons/${id}`);
    const { title, description, videoUrl } = res.data;
    setTitle(title);
    setDescription(description);
    setVideoURL(videoUrl);
  };

  useEffect(() => {
    getLesson();
    // eslint-disable-next-line
  }, []);

  const onDelete = () => {
    setShowConfirmation(true);
  };

  const handleSetVideoUrl = (videoURL) => {
    setVideoURL(videoURL);
  };

  const renderPlayer = () => {
    setPlayerVisible(true);
  };

  const hidePlayer = () => {
    setPlayerVisible(false);
  };

  const redirectToLessons = () => {
    history.push("/lessons");
  };

  const saveEdits = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${config.apiURL}/lessons/${id}`, {
        title,
        description,
        videoUrl: videoURL,
      });
      if (res.status === 200) {
        dispatch(
          createAlert({
            theme: "success",
            message: `Lesson ${title} updated successfully.`,
          })
        );
      }
      redirectToLessons();
    } catch (err) {
      dispatch(createAlert({ theme: "danger", message: `Error: ${err}` }));
    }
  };

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return isPreviewMode ? (
    <div className="whole-page">
      <Previewer
        title={title}
        description={description}
        videoUrl={videoURL}
        closePreviewer={togglePreview}
      ></Previewer>
    </div>
  ) : (
    <div>
      <Form className="whole-page">
        <div className="header-section">
          <h1 className="lesson-title">Edit Lesson</h1>
          <Button onClick={togglePreview}>Preview Lesson</Button>
        </div>
        <div className="mid-section">
          <div className="mid-left">
            {playerVisible && videoURL ? (
              <VideoPlayer src={videoURL}></VideoPlayer>
            ) : null}
            <VideoUploader
              handleOnPrepare={hidePlayer}
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
                  value={title}
                  id="title"
                  placeholder="Enter Title Here"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div className="description-sectio>">
                <label htmlFor="description">Description</label>
                <FormTextarea
                  required
                  value={description}
                  id="description"
                  placeholder="Enter Description Here"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </FormGroup>
          </div>
        </div>
        <div className="bottom">
          <div className="delete">
            <Button id="deleter" theme="danger" onClick={onDelete}>
              Delete Lesson
            </Button>
          </div>
          <div className="button-group">
            <Button outline pill onClick={redirectToLessons}>
              Cancel
            </Button>
            <Button pill id="submitter" type="Submit" onClick={saveEdits}>
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
