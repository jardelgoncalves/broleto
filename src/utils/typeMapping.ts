export const typeMapping = (option: number) => {
  const config = [
    { type: 'ARRECADACAO', subtype: '' },
    { type: 'ARRECADACAO', subtype: 'ARRECADACAO_PREFEITURA' },
    { type: 'ARRECADACAO', subtype: 'CONVENIO_SANEAMENTO' },
    { type: 'ARRECADACAO', subtype: 'CONVENIO_ENERGIA_ELETRICA_E_GAS' },
    { type: 'ARRECADACAO', subtype: 'CONVENIO_TELECOMUNICACOES' },
    { type: 'ARRECADACAO', subtype: 'ARRECADACAO_ORGAOS_GOVERNAMENTAIS' },
    { type: 'ARRECADACAO', subtype: 'OUTROS' },
    { type: 'ARRECADACAO', subtype: 'ARRECADACAO_TAXAS_DE_TRANSITO' },
    { type: 'ARRECADACAO', subtype: '' },
    { type: 'ARRECADACAO', subtype: 'OUTROS' },
    { type: 'ARRECADACAO', subtype: '' },
  ];
  return config[option % 10];
};
