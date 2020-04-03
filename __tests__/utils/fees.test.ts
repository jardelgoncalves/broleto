import { interstCalc, finesCalc } from '../../src/utils/index';

describe('Unit test utils/interestCalc and finesCalc function', () => {
  it('should return the interest amount of the boleto if calculated by percentage per day', () => {
    const value = interstCalc(100, 2, 2, 'BANCO', true, false);
    expect(value).toBe(4);
  });

  it('should return the interest amount of the boleto if calculated by percentage per month', () => {
    const value = interstCalc(100, 10, 1, 'BANCO', true, true);
    expect(Number((value).toFixed(2))).toBe(0.33);
  });

  it('should return the interest amount of the boleto if calculated by value per day', () => {
    const value = interstCalc(100, 2, 2, 'BANCO', false, false);
    expect(value).toBe(4);
  });

  it('should return the interest amount of the boleto if calculated by value per month', () => {
    const value = interstCalc(100, 30, 1, 'BANCO', false, true);
    expect(value).toBe(1);
  });

  it('should return the fines amount of the boleto if calculated by percentage', () => {
    const value = finesCalc(500, true, 'BANCO', 2, true);
    expect(value).toBe(10);
  });

  it('should return the fines amount of the boleto if calculated by value', () => {
    const value = finesCalc(500, true, 'BANCO', 2, false);
    expect(value).toBe(2);
  });
});
