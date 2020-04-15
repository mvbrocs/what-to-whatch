import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import { VideoPlayerFullscreen } from 'src/views/components';
import { routes } from 'src/routes';
import { useApp } from './use-app';

const AppRoute = (props: RouteProps) => <Route {...props} />;

export const App = () => {
  const { videoPlayerFullscreen, videoPlayerFullscreenCloseHandler } = useApp();

  return (
    <>
      {!videoPlayerFullscreen.visible &&
        routes.map((route, index) => <AppRoute {...route} key={index} />)}

      <VideoPlayerFullscreen
        visible={videoPlayerFullscreen.visible}
        name={videoPlayerFullscreen.data?.name}
        backgroundImage={videoPlayerFullscreen.data?.background_image}
        backgroundColor={videoPlayerFullscreen.data?.background_color}
        videoLink={videoPlayerFullscreen.data?.video_link}
        onClose={videoPlayerFullscreenCloseHandler}
      />
    </>
  );
};
