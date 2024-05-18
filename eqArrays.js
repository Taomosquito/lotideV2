// INPUT:
// * 2 function parameters each expecting data type array.

// OUTPUT:
// * An evaluation of whether or not the two arrays were equal.

// DETAILS:
// * Requires a loop to accesss every individual element in the array.

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

// TESTING PREP BELOW:
const sampleArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const sampleArray2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const limitedArray1 = [1, 2, 3];
const limitedArray2 = ["1", "2", "3"];

// TESTING BELOW:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // First in-line test.
assertEqual(eqArrays([1, 2, 3], sampleArray1), false); // First variable substitution test.
assertEqual(eqArrays(["1", "2", "3"], sampleArray2), false); // Second variable substitution test. 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Second in-line test.
assertEqual(eqArrays([], []), true); // comparing empty arrays
assertEqual(eqArrays([]), false); // checking status of a single array
assertEqual(eqArrays(limitedArray1, [1, 2, 3]), true); // First variable vs in-line that should pass.
assertEqual(eqArrays(limitedArray2, ["1", "2", "3"]), true); // Second variable vs in-line that should pass.