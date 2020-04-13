import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { VideoPlayerFullscreenState } from './';

type State = {
  isAuthorizationRequired: boolean;
  genre: string;
  videoPlayerFullscreen: VideoPlayerFullscreenState;
  maxVisibleMovies: number;
};

export const ALL_GENRES = 'All genres';

export const uiInitialState = {
  isAuthorizationRequired: false,
  genre: ALL_GENRES,
  videoPlayerFullscreen: {
    visible: false,
    background_image: null,
    background_color: null,
    name: null,
    video_link: null,
  },
  maxVisibleMovies: 8,
} as State;

export const slice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    toggleAuthorizationRequired(state) {
      state.isAuthorizationRequired = !state.isAuthorizationRequired;
    },
    setGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    toggleVideoPlayerFullscreenVisible(state) {
      state.videoPlayerFullscreen.visible = !state.videoPlayerFullscreen.visible;
    },
    updateVideoPlayerFullscreenData(
      state,
      action: PayloadAction<Omit<VideoPlayerFullscreenState, 'visible'>>,
    ) {
      const { background_color, background_image, name, video_link } = action.payload;

      state.videoPlayerFullscreen.background_color = background_color;
      state.videoPlayerFullscreen.background_image = background_image;
      state.videoPlayerFullscreen.name = name;
      state.videoPlayerFullscreen.video_link = video_link;
    },
    incrementMaxVisibleMovies(state, action: PayloadAction<number>) {
      state.maxVisibleMovies += action.payload;
    },
  },
});
