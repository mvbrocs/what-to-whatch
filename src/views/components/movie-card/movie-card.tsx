import React, { useState } from 'react';

import { VideoPlayer } from 'views/components/video-player';
import { IMovie } from 'mocks/movies';

type MovieCardProps = IMovie;

export const MovieCard = ({ title, img, videoSrc }: MovieCardProps) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const cardMouseEnterHandler = () => setMouseEnter(true);
  const cardMouseLeaveHandler = () => setMouseEnter(false);

  return (
    <article
      className="small-movie-card"
      onMouseEnter={cardMouseEnterHandler}
      onMouseLeave={cardMouseLeaveHandler}
    >
      <div className="small-movie-card__image">
        <VideoPlayer play={mouseEnter} src={videoSrc} poster={img.src} />
        <img src={img.src} alt={img.alt} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}1
        </a>
      </h3>
    </article>
  );
};
