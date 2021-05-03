import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalBody } from 'shards-react';
import { apiURL, bucket } from 'config';
import { useDispatch } from 'react-redux';
import './ConfirmModal.css';
import { createAlert } from 'common/AlertBannerSlice';
import { useHistory } from 'react-router';

// TODO: Show alert banners for success/fail

const ConfirmModal = ({ id, extension, isOpen, toggler }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteLesson = async () => {
    try {
      const mongoRes = await axios.delete(`${apiURL}/lessons/${id}`);

      const res = await axios.delete(`${apiURL}/upload/${id}`, {
        data: { extension: extension, bucket: bucket },
      });
      if (res.status === 200 && mongoRes.status === 200) {
        dispatch(createAlert({ theme: 'success', message: 'Lesson successfully deleted!'}))
      }
      history.push('/lessons');
    } catch (err) {
      dispatch(createAlert({ theme: 'danger', message: err}))
    }
  };

  return (
    <Modal open={isOpen} toggle={toggler}>
      <ModalBody>
        <span className='modal-text'>Are you sure you want to delete this lesson?</span>
        <div className='modal-buttons'>
          <Button
            outline
            pill
            onClick={(e) => {
              e.preventDefault();
              toggler(false);
            }}>
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
