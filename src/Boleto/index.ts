import {
  maskCleaner,
  typeMapping,
  differenceForNow,
  identifyBank,
  currencyFormatter,
  isValid,
  getValue,
} from '../utils/index';

export class Boleto {
  private number: string

  constructor(number: string) {
    this.number = maskCleaner(number);

    if (this.number.length === 46) {
      this.number = `${this.number}0`;
    }
  }

  codeType() {
    if (this.number.length === 44) return 'CODIGO DE BARRAS';
    if (this.number.length >= 46 && this.number.length <= 48) return 'LINHA DIGITAVEL';

    return 'INVALIDO';
  }

  type() {
    const type = this.number.substr(0, 2);

    if (Number(type[0]) === 8) {
      return typeMapping(Number(type));
    }

    return {
      type: 'BANCO',
      subtype: '',
    };
  }

  expirationDate() {
    const codeType = this.codeType();
    const typePaymentSlip = this.type();
    const febrabanDate = new Date('1997-10-07');

    let factor: number | null = null;

    if (codeType === 'LINHA DIGITAVEL') {
      const days = Number(this.number.substr(33, 4));
      factor = typePaymentSlip.type === 'BANCO'
        ? days * (24 * 60 * 60 * 1000)
        : 0;
    }

    if (codeType === 'CODIGO DE BARRAS') {
      const days = Number(this.number.substr(5, 4));
      factor = typePaymentSlip.type === 'BANCO'
        ? days * (24 * 60 * 60 * 1000)
        : 0;
    }

    return factor || factor === 0 ? new Date(febrabanDate.getTime() + factor) : null;
  }

  expired() {
    const expirationDate = this.expirationDate();
    if (!expirationDate) return null;

    return differenceForNow(expirationDate) > 0;
  }

  banks() {
    const cod = this.number.substr(0, 3);

    return identifyBank(cod);
  }

  amount() {
    const type = this.type();
    const codeType = this.codeType();

    return getValue(this.number, type.type, codeType);
  }

  prettyAmount() {
    const value = this.amount();
    return currencyFormatter(value);
  }

  valid() {
    return isValid(this.number);
  }
}
