import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './lessonModule.css';

const LessonModule = ({ title, thumbnailUrl }) => {
  return (
    <Card className='lessonModule'>
      <CardImg className='thumbnail' top src={thumbnailUrl}></CardImg>
      <CardBody>
        <CardTitle className='lesson-videoTitle' title={title}>{title}</CardTitle>
        <Button className='lesson-module-button'>
          <FontAwesomeIcon icon={faEdit} className='lesson-icon' />
          {' Edit'}
        </Button>
        <Button className='lesson-module-button'>
          <FontAwesomeIcon icon={faKey} className='lesson-icon' />
          {' New Code'}
        </Button>
      </CardBody>
    </Card>
  );
};

// TODO: put buttons into own container, then that contianer into one with title to format
// should look like thumbnail next to large container with title and buttons inside

LessonModule.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailURL: PropTypes.string.isRequired,
};

export default LessonModule;
