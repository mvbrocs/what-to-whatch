import React from 'react';
import { mount } from 'enzyme';

import { GenresList } from 'views/components/genres-list';

describe('GenresList', () => {
  const mockOnGenreClick = jest.fn();
  const props = {
    genres: ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4'],
    activeGenre: 'Genre 2',
    onGenreClick: () => mockOnGenreClick,
  };
  const genresList = mount(<GenresList {...props} />);

  it('renders properly', () => {
    expect(genresList).toMatchSnapshot();
  });

  it('should render active class on item 2', () => {
    expect(
      genresList
        .find('.catalog__genres-item')
        .at(1)
        .hasClass('catalog__genres-item--active'),
    ).toBeTruthy();
  });

  it('should call onClick handler on link click', () => {
    const fourthItem = genresList.find('.catalog__genres-item').at(3);

    fourthItem.find('.catalog__genres-link').simulate('click', {
      preventDefault: () => {},
    });

    expect(mockOnGenreClick).toBeCalledTimes(1);
  });
});
