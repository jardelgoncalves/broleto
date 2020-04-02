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
