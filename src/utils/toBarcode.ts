export const toBarcodeBank = (number: string) => number.replace(
  /^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/,
  '$1$5$2$3$4',
);

export const toBarcodeAgreement = (number: string) => {
  let barcode = '';

  for (let index = 0; index < 4; index += 1) {
    const start = (11 * (index)) + index;
    const end = (11 * (index + 1)) + index;

    barcode += number.substring(start, end);
  }
  return barcode;
};
