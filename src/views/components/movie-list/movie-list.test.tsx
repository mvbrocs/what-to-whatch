import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from './movie-list';
import { mockMovies } from 'mocks/mock-movies';

describe('MovieList', () => {
  const movieList = shallow(<MovieList movies={mockMovies} />);

  it('renders properly', () => {
    expect(movieList).toMatchSnapshot();
  });
});
