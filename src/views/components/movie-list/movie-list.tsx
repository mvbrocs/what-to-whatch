import React from 'react';

import { MovieCard } from 'views/components/movie-card/movie-card';
import { IMovie } from 'mocks/mock-movies';

type MovieListProps = {
  movies: IMovie[];
};

export const MovieList = ({ movies }: MovieListProps) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => (
      <MovieCard {...movie} key={movie.id} />
    ))}
  </div>
);
