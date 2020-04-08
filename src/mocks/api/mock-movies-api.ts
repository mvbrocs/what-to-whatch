import { IFilm } from 'api/films';
import { mockFilms } from 'mocks/films';

export const mockMoviesAPI = {
  getAll: () =>
    new Promise<{ data: IFilm[] }>((resolve) => {
      setTimeout(() => resolve({ data: mockFilms }), 1000);
    }),
};
