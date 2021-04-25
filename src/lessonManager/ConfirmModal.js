import React from "react";
import axios from "axios";
import { Button, Modal, ModalBody } from "shards-react";
import { apiURL, bucket } from "config";
import "./ConfirmModal.css";

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
    <Modal open={isOpen} toggle={toggler}>
      <ModalBody>
        <span className="modal-text">
          Are you sure you want to delete this lesson?
        </span>
        <div className="modal-buttons">
          <Button
            outline
            pill
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
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ConfirmModal;
