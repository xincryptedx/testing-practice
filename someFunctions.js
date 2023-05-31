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
    const add = (num1, num2) => num1 + num2;

    return { add };
  };

  return { capitalize, reverseString, calculator };
};

export default someFunctions;
