import React, { useState } from 'react';
import { FormInput, Button, Modal, ModalHeader, ModalBody } from 'shards-react';
import moment from 'moment';
import './UnlockLessonModal.css';

const UnlockLessonModal = ({ lessonTitle, expirationDate, open, toggle, activationHandler }) => {
  const [email, setEmail] = useState(undefined);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <Modal open={open} toggle={toggle}>
        <ModalHeader titleClass='modal-title' className='modal-header'>
          Unlock Lesson
          <div className='close-btn'>
            <button type='button' className='close' aria-label='Close' onClick={toggle}>
              <span className='close-btn' aria-hidden='true'>
                &times;
              </span>
            </button>
          </div>
        </ModalHeader>
        <ModalBody>
          <p className='modal-body'>
            You are about to activate "{lessonTitle}"<br></br>
            <br></br>
            Once you activate this lesson, it will expire on
            <br></br>
            <span className='date-span'>
              {`${moment(expirationDate).utcOffset(-480).format('MM/DD, YYYY, hh:mm A')} PST`} 
            </span>
            <br></br>
            <br></br>
            <div className='email-text'>Enter a parent's email to receive reminders!</div>
            <FormInput placeholder='Email Address' value={email} onChange={handleInputChange} />
          </p>
          <div className='modal-button'>
            <Button theme='success' onClick={activationHandler} disabled={!email}>
              Activate Now
            </Button>
          </div>
          <div className='activate-text'>
            <button onClick={toggle}>Activate Lesson Later</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UnlockLessonModal;
