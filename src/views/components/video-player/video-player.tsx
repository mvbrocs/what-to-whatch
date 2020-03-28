import React, { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  play: boolean;
  src: string;
  poster: string;
};

const VIDEO_MS_TIMEOUT = 1000;

export const VideoPlayer = ({ play, src, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef?.current;

    if (play && videoElement) {
      setTimeout(() => videoElement.play(), VIDEO_MS_TIMEOUT);
    } else if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }, [play]);

  return <video ref={videoRef} poster={poster} src={src} muted />;
};
