// INPUT:
// * Takes a parameter for an object.
// * Takes a parameter for a value to search for.

// OUTPUT:
// * Return the first key in the given object that which contains the given value.

// DETAILS:
// * Making use of Object.Keys is the simplest means of learning as it enables my most practiced type of loop.

// assertEqual FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue FUNCTION IMPLEMENTATION BELOW:
const findKeyByValue = function(object, value) {
  const tempObjKeys = Object.keys(object);
  for (let i = 0; i < tempObjKeys.length; i++) {
    const tempObjKey = tempObjKeys[i];
    const objRefKey = object[tempObjKey]
    if (objRefKey === value) {
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

// TESTING BELOW:
assertEqual(findKeyByValue(sampleObject, 0), "a");
assertEqual(findKeyByValue(sampleObject, 1), "b");
assertEqual(findKeyByValue(sampleObject, 2), "c");
assertEqual(findKeyByValue(sampleObject, 3), "d");
assertEqual(findKeyByValue(sampleObject, 4), "e");
assertEqual(findKeyByValue(sampleObject, 5), "f");
assertEqual(findKeyByValue(sampleObject, 6), "g");
assertEqual(findKeyByValue(sampleObject, 7), "h");
assertEqual(findKeyByValue(sampleObject, 8), "i");
assertEqual(findKeyByValue(sampleObject, 9), "j");
assertEqual(findKeyByValue(sampleObject, 10), "k");
assertEqual(findKeyByValue(sampleObject, 11), "l");
assertEqual(findKeyByValue(sampleObject, 12), "m");
assertEqual(findKeyByValue(sampleObject, 13), "n");
assertEqual(findKeyByValue(sampleObject, 14), "o");
assertEqual(findKeyByValue(sampleObject, 15), "p");
assertEqual(findKeyByValue(sampleObject, 16), "q");
assertEqual(findKeyByValue(sampleObject, 17), "r");
assertEqual(findKeyByValue(sampleObject, 18), "s");
assertEqual(findKeyByValue(sampleObject, 19), "t");
assertEqual(findKeyByValue(sampleObject, 20), "u");
assertEqual(findKeyByValue(sampleObject, 21), "v");
assertEqual(findKeyByValue(sampleObject, 22), "w");
assertEqual(findKeyByValue(sampleObject, 23), "x");
assertEqual(findKeyByValue(sampleObject, 24), "y");
assertEqual(findKeyByValue(sampleObject, 25), "z");
assertEqual(findKeyByValue(sampleObject, 26), undefined);