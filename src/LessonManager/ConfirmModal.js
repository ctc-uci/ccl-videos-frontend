import React, { useState } from "react";
import axios from "axios";
import { apiURL } from "../config";

import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
const ConfirmModal = ({ id, isOpen, toggler }) => {
  function deleteLesson() {
    // await axios
    //   .delete(`${apiURL}/lessons/${id}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log("delete res", res);
    //     // redirect();
    //   })
    //   .catch((error) => {
    //     console.log("delete error", error);
    //   });
  }
  return (
    <div>
      <Modal open={isOpen} toggle={toggler}>
        <ModalHeader>Header</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this lesson?</p>
          <Button
            outline
            pill
            theme="dark"
            onClick={(e) => {
              e.preventDefault();
              toggler(false);
            }}
          >
            Cancel
          </Button>
          <Button pill onClick={deleteLesson}>
            Yes, Delete
          </Button>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
