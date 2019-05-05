const R = require("ramda");

const withoutString = (base, remove) => {
  const regex = new RegExp(remove, "ig");
  return base.replace(regex, "");
};

console.log([
  withoutString("Hello there", "llo"),
  "He there",
  withoutString("Hello there", "e"),
  "Hllo thr",
  withoutString("Hello there", "x"),
  "Hello there",
  withoutString("This is a FISH", "IS"),
  "Th  a FH",
  withoutString("THIS is a FISH", "is"),
  "TH  a FH",
  withoutString("THIS is a FISH", "iS"),
  "TH  a FH",
  withoutString("abxxxxab", "xx"),
  "abab",
  withoutString("abxxxab", "xx"),
  "abxab",
  withoutString("abxxxab", "x"),
  "abab",
  withoutString("xxx", "x"),
  "",
  withoutString("xxx", "xx"),
  "x",
  withoutString("xyzzy", "Y"),
  "xzz",
  withoutString("", "x"),
  "",
  withoutString("abcabc", "b"),
  "acac",
  withoutString("AA22bb", "2"),
  "AAbb",
  withoutString("1111", "1"),
  "",
  withoutString("1111", "11"),
  "",
  withoutString("MkjtMkx", "Mk"),
  "jtx",
  withoutString("Hi HoHo", "Ho"),
  "Hi "
]);
