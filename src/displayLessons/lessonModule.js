import React from 'react';
import PropTypes from 'prop-types';

const LessonModule = (props) => {
    const {
        title, thumbnailURL,
    } = props;

    return (
        <div className='lessonModule'>
            <img className='thumbnail' src={thumbnailURL} alt='no thumbnail'/>
            <div>{title}</div>
        </div>
    );
}

LessonModule.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnailURL: PropTypes.string.isRequired,
};

export default LessonModule;