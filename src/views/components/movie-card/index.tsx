import React from 'react';
import { Link } from 'react-router-dom';

import { VideoPlayer } from 'src/views/components';
import { Path } from 'src/routes';
import { useMovieCard } from './use-movie-card';

type MovieCardProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
};

const VIDEO_MS_DELAY = 1000;

const MovieCard = ({ id, name, previewImage, previewVideoLink }: MovieCardProps) => {
  const { mouseEnter, cardMouseEnterHandler, cardMouseLeaveHandler } = useMovieCard();
  const videoPlayerPoster = {
    src: previewImage,
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
          src={previewVideoLink}
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

export default MovieCard;
