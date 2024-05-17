// INPUT:
// * Array into the new function as a parameter.
// * Setup to have  a test always return undefined.

// OUTPUT:
// * First Index of the input array.
// * Get undefined for an empty array.

// DETAILS:
// * Followed the best practice of startinng with the shell and planning stages.
// * Set up Test Cases Before any implementation.
// * No recommended stand in for undefined so decided to just check for undefined in testing.

// assertEqual FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// head FUNCTION IMPLEMENTATION BELOW:
const head = function(arr) {
  return arr[0];
};

// TESTING BELOW:
assertEqual(head([5, 6, 7]), 5); // tests its ability to work on an array of numbers.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Tests its abiliy to work on an array of strings
assertEqual(head([]), undefined); //checks that no value will return undefined.
