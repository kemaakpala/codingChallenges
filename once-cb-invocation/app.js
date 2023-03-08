/**
 * @callback func
 * @return {Function}
 */
function once(func=() => {}) {
  // define initial values
  let ranOnce = false; // boolean
  let value;
  // return callback function
  return function (arguments) {
    if(!ranOnce) {
      value = func.apply(this, arguments);
      ranOnce = true;
    }

    return value;
  };
}