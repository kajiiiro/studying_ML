const R = require("ramda");

const canBalance = (original, restArray = [], sumOfLeft, sumOfRight) => {
  console.log(original, restArray, sumOfLeft, sumOfRight);
  if (sumOfLeft == undefined) {
    // initialize
    const [first, ...rest] = original;
    const sum = original.reduce(R.add, 0);
    return canBalance(original, rest, first, sum - first);
  }
  if (sumOfLeft === sumOfRight) {
    return true;
  }
  const [first, ...rest] = restArray;
  return R.isEmpty(rest)
    ? false
    : canBalance(original, rest, sumOfLeft + first, sumOfRight - first);
};

console.log([
  canBalance([1, 1, 1, 2, 1]),
  true,
  canBalance([2, 1, 1, 2, 1]),
  false,
  canBalance([10, 10]),
  true,
  canBalance([10, 0, 1, -1, 10]),
  true,
  canBalance([1, 1, 1, 1, 4]),
  true,
  canBalance([2, 1, 1, 1, 4]),
  false,
  canBalance([2, 3, 4, 1, 2]),
  false,
  canBalance([1, 2, 3, 1, 0, 2, 3]),
  true,
  canBalance([1, 2, 3, 1, 0, 1, 3]),
  false,
  canBalance([1]),
  false,
  canBalance([1, 1, 1, 2, 1]),
  true
]);
