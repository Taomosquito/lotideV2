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

// head FUNCTION IMPLEMENTATION BELOW:
const head = function(arr) {
  return arr[0];
};
module.exports = head;
