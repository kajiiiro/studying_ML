const R = require("ramda");

const S = "abppplee";
const D = ["able", "ale", "apple", "bale", "kangaroo"];

const calculateCharacterIndexes = (characterIndexes, subsequence, index) => {
  // console.log(characterIndexes, subsequence, index);
  if (R.isEmpty(subsequence)) {
    // console.log("finish calculate");
    return characterIndexes;
  }
  const [first, ...restSubsequence] = subsequence;
  const indexes = characterIndexes[first];
  characterIndexes[first] = R.isNil(indexes)
    ? [index]
    : R.append(index, indexes);
  return calculateCharacterIndexes(characterIndexes, restSubsequence, ++index);
};

const characterIndexes = calculateCharacterIndexes({}, S, 0);

console.log("characterIndexes:", characterIndexes);

const isSubsequence = (characterIndexes, W) => {
  const clone = R.clone(characterIndexes);
  return R.map(character => {
    const indexes = clone[character];
    if (R.isNil(indexes)) {
      return -1;
    } else {
      const [first, ...restSubsequence] = indexes;
      clone[character] = restSubsequence;
      return R.isNil(first) ? -1 : first;
    }
  }, W).reduce(
    ({ isSubsequence, previous }, current) => ({
      isSubsequence: isSubsequence ? previous < current : false,
      previous: current,
      word: W
    }),
    { isSubsequence: true, previous: -1, word: W }
  );
};

const result = D.map(word => isSubsequence(characterIndexes, word))
  .filter(obj => obj.isSubsequence)
  .map(({ word }) => ({ word, size: word.length }))
  .reduce((previous, current) =>
    previous.size < current.size ? current : previous
  );

console.log("max subsequence word is", result.word);
