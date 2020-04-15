import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VideoPlayerFullscreenData = {
  background_image: string;
  background_color: string;
  name: string;
  video_link: string;
};

type VideoPlayerFullscreen = {
  visible: boolean;
  data: VideoPlayerFullscreenData | null;
};

type State = {
  isAuthorizationRequired: boolean;
  genre: string;
  videoPlayerFullscreen: VideoPlayerFullscreen;
  maxVisibleMovies: number;
};

export const ALL_GENRES = 'All genres';

export const uiInitialState = {
  isAuthorizationRequired: false,
  genre: ALL_GENRES,
  videoPlayerFullscreen: {
    visible: false,
    data: null,
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
      action: PayloadAction<VideoPlayerFullscreenData | null>,
    ) {
      state.videoPlayerFullscreen.data = action.payload;
    },
    incrementMaxVisibleMovies(state, action: PayloadAction<number>) {
      state.maxVisibleMovies += action.payload;
    },
  },
});

export const uiReducer = slice.reducer;
