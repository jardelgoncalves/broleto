import {
  maskCleaner,
  typeMapping,
  differenceForNow,
  identifyBank,
  currencyFormatter,
  finesCalc,
  isValid,
  getValue,
  interstCalc,
  toBarcodeAgreement,
  toBarcodeBank,
} from '../utils/index';

export class Boleto {
  private number: string

  /**
   * @param {string} number codigo de barras ou linha digitável de boletos bancários ou arrecadação
   */
  constructor(number: string) {
    this.number = maskCleaner(number);

    if (this.number.length === 46) {
      this.number = `${this.number}0`;
    }
  }

  /**
   * Identifica o tipo da numeração informada, se é código de barras, linha digitável ou inválida
   *
   * @return {string} CODIGO DE BARRAS
   * @return {string} LINHA DIGITAVEL
   * @return {string} INVALIDA
   */
  codeType() {
    if (this.number.length === 44) return 'CODIGO DE BARRAS';
    if (this.number.length >= 46 && this.number.length <= 48) return 'LINHA DIGITAVEL';

    return 'INVALIDO';
  }

  /**
   * Identifica se o tipo do boleto é bancário ou arrecadação.
   * Em caso de arrecação é retornado também o subtipo
   *
   * @return {object} {BANCO, ''}
   * @return {object} {ARRECADACAO, ''}
   * @return {object} {ARRECADACAO, ARRECADACAO_PREFEITURA}
   * @return {object} {ARRECADACAO, CONVENIO_SANEAMENTO}
   * @return {object} {ARRECADACAO, CONVENIO_ENERGIA_ELETRICA_E_GAS}
   * @return {object} {ARRECADACAO, CONVENIO_TELECOMUNICACOES}
   * @return {object} {ARRECADACAO, ARRECADACAO_ORGAOS_GOVERNAMENTAIS}
   * @return {object} {ARRECADACAO, OUTROS}
   * @return {object} {ARRECADACAO, ARRECADACAO_TAXAS_DE_TRANSITO}
   */
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

  /**
   * Retorna a data de vencimento
   */
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

    return factor || factor === 0 ? new Date(febrabanDate.getTime() + factor) : febrabanDate;
  }

  /**
   * Verifica se o boleto esta vencido
   *
   * @return {boolean} true | false
   */
  expired() {
    const expirationDate = this.expirationDate();
    if (!expirationDate) return false;

    return differenceForNow(expirationDate) > 0;
  }

  /**
   * Retorna a quantdade de dias vencidos
   */
  expiredDays() {
    const expirationDate = this.expirationDate();
    return this.expired() ? differenceForNow(expirationDate) : 0;
  }

  /**
   * Retorna o nome do banco
   */
  banks() {
    const cod = this.number.substr(0, 3);

    return identifyBank(cod);
  }

  /**
   * Retorna o valor do boleto
   */
  amount() {
    const type = this.type();
    const codeType = this.codeType();

    return getValue(this.number, type.type, codeType);
  }

  /**
   * Retorna o valor do boleto formatado (BRL)
   */
  prettyAmount() {
    const value = this.amount();
    return currencyFormatter(value);
  }

  /**
   * Calcula e retorna o juros do boleto
   *
   * @param {interestValuenumber}  Porcentagem ou valor cobrado.
   * @param {number|boolean} expiredDays  Quantidade de dias vencidos, caso não informe a quantidade
   * ou informe false para este parâmetro, a quantidade de dias vencido é retirado do boleto.
   * @param {boolean} percent Forma de cobrança, por padrão é habilitado como porcentagem
   * caso seja em reais, atribua false
   * @param {boolean} month Informe se o juros é cobrado ao mês ou ao dia, para dia informe false
   *
   */
  interest(
    interestValue: number,
    expiredDays:number | boolean = false,
    percent = true,
    month = true,
  ) {
    const valueBoleto = this.amount();
    const { type } = this.type();

    const expirationDate = this.expirationDate();
    const days = (expiredDays === false) || (expiredDays === true)
      ? differenceForNow(expirationDate)
      : expiredDays;

    return interstCalc(valueBoleto, days, interestValue, type, percent, month);
  }

  /**
   * Calcula e retorna a multa do boleto
   *
   * @param {number} finesValue Porcentagem ou valor cobrada.
   * @param {boolean} percent Forma de cobrança, por padrão é habilitado como porcentagem
   * caso seja em reais, atribua false
   */
  fines(finesValue: number, percent = true) {
    const valueBoleto = this.amount();
    const expired = this.expired();
    const { type } = this.type();

    return finesCalc(valueBoleto, expired, type, finesValue, percent);
  }

  /**
   * Verifica se o boleto é valido
   *
   * @return {boolean} true | false
   */
  valid() {
    return isValid(this.number);
  }

  /**
   * Retorna um objeto com todas informações do boleto.
   *
   * @return {object | null}
   */
  toJSON() {
    const codeType = this.codeType();
    const { type } = this.type();


    if (codeType === 'INVALIDO') return null;

    let typ = '';
    if (type === 'BANCO') typ = codeType === 'LINHA DIGITAVEL' ? toBarcodeBank(this.number) : this.number;
    if (type === 'ARRECADACO') typ = codeType === 'LINHA DIGITAVEL' ? toBarcodeAgreement(this.number) : this.number;

    return {
      barcode:
      codeType,
      type: typ,
      expirationDate: this.expirationDate(),
      expired: this.expired(),
      expiredDays: this.expiredDays(),
      banks: this.banks(),
      amount: this.amount(),
      prettyAmount: this.prettyAmount(),
      valid: this.valid(),
    };
  }
}
