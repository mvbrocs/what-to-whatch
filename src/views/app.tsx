import React from 'react';

import { Home } from './pages/home';
import { Movie } from './pages/movie';
import { MovieDetails } from './pages/movie-details';
import { MovieInList } from './pages/movie-in-list';
import { MovieReviews } from './pages/movie-reviews';
import { movies } from '../mocks/movies';

const App = () => (
  <>
    {/*<Home movies={movies} />*/}
    <Movie />
  </>
);

export default App;
