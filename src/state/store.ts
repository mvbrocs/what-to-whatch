import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-reducer', () => {
    store.replaceReducer(require('./root-reducer').default);
  });
}
