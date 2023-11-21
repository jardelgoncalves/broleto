import { digitableLineTransform } from "../src/utils/digitable-line-transform.util";
describe("toBarcodeBank method", () => {
  test("Converts a bank-related LINHA DIGITÁVEL number to barcode format", () => {
    const result = digitableLineTransform.toBarcodebank(
      "33690000090000001000910721762432181580000235000",
    );
    expect(result).toBe("33691815800002350000000000000010001072176243");
  });

  test("Handles empty input gracefully", () => {
    const result = digitableLineTransform.toBarcodebank("");
    expect(result).toBe("");
  });

  test("Handles input with no LINHA DIGITÁVEL format", () => {
    const result = digitableLineTransform.toBarcodebank("1234567890");
    expect(result).toBe("1234567890");
  });
});

describe("toBarcodeAgreement method", () => {
  test("Converts an agreement-related LINHA DIGITÁVEL number to barcode format", () => {
    const result = digitableLineTransform.toBarcpdeAgreement(
      "858100000005572503282005800708200789543988924230",
    );
    expect(result).toBe("85810000000572503282008007082007854398892423");
  });

  test("Handles empty input gracefully", () => {
    const result = digitableLineTransform.toBarcpdeAgreement("");
    expect(result).toBe("");
  });

  test("Handles input with no LINHA DIGITÁVEL format", () => {
    const result = digitableLineTransform.toBarcpdeAgreement("1234567890");
    expect(result).toBe("1234567890");
  });
});
