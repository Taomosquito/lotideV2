// INPUT:
// * Base Value To Compare Against An Expected Value.
// * Expected Value To Compare Against A Base Value.

// OUTPUT:
// * A failure message printed to the console.
// * A passed message printed to the console.
// * A useful testing function for later usage.

// FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;