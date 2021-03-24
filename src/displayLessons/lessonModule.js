import React from 'react';

const lessonModule = (props) => {
    const {
        title, thumbnailURL,
    } = props;

    return (
        <div className='lessonModule'>
            <img className='thumbnail' src={thumbnailURL} />
            <div>{title}</div>
        </div>
    );
}

export default lessonModule;