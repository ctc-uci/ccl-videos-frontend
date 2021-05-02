import React from 'react';
import { useSelector } from 'react-redux';
import Landing from 'landing/Landing';
import CustomerVideoPlayer from 'customerVideoPlayer/CustomerVideoPlayer';

const CustomerPageContainer = () => {
  const { videoData } = useSelector((state) => state.videoData);
  console.log(videoData);
  const whetherCodeWasActivated = Object.keys(videoData).length;
  const toRender = whetherCodeWasActivated ? (
    <CustomerVideoPlayer
      url={videoData.url}
      thumbnail={videoData.thumbnail}
      title={videoData.title}
      desc={videoData.desc}
      date={videoData.date}
    />
  ) : (
    <Landing />
  );
  return toRender;
};

export default CustomerPageContainer;
