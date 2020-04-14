import { RootState } from 'src/state/root-reducer';

export const selectIsAuthorizationRequired = (state: RootState) => state.ui.isAuthorizationRequired;
export const selectGenre = (state: RootState) => state.ui.genre;
export const selectVideoPlayerFullscreen = (state: RootState) => state.ui.videoPlayerFullscreen;
export const selectMaxVisibleMovies = (state: RootState) => state.ui.maxVisibleMovies;
