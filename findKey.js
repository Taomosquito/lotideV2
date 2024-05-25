// INPUT:
// * The functions first argument will be an object same as ByValues implementation.
// * The functions second argument will be a callback.

// OUTPUT:
// * return the first key for which the callback returns a truthy value.

// DETAILS:
// * A large percentage of this code will be the same as the ByValue implemntation try to change as little as possible to ensure the minimal amount of debugging.

// assertEqual FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKey FUNCTION IMPLEMENTATION BELOW:
const findKey = function(object, callback) {
  const tempObjKeys = Object.keys(object);
  for (let i = 0; i < tempObjKeys.length; i++) {
    const tempObjKey = tempObjKeys[i];
    const objRefKey = object[tempObjKey];
    if (callback(objRefKey)) {
      return tempObjKey;
    }
  }
  return undefined;
};

// TESTING SET-UP:
const sampleObject = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};
const sampleNestedObject = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
const sampleNestedObject2 = {
  a: { stars: 1 },
  b: { stars: 2 },
  c: { stars: 3 },
  d: { stars: 4 },
  e: { stars: 5 },
  f: { stars: 6 },
  g: { stars: 7 },
  h: { stars: 8 },
  i: { stars: 9 },
  j: { stars: 10 },
  k: { stars: 11 },
  l: { stars: 12 },
  m: { stars: 13 },
  n: { stars: 14 },
  o: { stars: 15 },
  p: { stars: 16 },
  q: { stars: 17 },
  r: { stars: 18 },
  s: { stars: 19 },
  t: { stars: 20 },
  u: { stars: 21 },
  v: { stars: 22 },
  w: { stars: 23 },
  x: { stars: 24 },
  y: { stars: 25 },
  z: { stars: 26 },
};

// TESTING BELOW:
assertEqual(findKey(sampleNestedObject, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(sampleNestedObject, x => x.stars === 2), "noma");
assertEqual(findKey(sampleNestedObject, x => x.stars === 3), "Akaleri");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 1), "a");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 2), "b");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 3), "c");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 4), "d");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 5), "e");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 6), "f");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 7), "g");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 8), "h");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 9), "i");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 10), "j");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 11), "k");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 12), "l");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 13), "m");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 14), "n");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 15), "o");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 16), "p");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 17), "q");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 18), "r");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 19), "s");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 20), "t");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 21), "u");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 22), "v");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 23), "w");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 24), "x");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 25), "y");
assertEqual(findKey(sampleNestedObject2, x => x.stars === 26), "z");