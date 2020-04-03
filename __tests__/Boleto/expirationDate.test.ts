import { Boleto } from '../../src/index';

describe('Unit test Boleto/expirationDate method', () => {
  it('should return a date for bank slips.', () => {
    const boleto = new Boleto('33690.00009 00000.010009 10721.762432 1 81580000235000');
    const date = boleto.expirationDate();

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear() !== 1997).toBe(true);
  });

  it('should return a date for bank slips agreement', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');
    const date = boleto.expirationDate();

    expect(date instanceof Date).toBe(true);
    expect(date.getFullYear()).toBe(1997);
  });
});
