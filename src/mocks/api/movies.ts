import { IMovie, movies } from 'mocks/movies';

export const moviesAPI = {
  getAll: () =>
    new Promise<{ data: IMovie[] }>((resolve) => {
      setTimeout(() => resolve({ data: movies }), 2000);
    }),
};
