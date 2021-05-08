import React, { useState, useEffect, useMemo } from 'react';
import { Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import LessonModule from 'displayLessons/lessonModule';
import Spinner from 'common/Spinner';
import axios from 'axios';
import config from 'config';
import 'displayLessons/displayLessons.css';

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
    <div className="lessons-container">
      <div className='lessons-header'>
        <h1>Lessons</h1>
        <Button onClick={redirectToCreate}>
          <FontAwesomeIcon icon={faPlus} className='plus' />
          Create New Lesson
        </Button>
      </div>
      <div className='lessons'>
        {isLoading ? <Spinner /> : <div className='lessons-card-columns'>{lessonList}</div>}
      </div>
    </div>
  );
};

export default DisplayLessons;
