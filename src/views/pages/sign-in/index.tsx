import React from 'react';

import { Header, Logo } from 'src/views/components';
import { useSignIn } from './use-sign-in';

export const SignIn = () => {
  const { formik } = useSignIn();

  return (
    <div className="user-page">
      <Header className="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={formik.handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <label className="sign-in__label visually-hidden" htmlFor="email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <label className="sign-in__label visually-hidden" htmlFor="password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};
