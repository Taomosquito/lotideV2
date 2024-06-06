// INPUT = 
// * First Array Is The First Function Parameter.
// * Second Array Is The Second Function Parameter.

// OUTPUT = 
// * Behaviour Identical to Assert Equal using values from eqArrays. 

// DETAILS = 
// * Should make part of the shell creation step integration of all the above so revision is all that is required.
const eqArrays = require("./eqArrays");

// assertArraysEqual FUNCTION IMPLEMENTATION BELOW:
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
module.exports = assertArraysEqual;
