// INPUT: 
// * Take in an array as a parameter

// OUTPUT:
// * Return the 1 middle array element if the array is of odd length.
// * Return the two middle array elements if the array is of even length.

// DETAILS:
// * Should lean more heavily on conditionals than loops.

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

// middle FUNCTION IMPLEMENTATION BELOW:
const middle = function(arr) {
  let newArr = [];
  let middleBuilder = Number(Math.floor(arr.length / 2));
  if (arr.length % 2 === 0) {
    newArr.push(arr[middleBuilder]);
    newArr.unshift(arr[middleBuilder - 1]);
  } else {
    newArr.push(arr[middleBuilder]);
  }
  return newArr;
}

// TESTING SET-UP BELOW:
testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArray2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
shortTestArray1 = [1, 2, 3, 4, 5];
shortTestArray2 = ["1", "2", "3", "4", "5"];

// TESTING BELOW:
assertArraysEqual(middle(testArray1), [5, 6]);
assertArraysEqual(middle(testArray2), ["5", "6"]);
assertArraysEqual(middle(shortTestArray1), [3]);
assertArraysEqual(middle(shortTestArray2), ["3"]);
