const R = require("ramda");

const maxSpan = array => {
  const ranges = array
    .map((num, index) => ({ num, index }))
    .reduce((ranges, { num, index }) => {
      const { min } = ranges[num] || {};
      ranges[num] = {
        num,
        min: typeof min === "number" ? min : index,
        max: index
      };
      return ranges;
    }, {});
  // console.log(ranges);

  if (R.isEmpty(ranges)) {
    return 0;
  }
  const result = Object.values(ranges)
    .map(range => ({
      ...range,
      range: range.max - range.min + 1
    }))
    .reduce((prev, curr) => (prev.range < curr.range ? curr : prev));
  return result.range;
};

console.log([
  maxSpan([1, 2, 1, 1, 3]),
  maxSpan([1, 4, 2, 1, 4, 1, 4]),
  maxSpan([1, 4, 2, 1, 4, 4, 4]),
  maxSpan([3, 3, 3]),
  maxSpan([3, 9, 3]),
  maxSpan([3, 9, 9]),
  maxSpan([3, 9]),
  maxSpan([3, 3]),
  maxSpan([]),
  maxSpan([1])
]);
