// Collection of functions to be used to learn unit testing
const someFunctions = () => {
  // Take a string and capitalize the first letter. Must be passed a string.
  const capitalize = (string) => {
    // Return undefined if string falsy or not string
    if (!string) return undefined;
    if (typeof string !== "string") return undefined;
    // Create a string to return using the passed string and trim it
    let capitalizedString = string.trimStart();
    // Capitalize the first character and append remaining string and return
    capitalizedString =
      capitalizedString.charAt(0).toUpperCase() + capitalizedString.slice(1);
    return capitalizedString;
  };

  return { capitalize };
};

export default someFunctions;
