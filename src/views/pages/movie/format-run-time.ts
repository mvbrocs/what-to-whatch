import { MIN_IN_HR } from 'src/views/utils';

export const formatRunTime = (min?: number) => {
  if (!min) return null;
  if (min < MIN_IN_HR) return `${min}m`;

  const h = Math.floor(min / MIN_IN_HR);
  const m = min - h * MIN_IN_HR;

  if (!m) return `${h}h`;

  return `${h}h ${m}m`;
};
