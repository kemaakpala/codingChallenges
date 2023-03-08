/**
 * @param {Object} object
 * @param {string|Array<string>} path
 * @param {*} defaultValue
 * @return {*}
 */
function get(object, path, defaultValue) {

  const [firstKey, ...remainingKeys] = path.split('.');
  let currentValue = object[firstKey];
  while (currentValue !== undefined && remainingKeys.length > 0) {
    const nextKey = remainingKeys.shift();
    if (!currentValue.hasOwnProperty(nextKey)) {
      return undefined;
    }
    currentValue = currentValue[nextKey];
  }
  return currentValue !== undefined ? currentValue : defaultValue;
}

// or more verbose solution

function get2(object, path, defaultValue) {
  const [firstKey, ...remainingKeys] = path.split('.');
  let currObj = object[firstKey];
  if (currObj === undefined) return defaultValue;
  if (currObj !== undefined && remainingKeys.length > 0) {
    const remainingKeysArr = remainingKeys.slice();

    for (const key of remainingKeysArr) {
      if (!currObj.hasOwnProperty(key)) {
        return;
      };
      currObj = currObj[key];
    }

    return currObj;
  }

  return currObj;
}