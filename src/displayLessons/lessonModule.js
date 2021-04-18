import React from 'react';
import PropTypes from 'prop-types';
import './lessonModule.css';

const LessonModule = ({ title, thumbnailUrl }) => {

    return (
        <div className='lessonModule'>
            <img className='thumbnail' src={thumbnailUrl} alt='no thumbnail'/>
            <div className={'infoContainer'}>
                <h1>{title}</h1>
                <button className={"editButton"}>Edit</button>
                <button className={"newCodeButton"}>New Code</button>
            </div>
        </div>
    );
}

// next steps: put buttons into own container, then that contianer into one with title to format
// should look like thumbnail next to large container with title and buttons inside

LessonModule.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
};

export default LessonModule;