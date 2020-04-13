import React from 'react';

import { VideoPlayer } from 'views/components/video-player';
import { useMovieCard } from './use-movie-card';

export type MovieCardProps = {
  name: string;
  preview_image: string;
  preview_video_link: string;
};

const VIDEO_MS_DELAY = 1000;

export const MovieCard = ({ name, preview_image, preview_video_link }: MovieCardProps) => {
  const { mouseEnter, cardMouseEnterHandler, cardMouseLeaveHandler } = useMovieCard();
  const videoPlayerPoster = {
    src: preview_image,
    alt: name,
    width: 280,
    height: 175,
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={cardMouseEnterHandler}
      onMouseLeave={cardMouseLeaveHandler}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          play={mouseEnter}
          src={preview_video_link}
          poster={videoPlayerPoster}
          delay={VIDEO_MS_DELAY}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="/">
          {name}
        </a>
      </h3>
    </article>
  );
};
