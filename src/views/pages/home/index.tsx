import React from 'react';

import { MovieList, GenresList, Header, UserBlock, Logo, Btn } from 'src/views/components';
import { PlaySIcon } from 'src/views/icons';
import { useHome } from './use-home';

export const Home = () => {
  const {
    genres,
    activeGenre,
    moviesByGenreAndMaxVisible,
    moviesLoaded,
    allMoviesIsVisible,
    mainMovie,
    user,
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
            <UserBlock user={user} />
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
                  <Btn onClick={btnPlayClickHandler}>
                    <PlaySIcon />
                    <span>Play</span>
                  </Btn>
                  {/*<button className="btn btn--list movie-card__button" type="button">*/}
                  {/*  <svg viewBox="0 0 19 20" width="19" height="20">*/}
                  {/*    <use xlinkHref="#add" />*/}
                  {/*  </svg>*/}
                  {/*  <span>My list</span>*/}
                  {/*</button>*/}
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
              <MovieList movies={moviesByGenreAndMaxVisible} />
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
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
