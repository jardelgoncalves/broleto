import { Boleto } from '../../src/index';

describe('Unit test Boleto/amount method', () => {
  it('should return the amount if the formatted payment slip digitable line is valid', () => {
    const boleto = new Boleto('34195.00008 01233.203189 64221.470004 5 84410000002000');
    expect(boleto.amount()).toBe(20.00);
  });

  it('should return the amount if the digitable payment slip line without format is valid', () => {
    const boleto = new Boleto('341950000801233.20318964221470004584410000002000');
    expect(boleto.amount()).toBe(20.00);
  });

  it('should return the value of the digitable line of the agrrement payment slip', () => {
    const boleto = new Boleto('34195844100000020005000001233203186422147000');
    expect(boleto.amount()).toBe(20.00);
  });

  it('should return the barcode value of the agrrement payment slip', () => {
    const boleto = new Boleto('858600000004569503282005510708200426427234960440');
    expect(boleto.amount()).toBe(56.95);
  });

  it('should return the amount of the payment slip if the bar code is valid', () => {
    const boleto = new Boleto('85860000000569503282005107082004242723496044');
    expect(boleto.amount()).toBe(56.95);
  });

  it('should return the value even if the digitable line is 46 characters long', () => {
    const boleto = new Boleto('03399091456730000000600593201015973320000010000');
    expect(boleto.amount()).toBe(100);
  });
});
