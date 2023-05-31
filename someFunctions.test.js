import someFunctions from "./someFunctions";

describe("caapitalize", () => {
  // Functionality
  test("capitalize should return a string with first character capitalized", () => {
    expect(someFunctions().capitalize("string")).toBe("String");
  });

  // Edge cases
  test("passing string with spaces should work", () => {
    expect(someFunctions().capitalize(" string")).toBe("String");
  });

  test("passing empty string should return empty string", () => {
    expect(someFunctions().capitalize("")).toBe("");
  });

  // Errors
  test("passing undefined returns undefined", () => {
    expect(someFunctions().capitalize(undefined)).toBeUndefined();
  });

  test("passing null returns undefined", () => {
    expect(someFunctions().capitalize(null)).toBeUndefined();
  });

  test("passing value other than string returns undefined", () => {
    expect(someFunctions().capitalize(57)).toBeUndefined();
  });
});

describe("reverseString", () => {
  // Functionality
  test("passed string should be returned in reversed order", () => {
    expect(someFunctions().reverseString("abcd")).toBe("dcba");
  });

  // Edge cases
  test("internal spaces shouldn't impact outcome", () => {
    expect(someFunctions().reverseString("ab c de f")).toBe("f ed c ba");
  });

  test("leading/trailing spaces sholdn't impact outcome", () => {
    expect(someFunctions().reverseString(" abcdef ")).toBe(" fedcba ");
  });

  test("empty string returns empty string", () => {
    expect(someFunctions().reverseString("")).toBe("");
  });

  // Errors
  test("passing undefined returns undefined", () => {
    expect(someFunctions().reverseString(undefined)).toBeUndefined();
  });

  test("passing null returns undefined", () => {
    expect(someFunctions().reverseString(null)).toBeUndefined();
  });

  test("passing value other than string returns undefined", () => {
    expect(someFunctions().reverseString(57)).toBeUndefined();
  });
});

describe("calculator", () => {
  // Functionality
  test("add should correctly add two numbers", () => {
    expect(someFunctions().calculator().add(2, 2)).toBe(4);
  });

  test("subtract should correctly subtract two numbers", () => {
    expect(someFunctions().calculator().subtract(4, 1)).toBe(3);
  });

  test("divide should correctly divide two numbers", () => {
    expect(someFunctions().calculator().divide(10, 2)).toBe(5);
  });

  test("multiply should correctly multiply two numbers", () => {
    expect(someFunctions().calculator().multiply(2, 3)).toBe(6);
  });

  // Errors
  test("passing undefined returns NaN", () => {
    expect(someFunctions().calculator().multiply(2, undefined)).toBe(NaN);
  });

  test("passing null returns NaN", () => {
    expect(someFunctions().calculator().divide(2, null)).toBe(NaN);
  });

  test("passing string returns NaN", () => {
    expect(someFunctions().calculator().subtract(2, "4")).toBe(NaN);
  });

  test("passing bool returns NaN", () => {
    expect(someFunctions().calculator().add(2, true)).toBe(NaN);
  });
});

describe("caesarCipher", () => {
  // Functionality
  test("passed string returned shifted by shift factor", () => {
    expect(someFunctions().caesarCipher("abcd", 2)).toBe("cdef");
  });

  test("works with lowercase or capitals", () => {
    expect(someFunctions().caesarCipher("aBcD", 2)).toBe("cDeF");
  });

  test("wraps letters when coming to z back to a", () => {
    expect(someFunctions().caesarCipher("xyzXYZ", 2)).toBe("zabZAB");
  });

  test("other characters shouldn't be affected", () => {
    expect(someFunctions().caesarCipher("x!y#z$", 2)).toBe("z!a#b$");
  });

  test("negative values for shift also work", () => {
    expect(someFunctions().caesarCipher("efg", -2)).toBe("cde");
  });

  // Edge cases
  test("high values for shift work", () => {
    expect(someFunctions().caesarCipher("xyz", 2602)).toBe("zab");
  });

  test("passing float for shift will trim the decimal value", () => {
    expect(someFunctions().caesarCipher("efg", 2.999999999)).toBe("ghi");
  });

  // Errors
  test("passing string for shift will return undefined", () => {
    expect(someFunctions().caesarCipher("efg", "2")).toBeUndefined();
  });

  test("passing undefined for shift will return undefined", () => {
    expect(someFunctions().caesarCipher("efg", undefined)).toBeUndefined();
  });

  test("passing null for shift will return undefined", () => {
    expect(someFunctions().caesarCipher("efg", null)).toBeUndefined();
  });

  test("passing bool for shift will return undefined", () => {
    expect(someFunctions().caesarCipher("abc", true)).toBeUndefined();
  });

  test("passing number for string will return undefined", () => {
    expect(someFunctions().caesarCipher(5, 3)).toBeUndefined();
  });

  test("passing undefined for string will return undefined", () => {
    expect(someFunctions().caesarCipher(undefined, 4)).toBeUndefined();
  });

  test("passing null for string will return undefined", () => {
    expect(someFunctions().caesarCipher(null, 5)).toBeUndefined();
  });

  test("passing bool for string will return undefined", () => {
    expect(someFunctions().caesarCipher(false, 5)).toBeUndefined();
  });
});

describe("analyzeArray", () => {
  // Functionality
  test("takes an array of numbers and returns results object", () => {
    expect(someFunctions().analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("average works with floats", () => {
    expect(
      someFunctions().analyzeArray([1.5, 8.5, 3.5, 4.5, 2.5, 6.555]).average
    ).toBeCloseTo(4.5091);
  });

  test("only numbers are considered with other values discarded", () => {
    expect(
      someFunctions().analyzeArray([
        1,
        null,
        8,
        "a string!",
        3,
        true,
        4,
        false,
        2,
        undefined,
        6,
      ])
    ).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  // Errors
  test("empty array should return undefined", () => {
    expect(someFunctions().analyzeArray([])).toBeUndefined();
  });

  test("null arrayToAnalyze should return undefined", () => {
    expect(someFunctions().analyzeArray(null)).toBeUndefined();
  });

  test("undefined arrayToAnalyze should return undefined", () => {
    expect(someFunctions().analyzeArray(undefined)).toBeUndefined();
  });

  test("non array params for arrayToAnalyze should return undefined", () => {
    expect(someFunctions().analyzeArray(54)).toBeUndefined();
  });
});
