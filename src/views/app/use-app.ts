import { useSelector, useDispatch } from 'react-redux';

import {
  toggleVideoPlayerFullscreenVisible,
  selectVideoPlayerFullscreen,
  selectIsAuthorizationRequired,
} from 'src/state/ui';

export const useApp = () => {
  const videoPlayerFullscreen = useSelector(selectVideoPlayerFullscreen);
  const isAuthorizationRequired = useSelector(selectIsAuthorizationRequired);
  const dispatch = useDispatch();

  const videoPlayerFullscreenCloseHandler = () => dispatch(toggleVideoPlayerFullscreenVisible());

  return {
    isAuthorizationRequired,
    videoPlayerFullscreen,
    videoPlayerFullscreenCloseHandler,
  };
};
