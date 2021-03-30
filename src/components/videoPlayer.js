import React from 'react';
import Dailymotion from 'react-dailymotion';

function VideoPlayer(props) {
    const {src} = props
    return (
        <Dailymotion
            video={src}
            uiTheme="light"
            autoplay
        />
    )
}

export default VideoPlayer