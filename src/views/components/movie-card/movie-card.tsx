import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { VideoPlayer } from 'views/components/video-player';
import { IMovie } from 'mocks/movies';
import './movie-card.css';

type MovieCardProps = IMovie;

const VIDEO_MS_TIMEOUT = 1000;

export const MovieCard = ({ title, img, videoSrc }: MovieCardProps) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    const videoTimeoutID = setTimeout(() => setPlayVideo(true), VIDEO_MS_TIMEOUT);

    if (!mouseEnter) {
      setPlayVideo(false);
      clearTimeout(videoTimeoutID);
    }

    return () => clearTimeout(videoTimeoutID);
  }, [mouseEnter]);
  const cardMouseEnterHandler = () => setMouseEnter(true);
  const cardMouseLeaveHandler = () => setMouseEnter(false);
  const imageStyles = classNames('small-movie-card__image', {
    'small-movie-card__image--img-hidden': playVideo,
  });

  return (
    <article
      className="small-movie-card small-movie-card--default"
      onMouseEnter={cardMouseEnterHandler}
      onMouseLeave={cardMouseLeaveHandler}
    >
      <div className={imageStyles}>
        <VideoPlayer play={playVideo} src={videoSrc} />
        <img src={img.src} alt={img.alt} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};
