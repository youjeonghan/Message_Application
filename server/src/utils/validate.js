exports.checkPositiveNumber = (param) => {
  if (Number.isNaN(param) === false && +param > 0) return true;
  return false;
};
