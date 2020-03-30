import React from 'react';
import { shallow } from 'enzyme';

import { MovieCard } from './';
import { movieCardMock } from 'mocks/movie-card';

describe('MovieCard', () => {
  it('renders properly', () => {
    const movieCard = shallow(<MovieCard {...movieCardMock} />);

    expect(movieCard).toMatchSnapshot();
  });
});
