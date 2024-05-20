// INPUT:
// * A two layer nested array.

// OUTPUT:
// * a single layer unnested array.

// DETAILS:
// * Assignment requirement specified that this doesn't require recursion so set the expectation this would be only two levels deep so could be done with typical loops.

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

// flatten FUNCTION IMPLEMENTATION BELOW:
const flatten = function(nestedArray) {
  let flattenedArray = [];
  for (let i1 = 0; i1 < nestedArray.length; i1++) {
    let toplevelArray = nestedArray[i1];
    if (!Array.isArray(toplevelArray)) {
      flattenedArray.push(toplevelArray);
    } else {
      for (let i2 = 0; i2 < toplevelArray.length; i2++) {
        let bottomlevelArray = toplevelArray[i2]
        flattenedArray.push(bottomlevelArray);
      }
    }
  }
  return flattenedArray;
};

// TESTING SET-UP: 
testArray1 = [1, [2], 3, [4, 5], [6, 7, 8], 9, [10]];
testArray2 = ["1", "2", "3", "4", "5", ["6", "7", "8", "9", "10"]];
shortTestArray1 = [1, [2, 3, 4], []];
shortTestArray2 = ["1", [], "2", "3", "4", "5"];

// TESTING BELOW:
assertArraysEqual(flatten(testArray1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(testArray2), ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
assertArraysEqual(flatten(shortTestArray1), [1, 2, 3, 4]);
assertArraysEqual(flatten(shortTestArray2), ["1", "2", "3", "4", "5"])
