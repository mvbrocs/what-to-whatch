import { useRef } from 'react';

export const useVideoPlayerFullscreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return { videoRef };
};
