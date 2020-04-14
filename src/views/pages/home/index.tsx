import React from 'react';

import { MovieList } from 'src/views/components/movie-list';
import { GenresList } from 'src/views/components/genres-list';
import { Header } from 'src/views/components/header';
import { UserBlock } from 'src/views/components/user-block';
import { useHome } from './use-home';

export const Home = () => {
  const {
    genres,
    activeGenre,
    movies,
    moviesLoaded,
    allMoviesIsVisible,
    mainMovie,
    genreClickHandler,
    btnShowMoreClickHandler,
    btnPlayClickHandler,
  } = useHome();

  return (
    <>
      {mainMovie && (
        <section className="movie-card" style={{ backgroundColor: mainMovie.background_color }}>
          <div className="movie-card__bg">
            <img src={mainMovie.background_image} alt={mainMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="movie-card__head">
            <UserBlock />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={mainMovie.poster_image} alt={mainMovie.name} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{mainMovie.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{mainMovie.genre}</span>
                  <span className="movie-card__year">{mainMovie.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button
                    className="btn btn--play movie-card__button"
                    type="button"
                    onClick={btnPlayClickHandler}
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {moviesLoaded && (
            <>
              <GenresList
                genres={genres}
                activeGenre={activeGenre}
                onGenreClick={genreClickHandler}
              />
              <MovieList movies={movies} />
            </>
          )}

          <div className="catalog__more">
            {!allMoviesIsVisible && (
              <button className="catalog__button" type="button" onClick={btnShowMoreClickHandler}>
                Show more
              </button>
            )}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
