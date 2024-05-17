// INPUT:
// * Array into the new function as a parameter.
// * String into the new function as a parameter.

// OUTPUT: 
// * First Index of the input string.
// * First Index of the input array.

// DETAILS:
// * Followed the best practice of startinng with the shell and planning stages.
// * Set up Test Cases Before any implementation.

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
assertEqual(head("Hello"), "H"); // Tests its  ability to work on strings
assertEqual(head("001"), "0"); // Tests its ability to work on string based numbers

