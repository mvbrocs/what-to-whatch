import React from 'react';
import { Link } from 'react-router-dom';

import { VideoPlayer } from 'src/views/components/video-player';
import { Path } from 'src/routes';
import { useMovieCard } from './use-movie-card';

export type MovieCardProps = {
  id: number;
  name: string;
  preview_image: string;
  preview_video_link: string;
};

const VIDEO_MS_DELAY = 1000;

export const MovieCard = ({ id, name, preview_image, preview_video_link }: MovieCardProps) => {
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
        <Link className="small-movie-card__link" to={Path.MOVIE.replace(/:id/, id.toString())}>
          {name}
        </Link>
      </h3>
    </article>
  );
};
