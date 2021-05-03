import React, { useState, useEffect, useMemo } from 'react';
import { Button, CardColumns, Col, Container, Row } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import LessonModule from 'displayLessons/lessonModule';
import Spinner from 'common/Spinner';
import axios from 'axios';
import config from 'config';
import 'displayLessons/displayLessons.css';

// TODO: fix urls to come from config / cosntants
const DisplayLessons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState([]);
  const history = useHistory();

  const redirectToCreate = () => {
    history.push('/lessons/create');
  };

  const getLessons = async () => {
    const res = await axios.get(`${config.apiURL}/lessons`, {
      withCredentials: true,
    });
    setLessons(res.data);
    setIsLoading(false);
  };

  // TODO: this code block could definitely be cleaned up. Looks super messy
  useEffect(() => {
    if (lessons.length === 0) {
      getLessons();
    }
  }, [lessons]);

  const lessonList = useMemo(
    () =>
      lessons.map((lesson) => (
        <LessonModule
          key={lesson.lessonId}
          id={lesson.lessonId}
          title={lesson.title}
          videoUrl={lesson.videoUrl}
          className='lessonCard'
        />
      )),
    [lessons]
  );

  return (
    <Container>
      <Row className='lessons-header'>
        <Col>
          <h1>Lessons</h1>
        </Col>
        <Col>
          <Button onClick={redirectToCreate}>
            <FontAwesomeIcon icon={faPlus} className='plus' />
            Create New Lesson
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='lessons'>
            {isLoading ? (
              <Spinner />
            ) : (
              <CardColumns className='lessons-card-columns'>{lessonList}</CardColumns>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayLessons;
