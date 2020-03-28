import { module10, module11ForAgreementType, module11ForBankType } from './modules';
import { toBarcodeBank, toBarcodeAgreement } from './toBarcode';

type ModuleCalc = (number: string) => number;

export const barcodeBank = (number: string) => {
  if (number.length !== 44) return false;

  const DV = number.substr(4, 1);
  const block = number.substr(0, 4) + number.substr(5);

  return module11ForBankType(block) === Number(DV);
};

export const barcodeAgreement = (number: string) => {
  if (number.length !== 44 || Number(number.substr(0, 1)) !== 8) return false;

  const coin = Number(number.substr(2, 1));
  const DV = Number(number.substr(3, 1));
  const block = number.substr(0, 3) + number.substr(4);

  let moduleRef: null | ModuleCalc = null;


  if (coin === 6 || coin === 7) moduleRef = module10;
  if (coin === 8 || coin === 9) moduleRef = module11ForAgreementType;
  if (!moduleRef) return false;

  return moduleRef(block) === DV;
};

export const digitableLineBank = (number: string, blockValidate = false) => {
  if (number.length !== 47) return false;
  const blocks = [
    {
      num: number.substr(0, 9),
      DV: number.substr(9, 1),
    },
    {
      num: number.substr(10, 20),
      DV: number.substr(20, 1),
    },
    {
      num: number.substr(21, 31),
      DV: number.substr(31, 1),
    },
  ];

  const blocksValidate = blockValidate
    ? blocks.every((e) => module10(e.num) === Number(e.DV))
    : true;
  const checksum = barcodeBank(toBarcodeBank(number));
  return blocksValidate && checksum;
};

export const digitableLineAgreement = (number: string, blockValidate = false) => {
  if (number.length !== 48 || Number(number.substr(0, 1)) !== 8) return false;

  const validDV = barcodeAgreement(toBarcodeAgreement(number));
  if (!blockValidate) return validDV;

  const coin = Number(number.substr(2, 1));

  let moduleRef: null | ModuleCalc = null;

  if (coin === 6 || coin === 7) moduleRef = module10;
  if (coin === 8 || coin === 9) moduleRef = module11ForAgreementType;
  if (!moduleRef) return false;

  const blocks = Array.from({ length: 4 }, (v, index) => {
    const start = (11 * (index)) + index;
    const end = (11 * (index + 1)) + index;

    return {
      num: number.substr(start, end),
      DV: number.substr(end, end + 1),
    };
  });

  const validblocks = blocks.every((e) => moduleRef && moduleRef(e.num) === Number(e.DV));
  return validblocks && validDV;
};
