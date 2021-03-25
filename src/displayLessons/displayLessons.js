import React, { useState, useEffect, useMemo } from 'react';
import LessonModule from './lessonModule'
import axios from 'axios';

const DisplayLessons = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [lessons, setLessons] = useState([]);

    const getLessons = async () => {
        const res = await axios.get('http://localhost:8000/lessons', { withCredentials: true });
        console.log(res);
        setLessons(res.data);
        setIsLoading(false);
    };

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
        return () => (true);
    }, []);

    const lessonList = useMemo(() => lessons.map(
        (lesson) => (
            <LessonModule
              title={lesson.title}
              thumbnailURL={lesson.thumbnailUrl}
            />
        )
    ), [lessons]);

    return (
        <div>
            <div>Lessons</div>
            <button>CREATE NEW LESSON</button>
            {isLoading ? <h1>LOADING</h1> : lessonList}
        </div>
    );
};


export default DisplayLessons;