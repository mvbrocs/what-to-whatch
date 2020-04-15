import React from 'react';

import { FullScreenIcon, PauseIcon, PlaySIcon } from 'src/views/icons';
import { useVideoPlayerFullscreen } from './use-video-player-fullscreen';
import { formatDuration } from './format-duration';

type VideoPlayerFullscreenProps = {
  visible: boolean;
  backgroundColor?: string;
  backgroundImage?: string;
  name?: string;
  videoLink?: string;
  onClose: () => void;
};

const VideoPlayerFullscreen = ({
  visible,
  backgroundColor,
  backgroundImage,
  name,
  videoLink,
  onClose,
}: VideoPlayerFullscreenProps) => {
  const {
    play,
    duration,
    progress,
    fullscreen,
    videoRef,
    pauseHandler,
    playHandler,
    btnFullscreenClickHandler,
    btnExitClickHandler,
  } = useVideoPlayerFullscreen(visible, onClose);
  const btnPlayContent = play ? (
    <>
      <PauseIcon />
      <span className="test-btn-play-text">Pause</span>
    </>
  ) : (
    <>
      <PlaySIcon />
      <span className="test-btn-play-text">Play</span>
    </>
  );
  const btnPlayHandler = play ? pauseHandler : playHandler;

  if (!visible) return null;

  return (
    <div className="player" style={{ backgroundColor: backgroundColor }}>
      <video ref={videoRef} src={videoLink} className="player__video" poster={backgroundImage} />

      <button type="button" className="player__exit" onClick={btnExitClickHandler}>
        Exit
      </button>

      {!fullscreen && (
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100" />
              <div className="player__toggler" style={{ left: `${progress}%` }}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{formatDuration(duration)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={btnPlayHandler}>
              {btnPlayContent}
            </button>
            <div className="player__name">{name}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={btnFullscreenClickHandler}
            >
              <FullScreenIcon />
              <span>Full screen</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerFullscreen;
