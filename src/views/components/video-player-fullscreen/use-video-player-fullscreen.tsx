import { useRef, useState, useEffect } from 'react';
import { calcProgress } from './calc-progress';

export const useVideoPlayerFullscreen = (visible: boolean, onClose: () => void) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const playHandler = async () => {
    const videoElement = videoRef?.current;

    if (videoElement) {
      await videoElement.play();
      setPlay(true);

      if (!duration) setDuration(videoElement.duration);
    }
  };

  const pauseHandler = () => {
    videoRef?.current?.pause();
    setPlay(false);
  };

  const progressHandler = () => {
    const videoElement = videoRef.current;

    if (videoElement) setProgress(calcProgress(videoElement.currentTime, videoElement.duration));
  };

  const mouseMoveHandler = () => {
    const videoElement = videoRef.current;

    setFullscreen(false);
    videoElement?.removeEventListener('mousemove', mouseMoveHandler);
  };

  const btnFullscreenClickHandler = () => {
    const videoElement = videoRef.current;

    setFullscreen(true);
    setTimeout(() => videoElement?.addEventListener('mousemove', mouseMoveHandler), 1000);
  };

  const btnExitClickHandler = () => {
    onClose();
    setPlay(false);
    setProgress(0);
    setFullscreen(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement?.addEventListener('timeupdate', progressHandler);

    return () => {
      videoElement?.removeEventListener('timeupdate', progressHandler);
    };
  }, [visible]);

  return {
    play,
    duration,
    progress,
    fullscreen,
    videoRef,
    playHandler,
    pauseHandler,
    btnFullscreenClickHandler,
    btnExitClickHandler,
  };
};
