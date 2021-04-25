import React from 'react';
import { useSelector } from 'react-redux';
import Landing from 'landing/Landing';
import CustomerVideoPlayer from 'customerVideoPlayer/CustomerVideoPlayer';

// customer video player takes in props
// url, thumbnail, title, desc, date

const CustomerPageContainer = () => {
  const { videoData } = useSelector((state) => state.videoData);
  console.log(videoData.lesson);
  const whetherCodeWasActivated = Object.keys(videoData).length;
  // url, thumbnail, title, desc, date
  const toRender = whetherCodeWasActivated ? (
    <CustomerVideoPlayer
      url={videoData.videoUrl}
      thumbnail={videoData.thumbnailUrl}
      title={videoData.title}
      desc={videoData.description}
      date={videoData.expirationDate}
    />
  ) : (
    <Landing />
  );
  return toRender;
};

export default CustomerPageContainer;
