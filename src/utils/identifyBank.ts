interface Banks {
  [cod: number]: string
}

export const identifyBank = (cod: string) => {
  const banks: Banks = {
    33: 'Banco Santander (Brasil) S.A',
    36: 'Banco Bradesco BBI S.A',
    341: 'Itaú Unibanco S.A',
    104: 'Caixa Econômica Federal',
    1: 'Banco do Brasil',
    7: 'BNDES',
    69: 'Crefisa',
    77: 'Banco Inter',
    102: 'XP Investimentos',
    140: 'Easynvest',
    197: 'Stone',
    208: 'BTG Pactual',
    212: 'Banco Original',
    237: 'Bradesco',
    260: 'Nu Pagamentos',
    422: 'Banco Safra',
    633: 'Banco Rendimento',
    652: 'Itaú Unibanco',
    735: 'Banco Neon',
    739: 'Banco Cetelem',
    745: 'Citibank',
  };

  return banks[Number(cod)] || 'Unknown';
};
