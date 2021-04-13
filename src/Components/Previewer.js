import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";
import VideoPlayer from "./VideoPlayer";

const Previewer = ({ isOpen, toggler, lesson }) => {
  return (
    <div>
      <Modal open={isOpen} toggle={toggler}>
        <ModalBody>
          <div>
            <VideoPlayer url={lesson.video}></VideoPlayer>
          </div>
          <div>
            <h2>{lesson.currentTitle}</h2>
          </div>
          <div>
            <h5>Description</h5>
            <p>{lesson.currentDescription}</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Previewer;
