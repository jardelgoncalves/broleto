export const digitableLineTransform = {
  /**
   * Converts a bank-related (bank type) LINHA DIGITÁVEL number to its corresponding barcode format by reorganizing its components.
   *
   * @param {string} number - The bank-related number to be converted to a barcode.
   * @returns {string} The converted barcode.
   *
   * @example
   * const result = toBarcode.bank('33690000090000001000910721762432181580000235000');
   * console.log(result); // Output: '33691815800002350000000000000010001072176243'
   */
  toBarcodeBank: (number: string) =>
    number.replace(
      /^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/,
      "$1$5$2$3$4",
    ),

  /**
   * Converts a agreement-related (agreement type) LINHA DIGITÁVEL number to its corresponding barcode format by reorganizing its components.
   *
   * @param {string} number - The agreement-related number to be converted to a barcode.
   * @returns {string} The converted barcode.
   *
   * @example
   * const result = toBarcode.agreement('858100000005572503282005800708200789543988924230');
   * console.log(result); // Output: '85810000000572503282008007082007854398892423'
   */
  toBarcpdeAgreement: (number: string) => {
    let barcode = "";

    for (let index = 0; index < 4; index += 1) {
      const start = 11 * index + index;
      const end = 11 * (index + 1) + index;

      barcode += number.substring(start, end);
    }
    return barcode;
  },
};
