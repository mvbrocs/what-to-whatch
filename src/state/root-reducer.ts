import { combineReducers } from '@reduxjs/toolkit';

import { uiReducer } from './ui/slice';
import { moviesReducer } from './movies/slice';

const rootReducer = combineReducers({
  ui: uiReducer,
  movies: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
