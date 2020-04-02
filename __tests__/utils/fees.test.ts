import { interstCalc, finesCalc } from '../../src/utils/index';

describe('Unit test utils/interestCalc and finesCalc function', () => {
  it('should return the interest amount of the boleto', () => {
    const value = interstCalc(100, 2, 2, 'BANCO', true, false);
    expect(value).toBe(4);
  });

  it('should return the fines amount of the boleto', () => {
    const value = finesCalc(500, true, 'BANCO', 2, true);
    expect(value).toBe(10);
  });
});
