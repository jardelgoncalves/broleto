interface Banks {
  [cod: number]: string
}

export const identifyBank = (cod: string) => {
  const banks: Banks = {
    33: 'Banco Santander (Brasil) S.A',
    36: 'Banco Bradesco BBI S.A',
    341: 'Itaú Unibanco S.A',
    104: 'Caixa Econômica Federal',
  };

  return banks[Number(cod)] || 'Unknown';
};
