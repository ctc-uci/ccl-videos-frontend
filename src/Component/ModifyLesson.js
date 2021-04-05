import React, { useEffect, useState } from "react";
import FileUploader from "./FileUploader";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";
import "./ModifyLesson.css";
import { apiURL } from "../config";
const ModifyLesson = ({
  id,
  category,
  title,
  description,
  visible,
  video,
  thumbnail,
}) => {
  // Set each field w/ data passed in
  const isEdit = category === "edit";
  const [currentTitle, setTitle] = useState(title);
  const [currentDescription, setDescription] = useState(description);
  const [thumbnailURL, setThumbnail] = useState(thumbnail);
  const [videoURL, setVideo] = useState(video);
  const [showEditButtons, setShowButtons] = useState(isEdit ? false : true);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  let visibility = visible;

  // Set up flags to see if orignal data changed
  let changeFlags = {
    title: false,
    description: false,
    visibility: false,
    thumbnail: false,
    video: false,
  };

  useEffect(() => {
    if (selectedThumbnail) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedThumbnail);
    }
  }, [selectedThumbnail]);

  // Reset fields w/ data passed in
  function resetFields() {
    visibility = visible;
    setTitle(title);
    setDescription(description);
    setThumbnail(thumbnail);
    setVideo(video);
    setShowButtons(isEdit ? false : true);
    setSelectedThumbnail();
    Object.keys(changeFlags).forEach(function (key) {
      changeFlags[key] = false;
    });
    fileChange(false);
  }

  function fileChange(status, selectedFile) {
    changeFlags.thumbnail = status;
    setSelectedThumbnail(selectedFile);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    let newData = {
      title: currentTitle,
      description: currentDescription,
      videoUrl: video,
      thumbnailUrl: thumbnailURL,
      visible: visibility,
      thumbnailFile: selectedThumbnail,
    };

    console.log(newData);
    for (var keys in newData) {
      formData.append(`${keys}`, newData[keys]);
    }
    console.log("formData", formData.getAll("title"));

    if (isEdit) {
      await axios
        .patch(`${apiURL}/lessons/${id}`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("edit res", res);
          // window.location.href = `${internalURL}/displaylesson`;
        })
        .catch((error) => {
          console.log("edit error", error);
        });
    } else {
      await axios
        .post(`${apiURL}/lessons`, formData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("create res", res);
          // window.location.href = `${internalURL}/displaylesson`;
        })
        .catch((error) => {
          console.log("create error", error);
        });
    }
  }

  // Raise flag for visibility & update visibility option
  function toggleVisibility(event) {
    visibility = JSON.parse(event.target.value);
    if (visibility === visible) {
      changeFlags.visibility = false;
    } else {
      changeFlags.visibility = true;
    }
  }

  // Raise flag for either title or description
  function checkText(textbox) {
    if (textbox.id === "title-text") {
      if (textbox.value !== title) {
        changeFlags.title = true;
      } else {
        changeFlags.title = false;
      }
    } else {
      if (textbox.value !== description) {
        changeFlags.description = true;
      } else {
        changeFlags.description = false;
      }
    }
  }

  // Check if any flag is raised to dynamically change buttons
  function checkDifference() {
    setShowButtons(false);
    for (const key in changeFlags) {
      if (changeFlags[key] === true) {
        setShowButtons(true);
        break;
      }
    }
  }

  return (
    <div className="page">
      <form
        onSubmit={handleSubmit}
        onChange={isEdit ? checkDifference : null}
        id="whole-form"
      >
        <div className="topbar">
          <div id="header">
            <h1>{isEdit ? "Edit Lesson" : "Create Lesson"}</h1>
          </div>
          <div
            className="button-container"
            style={
              isEdit
                ? { justifyContent: "flex-end", display: "flex" }
                : { justifyContent: "space-between" }
            }
          >
            <button
              type="button"
              className="preview"
              id="previewButton"
              style={
                !showEditButtons && isEdit
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              PREVIEW
            </button>
            <div
              className="editButtons"
              style={
                showEditButtons ? { display: "flex" } : { display: "none" }
              }
            >
              <button
                type="reset"
                className="discard"
                id="discardButton"
                onClick={resetFields}
              >
                DISCARD EDITS
              </button>
              <button type="submit" id="saveButton">
                SAVE
              </button>
            </div>
          </div>
        </div>
        <div id="form-content">
          <div className="mid-left">
            <div className="video-section">
              <div
                id="video-player"
                style={{ background: "purple", height: "100%" }}
              >
                <VideoPlayer url={videoURL}></VideoPlayer>
              </div>
              <button type="button" id="replaceButton">
                Replace Video
              </button>
            </div>
            <div className="visibility-section">
              <label>Visibility</label>
              <br></br>
              <input
                type="radio"
                id="public-view"
                value={true}
                name="view-option"
                defaultChecked={visible === true}
                onClick={(e) => {
                  toggleVisibility(e);
                  checkDifference();
                }}
              ></input>
              <span>Public</span>
              <br></br>
              <input
                type="radio"
                id="hidden-view"
                value={false}
                name="view-option"
                defaultChecked={visible === false}
                onClick={(e) => {
                  toggleVisibility(e);
                  checkDifference();
                }}
              ></input>
              <span>Hidden</span>
            </div>
          </div>
          <div className="mid-right">
            <div className="textfields">
              <label>Title</label>
              <br></br>
              <input
                required
                type="text"
                name="title"
                id="title-text"
                value={currentTitle}
                onChange={(e) => {
                  setTitle(e.target.value);
                  checkText(e.target);
                }}
              />
            </div>
            <div className="textfields">
              <label>Description</label>
              <br></br>
              <textarea
                required
                type="text"
                name="description"
                id="description-text"
                value={currentDescription}
                onChange={(e) => {
                  setDescription(e.target.value);
                  checkText(e.target);
                }}
              />
            </div>
            <label>Thumbnail</label>
            <div className="thumbnail-section">
              <div className="thumbnail-container">
                {selectedThumbnail ? (
                  <img
                    src={imagePreview}
                    className="imagePreview"
                    alt="Saved Uploaded Thumbnail"
                  ></img>
                ) : thumbnailURL ? (
                  <img
                    src={thumbnailURL}
                    className="imagePreview"
                    alt="Uploaded Thumbnail Preview"
                  ></img>
                ) : (
                  <p className="imagePreview">No thumbnail has been uploaded</p>
                )}
              </div>
              <div className="thumbnail-container">
                <FileUploader notifyChange={fileChange}></FileUploader>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button type="button" id="delete">
            Delete lesson
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModifyLesson;
