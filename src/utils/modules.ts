
export const module10 = (block: string) => {
  const summation = block.split('').reverse().reduce((acc, current, i) => {
    let sum = Number(current) * (((i + 1) % 2) + 1);
    sum = (sum > 9 ? Math.trunc(sum / 10) + (sum % 10) : sum);
    return acc + sum;
  }, 0);

  return (Math.ceil(summation / 10) * 10) - summation;
};

export const module11ForBankType = (block: string) => {
  let factor = 2;

  const summation = block.split('').reverse().reduce((acc, current) => {
    const sum = Number(current) * factor;
    factor = factor === 9 ? 2 : factor + 1;
    return acc + sum;
  }, 0);

  const rest = summation % 11;

  const DV = 11 - rest;

  if (DV === 0 || DV === 10 || DV === 11) return 1;
  return DV;
};

export const module11ForAgreementType = (block: string) => {
  let factor = 2;

  const summation = block.split('').reverse().reduce((acc, current) => {
    const sum = Number(current) * factor;
    factor = factor === 9 ? 2 : factor + 1;
    return acc + sum;
  }, 0);

  const rest = summation % 11;

  if (rest === 0 || rest === 1 || rest === 10) {
    return rest === 0 || rest === 1 ? 0 : 1;
  }

  return 11 - rest;
};
