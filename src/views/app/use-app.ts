import { useSelector, useDispatch } from 'react-redux';

import { selectVideoPlayerFullscreen } from 'state/ui/selectors';
import { toggleVideoPlayerFullscreenVisible } from 'state/ui/slice';

export const useApp = () => {
  const videoPlayerFullscreen = useSelector(selectVideoPlayerFullscreen);
  const dispatch = useDispatch();

  const videoPlayerFullscreenCloseHandler = () => dispatch(toggleVideoPlayerFullscreenVisible());

  return {
    videoPlayerFullscreen,
    videoPlayerFullscreenCloseHandler,
  };
};
