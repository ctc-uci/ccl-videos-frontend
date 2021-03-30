import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../components/videoPlayer';

function VideoPage() {
    const [videoInfo, setVideoInfo] = useState({});

    const getVideoInfo = (id) => {
        // TODO: Fetch video information from backend by id
        // Currently implemented with mock data
        setVideoInfo({
            title: "Sports Highlights",
            description: "Wow go sports! I love it when they score a homeroom from half court.",
            videoID: "x80927v"
        })
    }

    useEffect(() => {
        // TODO: Replace "id" with the vide id for the page
        getVideoInfo("id")
    }, [])

    return (
        <div>
            <h1>{videoInfo.title}</h1>
            <VideoPlayer src={videoInfo.videoID}/>
            <p>{videoInfo.description}</p>
        </div>
    )
}

export default VideoPage