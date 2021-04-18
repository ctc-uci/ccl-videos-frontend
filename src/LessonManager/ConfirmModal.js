import React from "react";
import axios from "axios";
import { apiURL, bucket } from "../config";

import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
const ConfirmModal = ({ id, extension, isOpen, toggler }) => {
  async function deleteLesson() {
    try {
      const res = await axios.delete(`${apiURL}/s3/${id}`, {
        data: { extension: extension, bucket: bucket },
      });
      const mongoRes = await axios.delete(`${apiURL}/lessons/${id}`);
      //redirect();
      console.log(("delete res", { res, mongoRes }));
    } catch (err) {
      console.log("delete error", err);
    }
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
