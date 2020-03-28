import { Boleto } from '../../src/index';

describe('Unit test Boleto/isValid method', () => {
  it('should return true if the bank\'s payment slip\'s digitable line is valid.', () => {
    const boleto = new Boleto('33690.00009 00000.010009 10721.762432 1 81580000235000');
    expect(boleto.valid()).toBe(true);
  });

  it('should return true if the bank payment slip bar code is valid.', () => {
    const boleto = new Boleto('34195844100000020005000001233203186422147000');
    expect(boleto.valid()).toBe(true);
  });

  it('should return true if the agreement\'s payable digitable line is valid.', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');
    expect(boleto.valid()).toBe(true);
  });
});
