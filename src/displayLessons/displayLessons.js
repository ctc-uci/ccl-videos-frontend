import React, { useState, useEffect, useMemo } from 'react';
import { Button, CardColumns, Col, Container, Row } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LessonModule from './lessonModule';
import axios from 'axios';
import './displayLessons.css';

// TODO: fix urls to come from config
const DisplayLessons = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [lessons, setLessons] = useState([]);

  const getLessons = async () => {
    const res = await axios.get("http://localhost:8000/lessons", {
      withCredentials: true,
    });
    console.log(res);
    setLessons(res.data);
    setIsLoading(false);
  };

  // TODO: this code block could definitely be cleaned up. Looks super messy
  useEffect(() => {
    if (lessons.length === 0) {
      getLessons();
    } else {
      setIsLoading(false);
      (async () => {
        const res = await axios.get('http://localhost:8000/lessons', { withCredentials: true });
        if (res.data.length !== lessons.length) {
          setLessons(res.data);
        }
      })();
    }
    return () => true;
  }, [lessons]);

  const lessonList = useMemo(
    () =>
      lessons.map((lesson) => (
        <LessonModule
          key={lesson.lessonId}
          title={lesson.title}
          thumbnailUrl={lesson.thumbnailUrl}
          className="lessonCard"
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
          <Button>
            <FontAwesomeIcon icon={faPlus} className='plus' />
            CREATE NEW LESSON
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='lessons'>{isLoading ? <h1>LOADING</h1> : <CardColumns className="lessons-card-columns">{lessonList}</CardColumns>}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayLessons;
