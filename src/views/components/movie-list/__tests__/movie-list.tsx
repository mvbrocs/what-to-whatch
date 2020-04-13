import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from 'views/components/movie-list';
import { mockFilms } from 'mocks/films';

describe('MovieList', () => {
  const movieList = shallow(<MovieList movies={mockFilms} />);

  it('renders properly', () => {
    expect(movieList).toMatchSnapshot();
  });
});
