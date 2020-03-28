import React from 'react';

import { Home } from './pages/home';
import { movies } from '../mocks/movies';

const App = () => (
  <>
    <Home movies={movies} />
  </>
);

export default App;
