import React from 'react';

import { Add } from 'views/components/icons/add';
import { FullScreen } from 'views/components/icons/full-screen';
import { InList } from 'views/components/icons/in-list';
import { Pause } from 'views/components/icons/pause';
import { PlayS } from 'views/components/icons/play-s';

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
