import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { history } from 'src/history';
import { uiReducer } from './ui';
import { moviesReducer } from './movies';
import { userReducer } from './user';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
  movies: moviesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
