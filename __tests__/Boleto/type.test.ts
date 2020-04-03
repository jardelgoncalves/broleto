import { Boleto } from '../../src/index';

describe('Unit test Boleto/type method', () => {
  it('should return the billet type and / or subtype', () => {
    const boleto = new Boleto('33690.00009 00000.010009 10721.762432 1 81580000235000');
    const tp = boleto.type();

    expect(tp.type).toBe('BANCO');
    expect(tp.subtype).toBe('');
  });

  it('should return the billet type and / or subtype', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');
    const tp = boleto.type();

    expect(tp.type).toBe('ARRECADACAO');
    expect(tp.subtype).toBe('ARRECADACAO_ORGAOS_GOVERNAMENTAIS');
  });
});
