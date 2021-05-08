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
    console.log('called');
    console.log([lessonTitle, lessonDescription, lessonVideoUrl, lessonThumbnailUrl]);
    if (lessonTitle && lessonDescription && lessonVideoUrl) {
      console.log('states have been set');
      processActivation();
    }
    // eslint-disable-next-line
  }, [lessonTitle, lessonDescription, lessonVideoUrl, lessonThumbnailUrl]);

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
        const { title, predicatedExpirationDate } = response.data;
        if (isCodeExpired(status)) {
          displayDynamicErrorAlert('Code is expired!');
        } else if (isCodeInactive(status)) {
          setLessonExpirationDate(predicatedExpirationDate);
          setLessonTitle(title);
          toggleModal();
        } else if (isCodeActive(status)) {
          console.log('code active');
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
  
  const unlockLesson = async () => {
    try {
      const response = await axios.post(`${config.apiURL}/codes/${code}/redeem`);
      if (response.status === 200) {
        console.log(response);
        const { lesson, expirationDate } = response.data;
        const { description, thumbnailUrl, videoUrl, title } = lesson;
        setLessonDescription(description);
        setLessonExpirationDate(expirationDate);
        setLessonThumbnailUrl(thumbnailUrl);
        setLessonTitle(title);
        setLessonVideoUrl(videoUrl);
        console.log('after state sets called')
      }
    } catch (err) {
      if (err.response.status && err.response.status === 401) {
        displayDynamicErrorAlert(err.response.data.error);
      } else {
        displayGenericErrorAlert();
      }
    }
  };

  const sendUnlockLessonConfirmationEmail = async (email) => {
    try {
      await axios.post(
        `${config.apiURL}/codes/${code}/notifyByEmail`,
        { email: email }
      );
    } catch (err) {
      if (err.response.status && err.response.status === 401) {
        displayDynamicErrorAlert(err.response.data.error);
      } else {
        displayGenericErrorAlert();
      }
    }
  };

  const processActivation = () => {
    console.log('processing activation')
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

  const activationHandler = async (email) => {
    toggleModal();
    await unlockLesson();
    await sendUnlockLessonConfirmationEmail(email);
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
