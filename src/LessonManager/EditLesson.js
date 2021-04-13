import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../config";
import {
  Form,
  FormInput,
  FormGroup,
  FormTextarea,
  FormRadio,
  Button,
} from "shards-react";

const EditLesson = ({ id, title, description, visible, video, thumbnail }) => {
  const [currentTitle, setTitle] = useState(title);
  const [currentDescription, setDescription] = useState(description);
  // const [thumbnailURL, setThumbnail] = useState(thumbnail);
  // const [videoURL, setVideo] = useState(video);
  const [selectedVisibility, setSelectedVisibility] = useState(visible);

  //      Title, description, visibility, videourl

  function redirect() {
    window.location.href = "displayLesson";
  }

  async function onSubmit() {
    const updatedForm = {
      title: currentTitle,
      description: currentDescription,
      videoUrl: video,
      // thumbnailUrl: thumbnailURL,
      visible: selectedVisibility,
    };
    console.log(updatedForm);
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
      <Form>
        <FormGroup>
          <label htmlFor="#title">Title</label>
          <FormInput
            required
            value={currentTitle}
            id="#title"
            placeholder="Enter a title for video"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#description">Description</label>
          <FormTextarea
            value={currentDescription}
            id="#description"
            placeholder="Enter a description for video"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <p className="mb-3">Visibility</p>
          <FormRadio
            name="view-option"
            checked={selectedVisibility === true}
            onChange={() => {
              setSelectedVisibility(true);
            }}
          >
            Published
          </FormRadio>
          <FormRadio
            name="view-option"
            checked={selectedVisibility === false}
            onChange={() => {
              setSelectedVisibility(false);
            }}
          >
            Hidden
          </FormRadio>
        </FormGroup>
        <FormGroup>
          <Button outline pill theme="secondary" onClick={redirect}>
            Cancel
          </Button>
          <Button pill onClick={onSubmit}>
            Save Edits
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default EditLesson;
