import { maskCleaner } from '../../src/utils/index';

describe('Unit test utils/maskCleaner function', () => {
  it('return only the numbers on a payment slip', () => {
    const numbers = maskCleaner('00233a.-=-3434');
    expect(numbers).toBe('002333434');
  });

  it('should return empty if there are no numbers in the value', () => {
    const numbers = maskCleaner('asdawasa ndsd.dos');
    expect(numbers).toBe('');
  });
});
