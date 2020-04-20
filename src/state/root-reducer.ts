import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { uiReducer } from './slices/ui';
import { moviesReducer } from './slices/movies';
import { userReducer } from './slices/user';
import { history } from './history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
  movies: moviesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
