import { combineReducers } from '@reduxjs/toolkit';

import { genreReducer } from './genre';
import { moviesReducer } from './movies';

const rootReducer = combineReducers({
  genre: genreReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
