// Collection of functions to be used to learn unit testing
const someFunctions = () => {
  // Take a string and capitalize the first letter. Must be passed a string.
  const capitalize = (string) => {
    // Return empty string if passed one
    if (string === "") return "";
    // Return undefined if string otherwise falsy
    if (!string) return undefined;
    if (typeof string !== "string") return undefined;
    // Create a string to return using the passed string and trim it
    let capitalizedString = string.trimStart();
    // Capitalize the first character and append remaining string and return
    capitalizedString =
      capitalizedString.charAt(0).toUpperCase() + capitalizedString.slice(1);
    return capitalizedString;
  };

  // Take string and reverse it
  const reverseString = (string) => {
    // Return empty string if passed one
    if (string === "") return "";
    // Return undefined if string otherwise falsy
    if (!string) return undefined;
    if (typeof string !== "string") return undefined;
    // Create an array from the string
    const stringArray = string.split("");
    const reverseArray = stringArray.reverse();
    const reversedString = reverseArray.join("");
    return reversedString;
  };

  // Basic calculator
  const calculator = () => {
    const verifyNums = (num1, num2) => {
      if (
        typeof num1 === "number" &&
        !Number.isNaN(num1) &&
        typeof num2 === "number" &&
        !Number.isNaN(num2)
      ) {
        return true;
      }
      return false;
    };
    const add = (num1, num2) => {
      if (verifyNums(num1, num2)) return num1 + num2;
      return NaN;
    };
    const subtract = (num1, num2) => {
      if (verifyNums(num1, num2)) return num1 - num2;
      return NaN;
    };
    const divide = (num1, num2) => {
      if (verifyNums(num1, num2)) return num1 / num2;
      return NaN;
    };
    const multiply = (num1, num2) => {
      if (verifyNums(num1, num2)) return num1 * num2;
      return NaN;
    };

    return { add, subtract, divide, multiply };
  };

  const caesarCipher = (string, shift) => {
    // Creat a copy of the string as an array
    const strArray = string.split("");
  };

  return { capitalize, reverseString, calculator, caesarCipher };
};

export default someFunctions;
