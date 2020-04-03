import { Boleto } from '../../src/index';

describe('Unit test Boleto/codeType method', () => {
  it('should return the type of numbering informed.', () => {
    const boleto = new Boleto('33690.00009 00000.010009 10721.762432 1 81580000235000');
    expect(boleto.codeType()).toBe('LINHA DIGITAVEL');
  });

  it('should return the type of numbering informed', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');
    expect(boleto.codeType()).toBe('LINHA DIGITAVEL');
  });

  it('should return the type of numbering informed', () => {
    const boleto = new Boleto('34195844100000020005000001233203186422147000');
    expect(boleto.codeType()).toBe('CODIGO DE BARRAS');
  });

  it('should return true if the bank payment slip bar code is valid.', () => {
    const boleto = new Boleto('3419584410000002000500000');
    expect(boleto.codeType()).toBe('INVALIDO');
  });
});
