import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { VideoPlayerFullscreen } from 'views/components/video-player-fullscreen';
import { SvgSprite } from 'views/components/svg-sprite';
import { routes } from 'routes';
import { useApp } from './use-app';

const AppRoute = (props: RouteProps) => <Route {...props} />;

export const App = () => {
  const {
    videoPlayerFullscreen,
    videoPlayerFullscreenCloseHandler,
  } = useApp();

  return (
    <>
      <SvgSprite />

      {!videoPlayerFullscreen.visible &&
        routes.map((route, index) => <AppRoute {...route} key={index} />)}

      <VideoPlayerFullscreen
        {...videoPlayerFullscreen}
        onClose={videoPlayerFullscreenCloseHandler}
      />
    </>
  );
};
