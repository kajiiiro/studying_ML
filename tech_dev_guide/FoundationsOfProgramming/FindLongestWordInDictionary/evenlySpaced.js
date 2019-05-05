const R = require("ramda");

const limit = 21;

const evenlySpaced = (a, b, c) => {
  const [small, medium, large] = [a, b, c].sort((a, b) => a - b);
  console.log(small, medium, large);
  return medium - small === large - medium;
};

console.log([
  evenlySpaced(2, 4, 6),
  true,
  evenlySpaced(4, 6, 2),
  true,
  evenlySpaced(4, 6, 3),
  false,
  evenlySpaced(6, 2, 4),
  true,
  evenlySpaced(6, 2, 8),
  false,
  evenlySpaced(2, 2, 2),
  true,
  evenlySpaced(2, 2, 3),
  false,
  evenlySpaced(9, 10, 11),
  true,
  evenlySpaced(10, 9, 11),
  true,
  evenlySpaced(10, 9, 9),
  false,
  evenlySpaced(2, 4, 4),
  false,
  evenlySpaced(2, 2, 4),
  false,
  evenlySpaced(3, 6, 12),
  false,
  evenlySpaced(12, 3, 6),
  false
]);
