import React from 'react';
import config from 'config';
import axios from 'axios';
import { createAlert } from 'common/AlertBannerSlice';
import { setVideoData } from 'landing/CustomerPageContainerSlice';
import { useDispatch } from 'react-redux';
import { InputGroup, InputGroupAddon, FormInput, Button } from 'shards-react';
import { useState } from 'react';
import UnlockLessonModal from 'common/UnlockLessonModal';

const CodeUnlock = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState(undefined);
  const [lessonTitle, setLessonTitle] = useState(undefined);
  const [lessonDescription, setLessonDescription] = useState(undefined);
  const [lessonVideoUrl, setLessonVideoUrl] = useState(undefined);
  const [lessonThumbnailUrl, setLessonThumbnailUrl] = useState(undefined);
  const [lessonExpirationDate, setLessonExpirationDate] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);

  const handleInputChange = (event) => {
    const upper = event.target.value.toUpperCase();
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
        const { lesson, expirationDate, result } = response.data;
        const { description, thumbnailUrl, videoUrl, title } = lesson;
        console.log(lesson);
        console.log(description);
        setLessonDescription(description);
        setLessonExpirationDate(expirationDate);
        setLessonThumbnailUrl(thumbnailUrl);
        setLessonTitle(title);
        setLessonVideoUrl(videoUrl);

        if (isFirstTimeCustomer(result)) {
          toggleModal();
        } else {
          processActivation();
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response.status && err.response.status === 401) {
        displayDynamicErrorAlert(err.response.data.error);
      } else {
        displayGenericErrorAlert();
      }
    }
  };

  const isFirstTimeCustomer = (result) => {
    return result === 'NOW_ACTIVE';
  };

  const processActivation = () => {
    // send email
    // render new page
    // close modal

    // url, thumbnail, title, desc, date
    console.log('before dispatch');
    console.log(lessonVideoUrl);
    console.log(lessonTitle);
    console.log(lessonThumbnailUrl);
    console.log(lessonDescription);
    console.log(lessonExpirationDate);

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
    processActivation();
  };

  return (
    <>
      <Button onClick={toggleModal}>togl</Button>
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
          <Button theme='success' onClick={unlockLesson}>
            Start
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
};

export default CodeUnlock;
