import { clearMask } from "../src/utils/clear-mask.util";

describe("clearMask Function", () => {
  test("Removes the mask from a string with numbers and special characters", () => {
    const result = clearMask("12a34-b567&89#0");
    expect(result).toBe("1234567890");
  });

  test("Returns an empty string for an empty input", () => {
    const result = clearMask("");
    expect(result).toBe("");
  });

  test("Returns the same string for an input without a mask", () => {
    const result = clearMask("1234567890");
    expect(result).toBe("1234567890");
  });

  test("Removes the mask from a string with spaces and letters", () => {
    const result = clearMask(" 1a2b3c4 ");
    expect(result).toBe("1234");
  });

  test("Returns an empty string for an input without numbers", () => {
    const result = clearMask("abc");
    expect(result).toBe("");
  });
});
