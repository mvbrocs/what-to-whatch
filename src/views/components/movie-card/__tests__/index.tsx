import React from 'react';
import { shallow } from 'enzyme';

import { MovieCard } from 'src/views/components';
import { mockFilms } from 'src/mocks';

describe('MovieCard', () => {
  const props = {
    id: mockFilms[0].id,
    name: mockFilms[0].name,
    preview_image: mockFilms[0].preview_image,
    preview_video_link: mockFilms[0].preview_video_link,
  };
  const movieCard = shallow(<MovieCard {...props} />);

  it('renders properly', () => {
    expect(movieCard).toMatchSnapshot();
  });

  it('should render VideoPlayer with play=true prop, on mouseEnter', () => {
    movieCard.simulate('mouseEnter');

    expect(movieCard.find('VideoPlayer').prop('play')).toBeTruthy();
  });

  it('should render VideoPlayer with play=false prop, on mouseLeave', () => {
    movieCard.simulate('mouseLeave');

    expect(movieCard.find('VideoPlayer').prop('play')).toBeFalsy();
  });
});
