import someFunctions from "./someFunctions";

// capitalize tests
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

// reverseString tests
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
