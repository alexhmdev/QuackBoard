export const stringToObjectArray = (inputString) => {
  const objectStrings = inputString.match(/\{[^}]+\}/g);

  const objectArray = objectStrings.map((objectStr) => {
    const obj = {};
    const keyValuePairs = objectStr.match(/"([^"]+)"\s*:\s*([^,]+)/g);

    keyValuePairs.forEach((keyValuePair) => {
      const [key, value] = keyValuePair.split(':');
      const cleanedKey = key.replace(/"| /g, '');
      const cleanedValue = value.trim().replace(/"|}| /g, '');
      obj[cleanedKey] = isNaN(cleanedValue)
        ? cleanedValue
        : parseFloat(cleanedValue);
    });

    return obj;
  });

  return objectArray;
};
