import React from 'react';

import { TabPane, Tabs, MovieList, Header, Logo, UserBlock } from 'src/views/components';
import { formatRunTime } from './format-run-time';
import { useMovie } from './use-movie';

const Movie = () => {
  const { mainMovie, moviesByGenre, user } = useMovie();

  return (
    <>
      <section
        className="movie-card movie-card--full"
        style={{ backgroundColor: mainMovie?.background_color }}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={mainMovie?.background_image} alt={mainMovie?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="movie-card__head">
            <UserBlock avatarURL={user?.avatar_url} />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{mainMovie?.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{mainMovie?.genre}</span>
                <span className="movie-card__year">{mainMovie?.released}</span>
              </p>

              <div className="movie-card__buttons">
                {/*<Btn onClick={}>*/}
                {/*  <svg viewBox="0 0 19 19" width="19" height="19">*/}
                {/*    <use xlinkHref="#play-s" />*/}
                {/*  </svg>*/}
                {/*  <span>Play</span>*/}
                {/*</Btn>*/}

                {/*<button className="btn btn--list movie-card__button" type="button">*/}
                {/*  <svg viewBox="0 0 19 20" width="19" height="20">*/}
                {/*    <use xlinkHref="#add" />*/}
                {/*  </svg>*/}
                {/*  <span>My list</span>*/}
                {/*</button>*/}

                {/*<a href="add-review.html" className="btn movie-card__button">*/}
                {/*  Add review*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={mainMovie?.poster_image} alt={mainMovie?.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs>
                <TabPane tab="Overview" index="1">
                  <div className="movie-rating">
                    <div className="movie-rating__score">{mainMovie?.rating}</div>
                    <p className="movie-rating__meta">
                      <span className="movie-rating__level">Very good</span>
                      <span className="movie-rating__count">{mainMovie?.scores_count} ratings</span>
                    </p>
                  </div>

                  <div className="movie-card__text">
                    <p>{mainMovie?.description}</p>

                    <p className="movie-card__director">
                      <strong>Director: {mainMovie?.director}</strong>
                    </p>

                    <p className="movie-card__starring">
                      <strong>Starring: {mainMovie?.starring.join(', ')} and other</strong>
                    </p>
                  </div>
                </TabPane>

                <TabPane tab="Details" index="2">
                  <div className="movie-card__text movie-card__row">
                    <div className="movie-card__text-col">
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Director</strong>
                        <span className="movie-card__details-value">{mainMovie?.director}</span>
                      </p>
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Starring</strong>
                        <span className="movie-card__details-value">
                          {mainMovie?.starring.map((mainMovie) => (
                            <>
                              {mainMovie}, <br />
                            </>
                          ))}
                        </span>
                      </p>
                    </div>

                    <div className="movie-card__text-col">
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Run Time</strong>
                        <span className="movie-card__details-value">
                          {formatRunTime(mainMovie?.run_time)}
                        </span>
                      </p>
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Genre</strong>
                        <span className="movie-card__details-value">{mainMovie?.genre}</span>
                      </p>
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Released</strong>
                        <span className="movie-card__details-value">{mainMovie?.released}</span>
                      </p>
                    </div>
                  </div>
                </TabPane>

                <TabPane tab="Reviews" index="3">
                  <div className="movie-card__reviews movie-card__row">
                    <div className="movie-card__reviews-col">
                      <div className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">
                            Discerning travellers and Wes Anderson fans will luxuriate in the
                            glorious Mittel-European kitsch of one of the director's funniest and
                            most exquisitely designed moviesByGenreAndMaxVisible in years.
                          </p>

                          <footer className="review__details">
                            <cite className="review__author">Kate Muir</cite>
                            <time className="review__date" dateTime="2016-12-24">
                              December 24, 2016
                            </time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">8,9</div>
                      </div>

                      <div className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">
                            Anderson's films are too precious for some, but for those of us willing
                            to lose ourselves in them, they're a delight. "The Grand Budapest Hotel"
                            is no different, except that he has added a hint of gravitas to the mix,
                            improving the recipe.
                          </p>

                          <footer className="review__details">
                            <cite className="review__author">Bill Goodykoontz</cite>
                            <time className="review__date" dateTime="2015-11-18">
                              November 18, 2015
                            </time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">8,0</div>
                      </div>

                      <div className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">
                            I didn't find it amusing, and while I can appreciate the creativity,
                            it's an hour and 40 minutes I wish I could take back.
                          </p>

                          <footer className="review__details">
                            <cite className="review__author">Amanda Greever</cite>
                            <time className="review__date" dateTime="2015-11-18">
                              November 18, 2015
                            </time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">8,0</div>
                      </div>
                    </div>
                    <div className="movie-card__reviews-col">
                      <div className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">
                            The mannered, madcap proceedings are often delightful, occasionally
                            silly, and here and there, gruesome and/or heartbreaking.
                          </p>

                          <footer className="review__details">
                            <cite className="review__author">Matthew Lickona</cite>
                            <time className="review__date" dateTime="2016-12-20">
                              December 20, 2016
                            </time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">7,2</div>
                      </div>

                      <div className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">
                            It is certainly a magical and childlike way of storytelling, even if the
                            content is a little more adult.
                          </p>

                          <footer className="review__details">
                            <cite className="review__author">Paula Fleri-Soler</cite>
                            <time className="review__date" dateTime="2016-12-20">
                              December 20, 2016
                            </time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">7,6</div>
                      </div>

                      <div className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">
                            It is certainly a magical and childlike way of storytelling, even if the
                            content is a little more adult.
                          </p>

                          <footer className="review__details">
                            <cite className="review__author">Paula Fleri-Soler</cite>
                            <time className="review__date" dateTime="2016-12-20">
                              December 20, 2016
                            </time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">7,0</div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {Boolean(moviesByGenre.length) && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MovieList movies={moviesByGenre} />
          </section>
        )}

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

export default Movie;
