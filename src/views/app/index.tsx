import React from 'react';

import { Home } from 'views/pages/home';
import { Movie } from 'views/pages/movie';
import { VideoPlayerFullscreen } from 'views/components/video-player-fullscreen';
import { useApp } from './use-app';

export const App = () => {
  const { videoPlayerFullscreen, videoPlayerFullscreenCloseHandler } = useApp();

  return (
    <>
      {!videoPlayerFullscreen.visible && <Home />}
      <VideoPlayerFullscreen
        {...videoPlayerFullscreen}
        onClose={videoPlayerFullscreenCloseHandler}
      />
    </>
  );
};
