import React from 'react';
import { shallow } from 'enzyme';

import { VideoPlayerFullscreen } from './video-player-fullscreen';
import { mockFilms } from 'mocks/films';

describe('VideoPlayerFullscreen', () => {
  const closeHandlerMock = jest.fn();
  const props = {
    visible: true,
    background_image: mockFilms[0].background_image,
    background_color: mockFilms[0].background_color,
    name: mockFilms[0].name,
    video_link: mockFilms[0].video_link,
    onClose: closeHandlerMock,
  };
  const videoPlayerFullscreen = shallow(<VideoPlayerFullscreen {...props} />);

  test('renders properly', () => {
    expect(videoPlayerFullscreen).toMatchSnapshot();
  });

  test('renders nothing if visible false', () => {
    const videoPlayerFullscreenNotVisible = shallow(
      <VideoPlayerFullscreen {...props} visible={false} />,
    );

    expect(videoPlayerFullscreenNotVisible.children().length).toBe(0);
  });

  test('call close handler on btn exit click', () => {
    videoPlayerFullscreen.find('.player__exit').simulate('click');

    expect(closeHandlerMock).toBeCalledTimes(1);
  });

  test('btn fullscreen', () => {
    videoPlayerFullscreen.find('.player__full-screen').simulate('click');

    expect(videoPlayerFullscreen.find('.player__full-screen').exists()).toBeFalsy();
  });
});
