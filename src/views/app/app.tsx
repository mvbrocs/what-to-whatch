import React from 'react';

import { Home } from 'views/pages/home';
import { Movie } from 'views/pages/movie';
import { VideoPlayerFullscreen } from 'views/components/video-player-fullscreen';
import { useApp } from './use-app';

export const App = () => {
  const { videoPlayerFullscreenState, videoPlayerFullscreenCloseHandler } = useApp();

  return (
    <>
      {!videoPlayerFullscreenState.visible && <Home />}
      <VideoPlayerFullscreen
        {...videoPlayerFullscreenState}
        onClose={videoPlayerFullscreenCloseHandler}
      />
    </>
  );
};
