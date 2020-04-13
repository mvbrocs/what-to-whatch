import React, { MouseEventHandler } from 'react';

import { GenresItem } from './genres-item';

export type GenreClickHandler = (genre: string) => MouseEventHandler<HTMLAnchorElement>;

type GenresListProps = {
  genres: string[];
  activeGenre: string;
  onGenreClick: GenreClickHandler;
};

const GenresList = ({ genres, activeGenre, onGenreClick }: GenresListProps) => (
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

export { GenresList };
