import { useSelector, useDispatch } from 'react-redux';

import { toggleVideoPlayerFullscreenVisible } from 'src/state/ui/slice';
import { selectVideoPlayerFullscreen, selectIsAuthorizationRequired } from 'src/state/ui/selectors';

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
