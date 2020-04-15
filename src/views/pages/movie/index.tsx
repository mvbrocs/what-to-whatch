import React from 'react';
import { RouteProps } from 'react-router-dom';

import { TabPane, Tabs, MovieList, Header, Logo, UserBlock } from 'src/views/components';
import { mockFilms } from 'src/mocks';
import { useMovie } from './use-movie';

type MovieProps = RouteProps;

export const Movie = (props: MovieProps) => {
  useMovie();

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className="movie-card__head">
            <UserBlock />
          </Header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
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

                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="movie-card__desc">
              <Tabs>
                <TabPane tab="Overview" index="1">
                  <div className="movie-rating">
                    <div className="movie-rating__score">8,9</div>
                    <p className="movie-rating__meta">
                      <span className="movie-rating__level">Very good</span>
                      <span className="movie-rating__count">240 ratings</span>
                    </p>
                  </div>

                  <div className="movie-card__text">
                    <p>
                      In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
                      presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby
                      boy, becomes Gustave's friend and protege.
                    </p>

                    <p>
                      Gustave prides himself on providing first-class service to the hotel's guests,
                      including satisfying the sexual needs of the many elderly women who stay
                      there. When one of Gustave's lovers dies mysteriously, Gustave finds himself
                      the recipient of a priceless painting and the chief suspect in her murder.
                    </p>

                    <p className="movie-card__director">
                      <strong>Director: Wes Andreson</strong>
                    </p>

                    <p className="movie-card__starring">
                      <strong>
                        Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other
                      </strong>
                    </p>
                  </div>
                </TabPane>

                <TabPane tab="Details" index="2">
                  <div className="movie-card__text movie-card__row">
                    <div className="movie-card__text-col">
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Director</strong>
                        <span className="movie-card__details-value">Wes Andreson</span>
                      </p>
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Starring</strong>
                        <span className="movie-card__details-value">
                          Bill Murray, <br />
                          Edward Norton, <br />
                          Jude Law, <br />
                          Willem Dafoe, <br />
                          Saoirse Ronan, <br />
                          Tony Revoloru, <br />
                          Tilda Swinton, <br />
                          Tom Wilkinson, <br />
                          Owen Wilkinson, <br />
                          Adrien Brody, <br />
                          Ralph Fiennes, <br />
                          Jeff Goldblum
                        </span>
                      </p>
                    </div>

                    <div className="movie-card__text-col">
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Run Time</strong>
                        <span className="movie-card__details-value">1h 39m</span>
                      </p>
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Genre</strong>
                        <span className="movie-card__details-value">Comedy</span>
                      </p>
                      <p className="movie-card__details-item">
                        <strong className="movie-card__details-name">Released</strong>
                        <span className="movie-card__details-value">2014</span>
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
                            most exquisitely designed movies in years.
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
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={mockFilms} />
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
