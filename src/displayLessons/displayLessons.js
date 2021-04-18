import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'shards-react';
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
    const res = await axios.get('http://localhost:8000/lessons', { withCredentials: true });
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
        if (res.data !== lessons) {
          getLessons();
        }
      })();
    }
    return () => true;
  }, []);

  const lessonList = useMemo(
    () =>
      lessons.map((lesson) => (
        <LessonModule
          title={lesson.title}
          thumbnailUrl={lesson.thumbnailUrl}
          className='lessonCard'
        />
      )),
    [lessons]
  );

  return (
    <div>
      <div className='header'>
        <h1>Lessons</h1>
        <Button>
          <FontAwesomeIcon icon={faPlus} className='plus' />
          CREATE NEW LESSON
        </Button>
      </div>
      <div className='lessons'>{isLoading ? <h1>LOADING</h1> : lessonList}</div>
    </div>
  );
};

export default DisplayLessons;
