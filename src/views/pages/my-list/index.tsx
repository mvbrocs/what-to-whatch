import React from 'react';

import { Header, UserBlock, Logo, MovieList } from 'src/views/components';
import { useMyList } from './use-my-list';

const MyList = () => {
  const { user, existUserMovies } = useMyList();

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock avatarURL={user?.avatar_url} />
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList movies={existUserMovies} />
      </section>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default MyList;
