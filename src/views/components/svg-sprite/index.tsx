import React from 'react';

import { Add, PlayS, Pause, InList, FullScreen } from 'src/views/components/icons';

export const SvgSprite = () => (
  <div className="visually-hidden">
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol id="add" viewBox="0 0 19 20">
        <Add />
      </symbol>
      <symbol id="full-screen" viewBox="0 0 27 27">
        <FullScreen />
      </symbol>
      <symbol id="in-list" viewBox="0 0 18 14">
        <InList />
      </symbol>
      <symbol id="pause" viewBox="0 0 14 21">
        <Pause />
      </symbol>
      <symbol id="play-s" viewBox="0 0 19 19">
        <PlayS />
      </symbol>
    </svg>
  </div>
);
