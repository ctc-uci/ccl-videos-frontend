import React from 'react';
import PropTypes from 'prop-types';
import './lessonModule.css';

const LessonModule = ({ title, thumbnailUrl }) => {

    return (
        <div className='lessonModule'>
            <p>{thumbnailUrl}</p>
            <img className='thumbnail' src={thumbnailUrl} alt='no thumbnail'/>
            <div>{title}</div>
            <button className={"editButton"}>Edit</button>
            <button className={"newCodeButton"}>New Code</button>
        </div>
    );
}

LessonModule.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
};

export default LessonModule;