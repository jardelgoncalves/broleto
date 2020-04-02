import {
  barcodeAgreement,
  barcodeBank,
  digitableLineAgreement,
  digitableLineBank,
} from './paymentSlipUtils';
import { maskCleaner } from './maskCleaner';

export const isValid = (number: string, blocksValidate = false) => {
  const code = maskCleaner(number);

  if (Number(code.substr(0, 1)) === 8) {
    if (code.length === 44) return barcodeAgreement(code);
    if (code.length === 48) return digitableLineAgreement(code, blocksValidate);
  }

  if (code.length === 44) return barcodeBank(code);
  if (code.length === 47) return digitableLineBank(code, blocksValidate);

  return false;
};
