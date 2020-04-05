import { useState, useEffect, useRef } from 'react';

type UseVideoPlayerArgs = {
  play: boolean;
  delay?: number;
};

export const useVideoPlayer = ({ play, delay }: UseVideoPlayerArgs) => {
  const videoRef = useRef<HTMLVideoElement>(null);
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
    const videoElement = videoRef.current;

    if (start && videoElement) {
      // https://github.com/facebook/react/issues/10389#
      videoElement.muted = true;
      videoElement.currentTime = 0;
      videoElement.play();
    } else if (videoElement) {
      videoElement.pause();
    }
  }, [start]);

  return { start, videoRef };
};
