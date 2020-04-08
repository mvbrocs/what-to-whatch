import { RootState } from 'state/root-reducer';
import { moviesInitialState } from 'state/movies';
import { videoPlayerFullscreenInitialState } from 'state/video-player-fullscreen';

export const mockStore: RootState = {
  genre: 'Some genre',
  movies: moviesInitialState,
  videoPlayerFullscreen: videoPlayerFullscreenInitialState,
};
