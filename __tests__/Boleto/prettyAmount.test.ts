import { Boleto } from '../../src/index';

describe('Unit test Boleto/prettyAmount method', () => {
  it('should return the pretty amount if the formatted payment slip digitable line is valid', () => {
    const boleto = new Boleto('34195.00008 01233.203189 64221.470004 5 84410000002000');
    expect(boleto.prettyAmount()).toBe('R$ 20,00');
  });

  it('should return the pretty amount if the digitable payment slip line without format is valid', () => {
    const boleto = new Boleto('341950000801233.20318964221470004584410000002000');
    expect(boleto.prettyAmount()).toBe('R$ 20,00');
  });

  it('should return the pretty amount of the payment slip if the bar code is valid', () => {
    const boleto = new Boleto('34195844100000020005000001233203186400023500');
    expect(boleto.prettyAmount()).toBe('R$ 20,00');
  });

  it('should return null if payment slip is invalid', () => {
    const boleto = new Boleto('11110000101111.11111111111111114584410000002000');
    expect(boleto.prettyAmount()).toBe(null);
  });
});
