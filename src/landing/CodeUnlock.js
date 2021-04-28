import React, { useState, useEffect } from 'react';
import { createAlert } from 'common/AlertBannerSlice';
import { setVideoData } from 'landing/CustomerPageContainerSlice';
import { useDispatch } from 'react-redux';
import { InputGroup, InputGroupAddon, FormInput, Button } from 'shards-react';
import { ACTIVE, INACTIVE, EXPIRED } from 'consts';
import config from 'config';
import axios from 'axios';
import UnlockLessonModal from 'common/UnlockLessonModal';

const isCodeActive = (code) => {
  return code === ACTIVE;
};

const isCodeExpired = (code) => {
  return code === EXPIRED;
};

const isCodeInactive = (code) => {
  return code === INACTIVE;
};

const CodeUnlock = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(undefined);
  const [lessonTitle, setLessonTitle] = useState(undefined);
  const [lessonDescription, setLessonDescription] = useState(undefined);
  const [lessonVideoUrl, setLessonVideoUrl] = useState(undefined);
  const [lessonThumbnailUrl, setLessonThumbnailUrl] = useState(undefined);
  const [lessonExpirationDate, setLessonExpirationDate] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (lessonTitle && lessonDescription && lessonVideoUrl && lessonThumbnailUrl) {
      processActivation();
    }
  });

  const handleInputChange = (event) => {
    const upper = event.target.value.toUpperCase();
    setCode(upper);
  };

  //#region HOOKS
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
  //#endregion

  const checkCode = async () => {
    try {
      const response = await axios.get(`${config.apiURL}/codes/${code}`);
      if (response.status === 200) {
        const { status } = response.data.code;
        if (isCodeExpired(status)) {
          displayDynamicErrorAlert('Code is expired!');
        } else if (isCodeInactive(status)) {
          toggleModal();
        } else if (isCodeActive(status)) {
          unlockLesson();
        }
      }
    } catch (err) {
      if (err.response.status && err.response.status === 401) {
        displayDynamicErrorAlert(err.response.data.error);
      } else {
        displayGenericErrorAlert();
      }
    }
  };
  
  // TODO: Update code field to include inputted email
  const unlockLesson = async () => {
    try {
      const response = await axios.post(`${config.apiURL}/codes/${code}/redeem`);
      if (response.status === 200) {
        const { lesson, expirationDate } = response.data;
        const { description, thumbnailUrl, videoUrl, title } = lesson;
        setLessonDescription(description);
        setLessonExpirationDate(expirationDate);
        setLessonThumbnailUrl(thumbnailUrl);
        setLessonTitle(title);
        setLessonVideoUrl(videoUrl);
      }
    } catch (err) {
      if (err.response.status && err.response.status === 401) {
        displayDynamicErrorAlert(err.response.data.error);
      } else {
        displayGenericErrorAlert();
      }
    }
  };

  const processActivation = () => {
    dispatch(
      setVideoData({
        url: lessonVideoUrl,
        title: lessonTitle,
        thumbnail: lessonThumbnailUrl,
        desc: lessonDescription,
        date: lessonExpirationDate,
      })
    );
    displaySuccessAlert();
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const activationHandler = () => {
    toggleModal();
    unlockLesson();
  };

  return (
    <>
      <UnlockLessonModal
        lessonTitle={lessonTitle}
        expirationDate={lessonExpirationDate}
        open={openModal}
        toggle={toggleModal}
        activationHandler={activationHandler}
      />
      <InputGroup className='landing-header-input'>
        <FormInput placeholder='ABCDEFGH' value={code} onChange={handleInputChange} />
        <InputGroupAddon type='append'>
          <Button theme='success' onClick={checkCode}>
            Start
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
};

export default CodeUnlock;