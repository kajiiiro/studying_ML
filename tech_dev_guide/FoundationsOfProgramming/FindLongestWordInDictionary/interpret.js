const R = require("ramda");

const operatorFunctions = {
  "+": R.add,
  "-": R.subtract,
  "*": R.multiply
};

const interpret = (base, operators, rightOperands) => {
  const { result, foundUnexpectedOperator } = operators.reduce(
    (accumlator, operator, index) => {
      if (accumlator.foundUnexpectedOperator) {
        return accumlator;
      }
      const operatorFunction = operatorFunctions[operator];
      const leftOperand = accumlator.result;
      const rightOperand = rightOperands[index];
      if (operatorFunction == undefined) {
        return { ...accumlator, foundUnexpectedOperator: true };
      }
      const result = operatorFunction(leftOperand, rightOperand);
      return { ...accumlator, result };
    },
    { result: base, foundUnexpectedOperator: false }
  );
  return foundUnexpectedOperator ? -1 : result;
};

console.log([
  interpret(1, ["+"], [1]),
  2,
  interpret(4, ["-"], [2]),
  2,
  interpret(1, ["+", "*"], [1, 3]),
  6,
  interpret(3, ["*"], [4]),
  12,
  interpret(0, ["?"], [4]),
  -1,
  interpret(1, ["+", "*", "-"], [1, 3, 2]),
  4
]);
