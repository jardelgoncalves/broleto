export const interstCalc = (
  valueBoleto: number,
  daysExpired: number,
  feesValue: number,
  type: string,
  percent: boolean,
  month: boolean,
) => {
  if (type === 'BANCO') {
    if (!feesValue && typeof feesValue !== 'number') {
      throw new TypeError('Tipo de valor informado para juros é inválido.');
    }
    if (feesValue && percent && month) {
      return (((feesValue / 100) / 30) * daysExpired) * valueBoleto;
    }
    if (feesValue && percent && !month) {
      return ((feesValue / 100) * daysExpired) * valueBoleto;
    }
    if (feesValue && !percent && month) {
      return ((feesValue / 30) * daysExpired);
    }
    if (feesValue && !percent && !month) {
      return (feesValue * daysExpired);
    }
  }

  return 0;
};

export const finesCalc = (
  valueBoleto: number,
  expired: boolean,
  type: string,
  finesValue: number,
  percent: boolean,
) => {
  if (type === 'BANCO' && expired) {
    if (!finesValue) {
      return 'Informe o valor';
    }
    if (finesValue && percent) {
      if (finesValue <= 0 || finesValue > 2) {
        throw new Error('Porcentagem para multa ultrapassa o valor máximo permitido.');
      }
      return (finesValue / 100) * valueBoleto;
    }
    if (finesValue && !percent) {
      if (finesValue > (0.02 * valueBoleto)) {
        throw new Error('Valor para multa ultrapassa o valor máximo permitido.');
      }

      return finesValue;
    }
  }

  return 0;
};
