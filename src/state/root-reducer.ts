import { combineReducers } from '@reduxjs/toolkit';

import { uiReducer } from './ui';
import { moviesReducer } from './movies';
import { userReducer } from './user';

const rootReducer = combineReducers({
  ui: uiReducer,
  movies: moviesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
