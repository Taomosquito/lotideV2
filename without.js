// INPUT:
// * Chosen array.
// * Exclusion criteria.
// * source Array.
// * itemsToRemove Array.

// OUTPUT:
// * New array with excluded criteria.

// DETAILS:
// * Function will behave like filter.

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

// without FUNCTION IMPLEMENTATION BELOW:
const without = function(source, itemsToRemove) {
  let newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
};

// TESTING SETUP BELOW:
testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(without(testArray, [1, 2, 3]));

for (let i = 0; i < array.length; i++) {
  let sample = [];
  const arrayItem = array[i]
  if (arrayItem === 2) {
    sample.push(arrayItem)
  }
}
