import React from 'react';

import { Btn } from 'src/views/components';
import { AddIcon, InListIcon } from 'src/views/icons';
import { IFilm } from 'src/api/films';
import { useBtnAddMovieToMyList } from './use-btn-add-movie-to-my-list';

type BtnAddMovieToMyListProps = {
  movie: IFilm | null;
};

const BtnAddMovieToMyList = ({ movie }: BtnAddMovieToMyListProps) => {
  const { movieInList, clickHandler } = useBtnAddMovieToMyList(movie);
  const btnAddIcon = movieInList ? <InListIcon /> : <AddIcon />;

  return (
    <Btn onClick={clickHandler}>
      {btnAddIcon}
      <span>My list</span>
    </Btn>
  );
};

export default BtnAddMovieToMyList;
