//***// PLANNING STEP //***/
// INPUT: 
// * take an array as the first argument for the function.
// * take a callback as the second argument for the function.

// OUTPUT:
// * return new array stopped at the stop condition.

// DETAILS:
// * Expected behavior take a callback that stops the loop at a given condition returning everything before this was reached.

//***// IMPLEMENTATION STEP //***/
// SETUP DATA BELOW:
const words = ["ate", "bar", "car", "date", "eat", "feet", "gate", "hate", "ice", "juice"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// takeUntil FUNCTION IMPLENTATION BELOW:
const takeUntil = function(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (callback(item)) {
      return newArr;
    }
    newArr.push(item);
  }
  return newArr;
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
const stopAtSecondElementS = takeUntil(words, word => word === "bar");
const stopAtThirdElementS = takeUntil(words, word => word === "car");
const stopAtFourthElementS = takeUntil(words, word => word === "date");
const stopAtFifthElementS = takeUntil(words, word => word === "eat");
const stopAtSixthElementS = takeUntil(words, word => word === "feet");
const stopAtSecondElementN = takeUntil(numbers, number => number === 2);
const stopAtThirdElementN = takeUntil(numbers, number => number === 3);
const stopAtFourthElementN = takeUntil(numbers, number => number === 4);
const stopAtFifthElementN = takeUntil(numbers, number => number === 5);
const stopAtSixthElementN = takeUntil(numbers, number => number === 6);
const results2 = takeUntil(data2, x => x === ',');

// TESTING BELOW:
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])
assertArraysEqual(stopAtSecondElementS, ["ate"]);
assertArraysEqual(stopAtThirdElementS, ["ate", "bar"]);
assertArraysEqual(stopAtFourthElementS, ["ate", "bar", "car"]);
assertArraysEqual(stopAtFifthElementS, ["ate", "bar", "car", "date"]);
assertArraysEqual(stopAtSixthElementS, ["ate", "bar", "car", "date", "eat"]);
assertArraysEqual(stopAtSecondElementN, [1]);
assertArraysEqual(stopAtThirdElementN, [1, 2]);
assertArraysEqual(stopAtFourthElementN, [1, 2, 3]);
assertArraysEqual(stopAtFifthElementN, [1, 2, 3, 4]);
assertArraysEqual(stopAtSixthElementN, [1, 2, 3, 4, 5]);