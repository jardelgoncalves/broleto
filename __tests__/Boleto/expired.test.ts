import { Boleto } from '../../src/index';

describe('Unit test Boleto/expired method', () => {
  it('should return if the boleto is due or not.', () => {
    const boleto = new Boleto('33690.00009 00000.010009 10721.762432 1 81580000235000');
    expect(boleto.expired()).toBe(true);
  });
  it('should return if the boleto has not expired.', () => {
    const boleto = new Boleto('34195.00008 01233.203189 64221.470004 5 84410000002000');
    expect(boleto.expired()).toBe(false);
  });
});
