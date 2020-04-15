import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { uiReducer } from './ui/slice';
import { moviesReducer } from './movies/slice';
import { userReducer } from './user/slice';
import { history } from './history';

export const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
  movies: moviesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
