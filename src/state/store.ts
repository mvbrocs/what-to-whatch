import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';

import { rootReducer } from './root-reducer';
import { history } from 'src/history';

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-reducer', () => {
    store.replaceReducer(require('./root-reducer').rootReducer);
  });
}
