import { RootState } from 'src/state/root-reducer';

export const selectIsAuthorizationRequired = (state: RootState) => state.ui.isAuthorizationRequired;
export const selectVideoPlayerFullscreen = (state: RootState) => state.ui.videoPlayerFullscreen;
