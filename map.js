//***// PLANNING STEP //***/
// INPUT: 
// * an array to map as an argument.
// * a callback function as an argument.

// OUTPUT:
// * return a new array based on the result of the callback function passed in.

// DETAILS:
// * This will use my massive testing template from earlier.

//***// IMPLEMENTATION STEP //***/
// SETUP DATA BELOW:
const words = ["ate", "bar", "car", "date", "eat"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map FUNCTION IMPLENTATION BELOW:
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

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

// assertArraysEqual FUNCTION IMPLEMENTATION BELOW:
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//***// TESTING STEP //***/
// TESTING SETUP:
const double = map(numbers, number => number * 2);
const firstLetter = map(words, word => word[0]);
const lastLetter = map(words, word => word[word.length - 1]);
const unitChangeTens = map(numbers, number => number * 10);
const unitChangeQuarter = map(numbers, number => number * 25);

// TESTING BELOW:
assertArraysEqual(double, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
assertArraysEqual(firstLetter, ['a', 'b', 'c', 'd', 'e']);
assertArraysEqual(lastLetter, ['e', 'r', 'r', 'e', 't']);
assertArraysEqual(unitChangeTens, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
assertArraysEqual(unitChangeQuarter, [25, 50, 75, 100, 125, 150, 175, 200, 225, 250]);