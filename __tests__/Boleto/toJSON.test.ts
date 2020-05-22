import { Boleto } from '../../src/index';

describe('Unit test Boleto/toJSON method', () => {
  it('should return an object with all the information', () => {
    const boleto = new Boleto('34195.00008 01233.203189 64221.470004 5 84410000002000');
    const info = boleto.toJSON();

    expect(info !== null).toBe(true);

    if (info !== null) {
      expect(info.barcode).toBe('34195844100000020005000001233203186422147000');
      expect(info.banks).toBe('Itaú Unibanco S.A');
      expect(info.type).toBe('BANCO');
      expect(info.expirationDate instanceof Date).toBe(true);
      expect(info.expired).toBe(false);
      expect(typeof info.expiredDays === 'number').toBe(true);
      expect(info.amount).toBe(20);
      expect(info.valid).toBe(true);
    }
  });

  it('should return an object with all the information', () => {
    const boleto = new Boleto('858100000005572503282005800708200789543988924230');
    const info = boleto.toJSON();

    expect(info !== null).toBe(true);

    if (info !== null) {
      expect(info.barcode).toBe('85810000000572503282008007082007854398892423');
      expect(info.banks).toBe('Unknown');
      expect(info.type).toBe('ARRECADACAO');
      expect(info.codeType).toBe('LINHA DIGITAVEL');
      expect(info.expirationDate instanceof Date).toBe(true);
      expect(info.expired).toBe(false);
      expect(info.expiredDays).toBe(0);
      expect(info.amount).toBe(57.25);
      expect(info.valid).toBe(true);
    }
  });
  it('should return an object with all the information with boleto expired', () => {
    const boleto = new Boleto('34191091070000013555851122200002157810000115300');
    const info = boleto.toJSON();

    expect(info !== null).toBe(true);

    if (info !== null) {
      expect(info.barcode).toBe('34191578100001153001091000000135555112220000');
      expect(info.banks).toBe('Itaú Unibanco S.A');
      expect(info.type).toBe('BANCO');
      expect(info.codeType).toBe('LINHA DIGITAVEL');
      expect(info.expirationDate instanceof Date).toBe(true);
      expect(info.expired).toBe(true);
      expect(info.amount).toBe(1153);
      expect(info.valid).toBe(true);
    }
  });

  it('should return null if boleto is invalid', () => {
    const boleto = new Boleto('34195.00008 01233.203189');
    const info = boleto.toJSON();

    expect(info).toBe(null);
  });
});
