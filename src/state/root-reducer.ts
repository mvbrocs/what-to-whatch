import { combineReducers } from '@reduxjs/toolkit';

import { genreReducer } from './genre';
import { moviesReducer } from './movies';
import { videoPlayerFullscreenReducer } from './video-player-fullscreen';

const rootReducer = combineReducers({
  genre: genreReducer,
  movies: moviesReducer,
  videoPlayerFullscreen: videoPlayerFullscreenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
