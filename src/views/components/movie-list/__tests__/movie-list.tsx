import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from 'src/views/components/movie-list';
import { mockFilms } from 'src/mocks/films';

describe('MovieList', () => {
  const movieList = shallow(<MovieList movies={mockFilms} />);

  it('renders properly', () => {
    expect(movieList).toMatchSnapshot();
  });
});
