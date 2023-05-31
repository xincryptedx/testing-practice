import someFunctions from "./someFunctions";

test("capitalize should return a string with first character capitalized", () => {
  expect(someFunctions.capitalize("string")).toBe("String");
});
