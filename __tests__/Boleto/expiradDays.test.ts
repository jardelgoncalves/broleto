import { Boleto } from '../../src/index';

describe('Unit test Boleto/expiredDays method', () => {
  it('should return the number of days if the bank slip is expired', () => {
    const boleto = new Boleto('33690.00009 00000.010009 10721.762432 1 81580000235000');

    expect(boleto.expiredDays() > 0).toBe(true);
  });

  it('should return 0 if the type is aggrement', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');

    expect(boleto.expiredDays()).toBe(0);
  });
});
