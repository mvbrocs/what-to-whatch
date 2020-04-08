import { useSelector, useDispatch } from 'react-redux';

import {
  selectVideoPlayerFullscreenState,
  toggleVideoPlayerFullscreenVisible,
} from 'state/video-player-fullscreen';
import { VideoPlayerFullscreenPlayHandler } from 'views/components/video-player-fullscreen';

export const useApp = () => {
  const videoPlayerFullscreenState = useSelector(selectVideoPlayerFullscreenState);
  const dispatch = useDispatch();
  const videoPlayerFullscreenCloseHandler = () => dispatch(toggleVideoPlayerFullscreenVisible());
  const videoPlayerFullscreenPlayHandler: VideoPlayerFullscreenPlayHandler = (videoRef) =>
    videoRef?.current?.play();

  return {
    videoPlayerFullscreenState,
    videoPlayerFullscreenCloseHandler,
    videoPlayerFullscreenPlayHandler,
  };
};
