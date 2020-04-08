import { RefObject } from 'react';

export type VideoPlayerFullscreenPlayHandler = (videoRef: RefObject<HTMLVideoElement>) => void;
export { VideoPlayerFullscreen } from './video-player-fullscreen';
