import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { VideoPlayer } from 'views/components/video-player/video-player';
import { mockFilms } from 'mocks/films';

describe('VideoPlayer', () => {
  const assetsProps = {
    src: mockFilms[0].preview_video_link,
    poster: {
      src: mockFilms[0].preview_image,
      alt: mockFilms[0].name,
      width: 280,
      height: 175,
    },
  };
  describe('not play', () => {
    const videoPlayer = mount(<VideoPlayer {...assetsProps} play={false} />);

    it('renders properly', () => {
      expect(videoPlayer).toMatchSnapshot();
    });
  });

  describe('play', () => {
    describe('without delay', () => {
      const videoPlayer = mount(<VideoPlayer {...assetsProps} play={true} />);

      it('renders properly', () => {
        expect(videoPlayer).toMatchSnapshot();
      });
    });

    describe('with delay', () => {
      jest.useFakeTimers();

      const videoPlayer = mount(<VideoPlayer {...assetsProps} play={true} delay={1000} />);

      it('renders properly', () => {
        expect(videoPlayer).toMatchSnapshot();
      });

      it('should render preview image when the delay not expired', () => {
        act(() => {
          jest.advanceTimersByTime(500);
        });
        videoPlayer.update();

        expect(videoPlayer).toMatchSnapshot();
      });

      it('should not render preview image when the delay expired', () => {
        act(() => {
          jest.advanceTimersByTime(500);
        });
        videoPlayer.update();

        expect(videoPlayer).toMatchSnapshot();
      });
    });
  });
});
