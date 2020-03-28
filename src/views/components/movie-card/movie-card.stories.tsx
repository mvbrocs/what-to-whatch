import React from 'react';

import { MovieCard } from './';
import { movies } from 'mocks/movies';

export default {
  component: MovieCard,
  title: 'MovieCard',
  excludeStories: /.*Data$/,
};

export const movieCardData = movies[0];

export const Default = () => <MovieCard {...movieCardData} />;
