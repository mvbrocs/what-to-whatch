import { RouteProps } from 'react-router-dom';

import { Home, Movie, SignIn, MyList } from 'src/views/pages';

export enum Path {
  HOME = '/',
  SIGN_IN = '/login',
  MOVIE = '/films/:id',
  MY_LIST = '/my-list',
}

export const routes: RouteProps[] = [
  {
    path: Path.HOME,
    component: Home,
    exact: true,
  },
  {
    path: Path.SIGN_IN,
    component: SignIn,
  },
  {
    path: Path.MOVIE,
    component: Movie,
  },
  {
    path: Path.MY_LIST,
    component: MyList,
  },
];
