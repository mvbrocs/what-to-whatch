import React from 'react';

import { Btn } from 'src/views/components/index';
import { PlaySIcon } from 'src/views/icons';
import { useBtnShowVideoPlayerFullscreen } from './use-btn-show-video-player-fullscreen';
import { IFilm } from 'src/api/films';

type BtnShowVideoPlayerFullscreenProps = {
  movie: IFilm | null;
};

const BtnShowVideoPlayerFullscreen = ({ movie }: BtnShowVideoPlayerFullscreenProps) => {
  const { clickHandler } = useBtnShowVideoPlayerFullscreen(movie);

  return (
    <Btn onClick={clickHandler}>
      <PlaySIcon />
      <span>Play</span>
    </Btn>
  );
};

export default BtnShowVideoPlayerFullscreen;
