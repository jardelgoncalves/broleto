import { interstCalc } from '../../src/utils/index';

describe('Unit test utils/interestCalc function', () => {
  it('should return the interest amount of the boleto', () => {
    const value = interstCalc(100, 2, 2, 'BANCO', true, false);
    expect(value).toBe(4);
  });
});
