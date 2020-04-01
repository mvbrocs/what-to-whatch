import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from './movie-list';
import { movies } from 'mocks/movies';

describe('MovieList', () => {
  const movieList = shallow(<MovieList movies={movies} />);

  it('renders properly', () => {
    expect(movieList).toMatchSnapshot();
  });
});
