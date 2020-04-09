import { useSelector, useDispatch } from 'react-redux';

import {
  selectVideoPlayerFullscreenState,
  toggleVideoPlayerFullscreenVisible,
} from 'state/video-player-fullscreen';

export const useApp = () => {
  const videoPlayerFullscreenState = useSelector(selectVideoPlayerFullscreenState);
  const dispatch = useDispatch();
  const videoPlayerFullscreenCloseHandler = () => dispatch(toggleVideoPlayerFullscreenVisible());

  return {
    videoPlayerFullscreenState,
    videoPlayerFullscreenCloseHandler,
  };
};
