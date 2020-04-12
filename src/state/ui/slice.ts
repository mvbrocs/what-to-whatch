import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VideoPlayerFullscreen = {
  visible: boolean;
  background_image: string | null;
  background_color: string | null;
  name: string | null;
  video_link: string | null;
};

export type State = {
  genre: string;
  videoPlayerFullscreen: VideoPlayerFullscreen;
  maxVisibleMovies: number;
};

export const ALL_GENRES = 'All genres';

export const uiInitialState = {
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

const slice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    toggleVideoPlayerFullscreenVisible(state) {
      state.videoPlayerFullscreen.visible = !state.videoPlayerFullscreen.visible;
    },
    updateVideoPlayerFullscreenData(
      state,
      action: PayloadAction<Omit<VideoPlayerFullscreen, 'visible'>>,
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

export const uiReducer = slice.reducer;
export const {
  setGenre,
  toggleVideoPlayerFullscreenVisible,
  updateVideoPlayerFullscreenData,
  incrementMaxVisibleMovies,
} = slice.actions;
