import React from 'react';

import { VideoPlayer } from 'views/components/video-player/video-player';
import { IMovie } from 'mocks/movies';
import { useMovieCard } from './use-movie-card';

type MovieCardProps = IMovie;

const VIDEO_MS_DELAY = 1000;

export const MovieCard = ({ title, img, videoSrc }: MovieCardProps) => {
  const { mouseEnter, cardMouseEnterHandler, cardMouseLeaveHandler } = useMovieCard();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={cardMouseEnterHandler}
      onMouseLeave={cardMouseLeaveHandler}
    >
      <div className="small-movie-card__image">
        <VideoPlayer play={mouseEnter} src={videoSrc} poster={img} delay={VIDEO_MS_DELAY} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};
