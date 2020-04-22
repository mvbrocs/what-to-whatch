import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import { rootReducer, RootState } from './root-reducer';
import { history } from './history';

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-reducer', () => {
    store.replaceReducer(require('./root-reducer').rootReducer);
  });
}
