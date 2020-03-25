export const identifyBank = (cod: string) => {
  const banks = [
    { cod: '033', bank: 'Banco Santander (Brasil) S.A.' },
    { cod: '036', bank: 'Banco Bradesco BBI S.A.' },
    { cod: '341', bank: 'Itaú Unibanco S.A.' },
  ];

  for (let i = 0; i < banks.length; i += 1) {
    if (banks[i].cod === cod) {
      return banks[i].bank;
    }
  }

  return 'Nenhum Banco encontrado!';
};
