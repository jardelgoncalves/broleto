export const maskCleaner = (barcode: string) => {
  const onlyNumbers = barcode.match(/\d+/g);
  return !onlyNumbers ? '' : onlyNumbers.join('');
};
