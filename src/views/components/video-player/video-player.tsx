import React, { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  play: boolean;
  src: string;
};

export const VideoPlayer = ({ play, src }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef?.current;

    if (play && videoElement) {
      videoElement.play();
    } else if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  }, [play]);

  return <video ref={videoRef} src={src} muted />;
};
