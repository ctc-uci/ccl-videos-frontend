import React, { useState, useEffect } from 'react';
import LessonModule from './lessonModule'
import axios from 'axios';

const DisplayLessons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [lessons, setLessons] = useState(JSON.parse(localStorage.getItem('lessons')) || []);

    const getLessons = async () => {
        const res = await axios.get('localhost:8000/lessons', { withCredentials: true });
        localStorage.setItem('lessons', JSON.stringify(res.data));
        setLessons(res.data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (lessons.length === 0) {
            getLessons();
        } else {
            setIsLoading(false);
            const res = axios.get('localhost:8000/lessons', { withCredentials: true });
            if (res.data !== lessons) {
                getLessons();
            }
        }
        return () => (true);
    }, [lessons]);

    const lessonList = () => lessons.map(
        (temp) => (
            <LessonModule
              title={temp.title}
              thumbnailURL={temp.thumbnailURL}
            />
        )
    );

    return (
        <div>
            <div>Lessons</div>
            <button>CREATE NEW LESSON</button>
            {isLoading ? <h1>LOADING</h1> : lessonList}
        </div>
    );
};


export default DisplayLessons;