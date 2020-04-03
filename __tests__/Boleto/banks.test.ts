import { Boleto } from '../../src/index';

describe('Unit test Boleto/banks method', () => {
  it('should return bank name', () => {
    const boleto = new Boleto('34195.00008 01233.203189 64221.470004 5 84410000002000');

    expect(boleto.banks()).toBe('Itaú Unibanco S.A');
  });

  it('should return Unknown type is aggrement or not on our list', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');

    expect(boleto.banks()).toBe('Unknown');
  });
});
