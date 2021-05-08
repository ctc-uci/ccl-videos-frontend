import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import VideoPlayer from 'common/VideoPlayer';
import { useHistory } from 'react-router-dom';
import './lessonModule.css';

const LessonModule = ({ id, title, videoUrl }) => {
  const history = useHistory();

  const redirectToEdit = (id) => {
    history.push(`/lessons/edit/${id}`);
  };

  const redirectToCodes = () => {
    history.push('/codes');
  };

  return (
    <div className='lesson-module-container'>
      <Card className='lessonModule'>
        <VideoPlayer src={videoUrl} controls={false}></VideoPlayer>
        <CardBody>
          <CardTitle className='lesson-videoTitle' title={title}>
            {title}
          </CardTitle>
          <div className='lesson-module-button-container'>
            <Button
              className='lesson-module-button edit-button'
              onClick={() => {
                redirectToEdit(id);
              }}>
              <FontAwesomeIcon icon={faEdit} className='lesson-icon' />
              {' Edit'}
            </Button>
            <Button className='lesson-module-button' onClick={redirectToCodes}>
              <FontAwesomeIcon icon={faKey} className='lesson-icon' />
              {' New Code'}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

LessonModule.propTypes = {
  title: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default LessonModule;
