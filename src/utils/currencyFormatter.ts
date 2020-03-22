export const currencyFormatter = (value: number) => {
  if (typeof value !== 'number') return NaN;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
