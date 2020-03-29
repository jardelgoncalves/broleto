export const getValueForBankType = (number: string, codeType: string) => {
  let value = '0';

  if (codeType === 'CODIGO DE BARRAS') {
    value = number.substr(9, 10);
  }

  if (codeType === 'LINHA DIGITAVEL') {
    value = number.substr(-8, 8);
  }

  return Number((parseInt(value, 10) / 100.0).toFixed(2));
};

export const getValueForAgreementType = (number: string, codeType: string) => {
  let value = '0';
  if (codeType === 'CODIGO DE BARRAS') {
    value = number.substr(4, 11);
  }

  if (codeType === 'LINHA DIGITAVEL') {
    value = `${number.substr(0, 11)}${number.substring(12)}`.substr(4, 11);
  }

  return Number((parseInt(value, 10) / 100.0).toFixed(2));
};

export const getValue = (
  number: string,
  type: 'INVALIDO' | 'BANCO' | 'ARRECADACAO',
  codeType: 'LINHA DIGITAVEL' | 'CODIGO DE BARRAS',
) => {
  if (type === 'INVALIDO') return 0;
  if (type === 'BANCO') return getValueForBankType(number, codeType);
  if (type === 'ARRECADACAO') return getValueForAgreementType(number, codeType);
  return 0;
};
