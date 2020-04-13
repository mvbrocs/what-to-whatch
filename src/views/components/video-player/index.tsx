import React from 'react';

import { useVideoPlayer } from './use-video-player';

type VideoPlayerProps = {
  play: boolean;
  src: string;
  poster: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  delay?: number;
};

export const VideoPlayer = ({ play, src, poster, delay }: VideoPlayerProps) => {
  const { start, videoRef } = useVideoPlayer({ play, delay });

  return (
    <>
      {!start && (
        <img src={poster.src} alt={poster.alt} width={poster.width} height={poster.height} />
      )}
      <video src={src} ref={videoRef} width={poster.width} height={poster.height} />
    </>
  );
};
