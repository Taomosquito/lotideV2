// INPUT = 
// * First Array Is The First Function Parameter.
// * Second Array Is The Second Function Parameter.

// OUTPUT = 
// * Behaviour Identical to Assert Equal using values from eqArrays. 

// DETAILS = 
// * Should make part of the shell creation step integration of all the above so revision is all that is required.

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
  if (eqArrays(arr1, arr2)){
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
// TESTING SETUP BELOW:
const sampleArray = [1,2,3];

// TESTING BELOW:
assertArraysEqual([], []);
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual(["1","2","3"], ["1","2","3"]);
assertArraysEqual(["a","b","c"], ["a","b","c"]);
assertArraysEqual(["A","B","C"], ["A","B","C"]);
assertArraysEqual([1,2,3], sampleArray);
