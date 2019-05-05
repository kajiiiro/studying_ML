const R = require("ramda");

const limit = 21;

const blackjack = (sum1, sum2) => {
  if (limit < sum1 && limit < sum2) {
    return 0;
  }
  if (limit < sum1) {
    return sum2;
  }
  if (limit < sum2) {
    return sum1;
  }
  return sum1 < sum2 ? sum2 : sum1;
};

console.log([
  blackjack(19, 21),
  21,
  blackjack(21, 19),
  21,
  blackjack(19, 22),
  19,
  blackjack(22, 19),
  19,
  blackjack(22, 50),
  0,
  blackjack(22, 22),
  0,
  blackjack(33, 1),
  1,
  blackjack(1, 2),
  2,
  blackjack(34, 33),
  0,
  blackjack(17, 19),
  19,
  blackjack(18, 17),
  18,
  blackjack(16, 23),
  16,
  blackjack(3, 4),
  4,
  blackjack(3, 2),
  3,
  blackjack(21, 20),
  21
]);
