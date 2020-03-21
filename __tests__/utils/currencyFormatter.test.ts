import { currencyFormatted } from '../../src/utils/index';

describe('Unit test utils/currencyFormatted function', () => {
  it('should return BRL currency formatted', () => {
    const currency = currencyFormatted(2000);
    expect(currency).toBe('R$ 2.000,00');
  });

  it('should return NaN if value is not a number', () => {
    const currency = currencyFormatted('value');
    expect(currency).toBe(NaN);
  });
});
