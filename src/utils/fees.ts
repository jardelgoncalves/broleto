export const interstCalc = (
  valueBoleto: number,
  daysExpired: number,
  feesValue: number,
  type: string,
  percent: boolean,
  month: boolean,
) => {
  if (type === 'BANCO') {
    if (!feesValue) {
      return 'Informe o valor';
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
      return (finesValue <= 0 || finesValue > 2) ? 'Multa inválida' : (finesValue / 100) * valueBoleto;
    }
    if (finesValue && !percent) {
      return finesValue > (0.02 * valueBoleto) ? 'Multa inválida' : finesValue;
    }
  }

  return 0;
};
