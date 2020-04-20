import { useDispatch } from 'react-redux';

import { IFilm } from 'src/api/films';
import {
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
} from 'src/state/slices/ui';

export const useBtnShowVideoPlayerFullscreen = (movie: IFilm | null) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      updateVideoPlayerFullscreenData(
        movie && {
          background_color: movie.background_color,
          background_image: movie.background_image,
          name: movie.name,
          video_link: movie.video_link,
        },
      ),
    );
    dispatch(toggleVideoPlayerFullscreenVisible());
  };

  return { clickHandler };
};
