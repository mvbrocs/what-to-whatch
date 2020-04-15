import React from 'react';

import { MovieCard } from 'src/views/components';
import { IFilm } from 'src/api/films';

type MovieListProps = {
  movies: IFilm[];
};

const MovieList = ({ movies }: MovieListProps) => (
  <div className="catalog__movies-list">
    {movies.map(({ id, name, preview_image, preview_video_link }) => (
      <MovieCard
        key={id}
        id={id}
        name={name}
        previewImage={preview_image}
        previewVideoLink={preview_video_link}
      />
    ))}
  </div>
);

export default MovieList;
