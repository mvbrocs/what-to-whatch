import { IMovie, mockMovies } from 'mocks/mock-movies';

export const mockMoviesAPI = {
  getAll: () =>
    new Promise<{ data: IMovie[] }>((resolve) => {
      setTimeout(() => resolve({ data: mockMovies }), 2000);
    }),
};
