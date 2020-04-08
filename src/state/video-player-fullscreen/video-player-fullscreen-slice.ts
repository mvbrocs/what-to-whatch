import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { VideoPlayerFullscreenSliceState } from './';

export const videoPlayerFullscreenInitialState: VideoPlayerFullscreenSliceState = {
  visible: false,
  background_image: null,
  background_color: null,
  name: null,
  video_link: null,
};

export const videoPlayerFullscreenSlice = createSlice({
  name: 'videoPlayerFullscreen',
  initialState: videoPlayerFullscreenInitialState,
  reducers: {
    toggleVideoPlayerFullscreenVisible(state) {
      state.visible = !state.visible;
    },
    updateVideoPlayerFullscreenData(
      state,
      action: PayloadAction<Omit<VideoPlayerFullscreenSliceState, 'visible'>>,
    ) {
      const { background_color, background_image, name, video_link } = action.payload;

      state.background_color = background_color;
      state.background_image = background_image;
      state.name = name;
      state.video_link = video_link;
    },
  },
});
