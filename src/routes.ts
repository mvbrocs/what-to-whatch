import { RouteProps } from 'react-router-dom';

import { Home, Movie, SignIn } from 'views/pages';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/films/:id',
    component: Movie,
    exact: true,
  },
  {
    path: '/sign-in',
    component: SignIn,
    exact: true,
  },
];
