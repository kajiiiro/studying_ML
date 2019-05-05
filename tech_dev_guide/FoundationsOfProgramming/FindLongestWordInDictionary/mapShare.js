const R = require("ramda");

const mapShare = obj => {
  delete obj.c;
  obj.b = obj.a || obj.b;
  return obj;
};

console.log([
  mapShare({ a: "aaa", b: "bbb", c: "ccc" }),
  '{"a": "aaa", "b": "aaa"}',
  mapShare({ b: "xyz", c: "ccc" }),
  '{"b": "xyz"}',
  mapShare({ a: "aaa", c: "meh", d: "hi" }),
  '{"a": "aaa", "b": "aaa", "d": "hi"}',
  mapShare({ a: "xyz", b: "1234", c: "yo", z: "zzz" }),
  '{"a": "xyz", "b": "xyz", "z": "zzz"}',
  mapShare({ a: "xyz", b: "1234", c: "yo", d: "ddd", e: "everything" }),
  '{"a": "xyz", "b": "xyz", "d": "ddd", "e": "everything"}'
]);
