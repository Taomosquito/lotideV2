//***// PLANNING STAGE BELOW: //***//
// INPUT: 
// * Take in a first object as the first parameter.
// * Take in a second object as the second parameter.

// OUTPUT:
// * Return true on a perfect match.
// * Return false on a perfect match.

//***// IMPLEMENTATION STAGE BELOW: //***//
// assertEqual FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays FUNCTION IMPLEMENTATION BELOW:
const eqArrays = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (!arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// eqObjects FUNCTION IMPLEMENTATION BELOW:
const eqObjects = function(object1, object2) {
  const object1K = Object.keys(object1);
  for (let i = 0; i < object1K.length; i++) {
    const sourceKey = object1K[i];
    if (Array.isArray(object1[sourceKey]) && Array.isArray(object2[sourceKey])) {
      const arraysAreEqual = eqArrays(object1[sourceKey], object2[sourceKey]);

      if (!arraysAreEqual) {
        return false;
      }
    } else if (object1[sourceKey] !== object2[sourceKey]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//***// TESTING STAGE BELOW: //***//
// TESTING SET-UP BELOW:
const sampleObjectaz025V1N = {
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
const sampleObjectaz025V2N = {
  z: 25,
  y: 24,
  x: 23,
  w: 22,
  v: 21,
  u: 20,
  t: 19,
  s: 18,
  r: 17,
  q: 16,
  p: 15,
  o: 14,
  n: 13,
  m: 12,
  l: 11,
  k: 10,
  j: 9,
  i: 8,
  h: 7,
  g: 6,
  f: 5,
  e: 4,
  d: 3,
  c: 2,
  b: 1,
  a: 0,
};
const sampleObjectaz025V1S = {
  a: "0",
  b: "1",
  c: "2",
  d: "3",
  e: "4",
  f: "5",
  g: "6",
  h: "7",
  i: "8",
  j: "9",
  k: "10",
  l: "11",
  m: "12",
  n: "13",
  o: "14",
  p: "15",
  q: "16",
  r: "17",
  s: "18",
  t: "19",
  u: "20",
  v: "21",
  w: "22",
  x: "23",
  y: "24",
  z: "25",
};
const sampleObjectaz025V2S = {
  z: "25",
  y: "24",
  x: "23",
  w: "22",
  v: "21",
  u: "20",
  t: "19",
  s: "18",
  r: "17",
  q: "16",
  p: "15",
  o: "14",
  n: "13",
  m: "12",
  l: "11",
  k: "10",
  j: "9",
  i: "8",
  h: "7",
  g: "6",
  f: "5",
  e: "4",
  d: "3",
  c: "2",
  b: "1",
  a: "0",
};
const sampleObjectak010V1N = {
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
  k: 10
};
const sampleObjectak010V2N = {
  k: 10,
  j: 9,
  i: 8,
  h: 7,
  g: 6,
  f: 5,
  e: 4,
  d: 3,
  c: 2,
  b: 1,
  a: 0
};
const sampleObjectak010V1S = {
  a: "0",
  b: "1",
  c: "2",
  d: "3",
  e: "4",
  f: "5",
  g: "6",
  h: "7",
  i: "8",
  j: "9",
  k: "10",
};
const sampleObjectak010V2S = {
  k: "10",
  j: "9",
  i: "8",
  h: "7",
  g: "6",
  f: "5",
  e: "4",
  d: "3",
  c: "2",
  b: "1",
  a: "0"
};
const sampleObjectTerriblePhoneticAlphabetV1 = {
  A: "Are",
  B: "Bar",
  C: "Car",
  D: "Dye",
  E: "Eye",
  F: "Far",
  G: "Guy",
  H: "High",
  I: "Ill",
  J: "Jar",
  K: "Kill",
  L: "Lie",
  M: "Mill"
};
const sampleObjectTerriblePhoneticAlphabetV2 = {
  M: "Mill",
  L: "Lie",
  K: "Kill",
  J: "Jar",
  I: "Ill",
  H: "High",
  G: "Guy",
  F: "Far",
  E: "Eye",
  D: "Dye",
  C: "Car",
  B: "Bar",
  A: "Are",
};
const sampleObjectTerriblePhoneticAlphabetV1A = {
  A: ["Are", "All"],
  B: ["Bar", "Ball"],
  C: ["Car", "Call"],
  D: ["Dye", "Doll"],
  E: ["Eye", "End"],
  F: ["Far", "Fend"],
  G: ["Guy", "Gale"],
  H: ["High", "Hall"],
  I: ["Ill", "Ink"],
  J: ["Jar", "Jail"],
  K: ["Kill", "Kink"],
  L: ["Lie", "Lend"],
  M: ["Mill", "Mall"]
};
const sampleObjectTerriblePhoneticAlphabetV2A = {
  M: ["Mill", "Mall"],
  L: ["Lie", "Lend"],
  K: ["Kill", "Kink"],
  J: ["Jar", "Jail"],
  I: ["Ill", "Ink"],
  H: ["High", "Hall"],
  G: ["Guy", "Gale"],
  F: ["Far", "Fend"],
  E: ["Eye", "End"],
  D: ["Dye", "Doll"],
  C: ["Car", "Call"],
  B: ["Bar", "Ball"],
  A: ["Are", "All"],
};

// TESTING BELOW:
assertEqual(eqObjects(sampleObjectTerriblePhoneticAlphabetV1, sampleObjectTerriblePhoneticAlphabetV2), true);
assertEqual(eqObjects(sampleObjectak010V1N, sampleObjectak010V2N), true);
assertEqual(eqObjects(sampleObjectak010V1S, sampleObjectak010V2S), true);
assertEqual(eqObjects(sampleObjectaz025V1N, sampleObjectaz025V2N), true);
assertEqual(eqObjects(sampleObjectaz025V1S, sampleObjectaz025V2S), true);
assertEqual(eqObjects(sampleObjectaz025V1N, sampleObjectak010V1N), false);
assertEqual(eqObjects(sampleObjectTerriblePhoneticAlphabetV1A, sampleObjectTerriblePhoneticAlphabetV2A), true);