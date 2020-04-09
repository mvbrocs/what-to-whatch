import { formatDuration, addZero } from './format-duration';

describe('addZero', () => {
  it('should return 00, if arg 0', () => {
    expect(addZero(0)).toBe('00');
  });

  it('should return 05, if arg 5', () => {
    expect(addZero(5)).toBe('05');
  });

  it('should return 25, if arg 25', () => {
    expect(addZero(25)).toBe('25');
  });
});

describe('formatDuration', () => {
  it('should return 00:00:00, if arg 0', () => {
    expect(formatDuration(0)).toBe('00:00:00');
  });

  it('should return 00:12:14, if arg 734.167', () => {
    expect(formatDuration(734.167)).toBe('00:12:14');
  });

  it('should return 04:10:00, if arg 15000 ', () => {
    expect(formatDuration(15000)).toBe('04:10:00');
  });
});
