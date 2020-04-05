import React from 'react';

import { GenresItem } from './genres-item';
import { GenreClickHandler } from './';

type GenresListProps = {
  genres: string[];
  activeGenre: string;
  onGenreClick: GenreClickHandler;
};

export const GenresList = ({ genres, activeGenre, onGenreClick }: GenresListProps) => (
  <ul className="catalog__genres-list">
    {genres.map((genre, index) => (
      <GenresItem
        key={index}
        active={activeGenre === genre}
        text={genre}
        onClick={onGenreClick(genre)}
      />
    ))}
  </ul>
);
