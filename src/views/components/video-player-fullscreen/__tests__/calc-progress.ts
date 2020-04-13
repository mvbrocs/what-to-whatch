import { calcProgress } from '../calc-progress';

describe('calc progress', () => {
  it('should return 0.1, if current 1 total 1000', () => {
    expect(calcProgress(1, 1000)).toBe(0.1);
  });
});
