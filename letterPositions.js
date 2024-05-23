// INPUT = 
// * A sentence

// OUTPUT = 
// * An object showing the indices in an array for each character.

// DETAILS = 
// * This 1 involved updating eqArrays itself.

// eqArrays FUNCTION IMPLEMENTATION BELOW:
const eqArrays = function(arr1, arr2) {
  if (arr1 === undefined && arr2 === undefined) {
    return true;
  }
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

// assertArraysEqual FUNCTION IMPLEMENTATION BELOW:
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// letterPositions FUNCTION IMPLEMENTATION BELOW:
const letterPositions = function(sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (result[letter] === undefined) {
        result[letter] = [];
      }
      result[letter].push(i);
    }
  }
  return result;
};

// TESTING SETUP BELOW:
const sampleSentence1 = "SSS";
const sampleSentence2 = "Lighthouse";
const sampleSentence3 = "LHL";
const sampleSentence4 = "Lighthouse Labs";
const sampleSentence5 = "Lighthouse in the house";

// TESTING BELOW:
assertArraysEqual(letterPositions(sampleSentence1)["S"], [0, 1, 2]);
assertArraysEqual(letterPositions(sampleSentence2)["L"], [0]);
assertArraysEqual(letterPositions(sampleSentence2)["i"], [1]);
assertArraysEqual(letterPositions(sampleSentence2)["g"], [2]);
assertArraysEqual(letterPositions(sampleSentence2)["h"], [3, 5]);
assertArraysEqual(letterPositions(sampleSentence2)["t"], [4]);
assertArraysEqual(letterPositions(sampleSentence2)["o"], [6]);
assertArraysEqual(letterPositions(sampleSentence2)["u"], [7]);
assertArraysEqual(letterPositions(sampleSentence2)["s"], [8]);
assertArraysEqual(letterPositions(sampleSentence2)["e"], [9]);
assertArraysEqual(letterPositions(sampleSentence3)["L"], [0, 2]);
assertArraysEqual(letterPositions(sampleSentence3)["H"], [1]);
assertArraysEqual(letterPositions(sampleSentence4)["L"], [0, 11]);
assertArraysEqual(letterPositions(sampleSentence4)["i"], [1]);
assertArraysEqual(letterPositions(sampleSentence4)["g"], [2]);
assertArraysEqual(letterPositions(sampleSentence4)["h"], [3, 5]);
assertArraysEqual(letterPositions(sampleSentence4)["t"], [4]);
assertArraysEqual(letterPositions(sampleSentence4)["o"], [6]);
assertArraysEqual(letterPositions(sampleSentence4)["u"], [7]);
assertArraysEqual(letterPositions(sampleSentence4)["s"], [8, 14]);
assertArraysEqual(letterPositions(sampleSentence4)["e"], [9]);
assertArraysEqual(letterPositions(sampleSentence4)["a"], [12]);
assertArraysEqual(letterPositions(sampleSentence4)["b"], [13]);
assertArraysEqual(letterPositions(sampleSentence3)[" "], undefined);
