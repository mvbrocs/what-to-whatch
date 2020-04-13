import { slice } from './slice';

export type VideoPlayerFullscreenState = {
  visible: boolean;
  background_image: string | null;
  background_color: string | null;
  name: string | null;
  video_link: string | null;
};

export { uiInitialState, ALL_GENRES } from './slice';

export const {
  toggleAuthorizationRequired,
  setGenre,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
  incrementMaxVisibleMovies,
} = slice.actions;

export const uiReducer = slice.reducer;

export {
  selectGenre,
  selectIsAuthorizationRequired,
  selectVideoPlayerFullscreen,
  selectMaxVisibleMovies,
} from './selectors';
