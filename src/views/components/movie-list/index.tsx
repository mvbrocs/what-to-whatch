import React from 'react';

import { MovieCard } from 'src/views/components/movie-card';
import { IFilm } from 'src/api/films';

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
