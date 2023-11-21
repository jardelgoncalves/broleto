/**
 * Removes non-numeric characters from a given barcode string.
 *
 * @param {string} barcode - The input barcode string with or without a mask.
 * @returns {string} The barcode string with only numeric characters.
 *
 * @example
 * const result = clearMask('33690.00009 00000.010009 10721.762432 1 81580000235000');
 * console.log(result); // Output: '33690000090000001000910721762432181580000235000'
 */
export const clearMask = (barcode: string) => {
  if (!barcode) return barcode;

  const numbers = barcode.match(/\d+/g);
  return !!numbers ? numbers.join("") : "";
};
