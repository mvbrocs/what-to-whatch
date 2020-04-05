import React from 'react';
import { GenresItem } from './';

import { shallow } from 'enzyme';

describe('GenresItem', () => {
  const mockClickHandler = jest.fn();
  const props = {
    active: true,
    text: 'New genre',
    onClick: mockClickHandler,
  };

  const genresItemActive = shallow(<GenresItem {...props} />);

  it('renders properly', () => {
    expect(genresItemActive).toMatchSnapshot();
  });

  it('should call clickHandler on click', () => {
    genresItemActive.find('.catalog__genres-link').simulate('click', { preventDefault: () => {} });
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  it('should render with active class when props active', () => {
    expect(genresItemActive.find('.catalog__genres-item--active')).toHaveLength(1);
  });

  it('should render without active class when props active false', () => {
    const genresItemNoActive = shallow(<GenresItem {...props} active={false} />);

    expect(genresItemNoActive.find('.catalog__genres-item--active')).toHaveLength(0);
  });
});
