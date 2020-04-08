import { videoPlayerFullscreenSlice } from './video-player-fullscreen-slice';

export type VideoPlayerFullscreenSliceState = {
  visible: boolean;
  background_image: string | null;
  background_color: string | null;
  name: string | null;
  video_link: string | null;
};

export { videoPlayerFullscreenInitialState } from './video-player-fullscreen-slice';
export const videoPlayerFullscreenReducer = videoPlayerFullscreenSlice.reducer;
export const {
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
} = videoPlayerFullscreenSlice.actions;
export { selectVideoPlayerFullscreenState } from './video-player-fullscreen-selectors';
