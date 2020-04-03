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
    if (!finesValue && typeof finesValue !== 'number') {
      throw new TypeError('Tipo de valor informado para multa é inválido.');
    }

    if (finesValue && percent) return (finesValue / 100) * valueBoleto;
    if (finesValue && !percent) return finesValue;
  }

  return 0;
};
