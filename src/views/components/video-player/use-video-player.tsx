import { useState, useEffect } from 'react';

type UseVideoPlayerArgs = {
  play: boolean;
  delay?: number;
  videoElement: null | HTMLVideoElement;
};

export const useVideoPlayer = ({ play, delay, videoElement }: UseVideoPlayerArgs) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (delay === undefined) {
      setStart(play);
      return;
    }

    const timeoutID = setTimeout(() => setStart(true), delay);

    if (!play) {
      setStart(false);
      clearTimeout(timeoutID);
    }

    return () => clearTimeout(timeoutID);
  }, [play, delay]);

  useEffect(() => {
    if (start && videoElement) {
      videoElement.currentTime = 0;
      videoElement.play();
    } else if (videoElement) {
      videoElement.pause();
    }
  }, [start, videoElement]);

  return { start };
};
