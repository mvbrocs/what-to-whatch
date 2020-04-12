import { RootState } from '../root-reducer';

export const selectGenre = (state: RootState) => state.ui.genre;
export const selectVideoPlayerFullscreen = (state: RootState) => state.ui.videoPlayerFullscreen;
export const selectMaxVisibleMovies = (state: RootState) => state.ui.maxVisibleMovies;
