import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const usePlayer = ({ src, controls, autoplay }) => {
  const options = {
    // fill: true,
    aspectRatio: '16:9',
    responsive: true,
    preload: 'auto',
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
  };
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls,
      autoplay,
      sources: [src],
    });
    setPlayer(vjsPlayer);
    
    return () => {
      if (player) {
        player.dispose();
      }
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (player) {
      player.src({ src });
    }
  }, [src, player]);

  return videoRef;
};

const VideoPlayer = ({ src, controls, autoplay }) => {
  const playerRef = usePlayer({ src, controls, autoplay });

  return (
    <div data-vjs-player>
      <video ref={playerRef} className='video-js' />
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  controls: true,
  autoplay: false,
};

export default VideoPlayer;
