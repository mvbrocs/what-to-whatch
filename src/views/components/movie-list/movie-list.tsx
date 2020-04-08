import React from 'react';

import { MovieCard } from 'views/components/movie-card';
import { IFilm } from 'api/films';

type MovieListProps = {
  movies: IFilm[];
};

export const MovieList = ({ movies }: MovieListProps) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => (
      <MovieCard {...movie} key={movie.id} />
    ))}
  </div>
);
