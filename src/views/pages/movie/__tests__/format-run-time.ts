import { formatRunTime } from 'src/views/pages/movie/format-run-time';

describe('formatRunTime', () => {
  it('should return null if no arg', () => {
    expect(formatRunTime()).toEqual(null);
  });

  it('should return 42m, if arg 42', () => {
    expect(formatRunTime(42)).toEqual('42m');
  });

  it('should return null, if arg 0', () => {
    expect(formatRunTime(0)).toEqual(null);
  });

  it('should return 1h 30m if arg 90', () => {
    expect(formatRunTime(90)).toEqual('1h 30m');
  });

  it('should return 1h, if arg 60', () => {
    expect(formatRunTime(60)).toEqual('1h');
  });
});
