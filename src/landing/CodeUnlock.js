import React from 'react';
import config from 'config';
import axios from 'axios';
import { createAlert } from 'common/AlertBannerSlice';
import { useDispatch } from 'react-redux';
import { InputGroup, InputGroupAddon, FormInput, Button } from 'shards-react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import UnlockLessonModal from 'common/UnlockLessonModal';

const CodeUnlock = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [code, setCode] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = (event) => {
    const upper = event.target.value.toUpperCase();
    console.log(upper);
    setCode(upper);
  };

  // TODO: abstract these into re-usable hooks
  const displaySuccessAlert = () => {
    dispatch(
      createAlert({
        message:
          'Enjoy the lesson! You can use your code to watch this video as many times as you want until it expires.',
        theme: 'success',
      })
    );
  };

  const displayDynamicErrorAlert = (message) => {
    dispatch(createAlert({ message, theme: 'danger' }));
  };

  const displayGenericErrorAlert = () => {
    dispatch(
      createAlert({
        message:
          'Oops! Something went wrong. Please try it again and if there is still a problem, contact us at (714) 352-4380',
        theme: 'danger',
      })
    );
  };

  const unlockLesson = async () => {
    try {
      const response = await axios.post(`${config.apiURL}/codes/${code}/redeem`);
      if (response.status === 200) {
        displaySuccessAlert();
      }
    } catch (err) {
      if (err.response.status === 401) {
        displayDynamicErrorAlert(err.response.data.error);
      } else {
        displayGenericErrorAlert();
      }
    }
  };

  // how to render a video based off a code?
  // 1. store code in local storage
  // 2. store code in query param, on load of the page, it takes the query param and checks the server to see if that code is valid.
  // 3. user session?

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
    <Button onClick={toggleModal}>togl</Button>
      <UnlockLessonModal open={openModal} toggle={toggleModal} />
      <InputGroup className='landing-header-input'>
        <FormInput placeholder='ABCDEFGH' value={code} onChange={handleInputChange} />
        <InputGroupAddon type='append'>
          <Button theme='success' onClick={unlockLesson}>
            Start
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
};

export default CodeUnlock;
