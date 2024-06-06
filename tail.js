// INPUT:
// * Take in an array as a parameter.

// OUTPUT:
// * A copy of the original array with the first element removed.

// DETAILS:
// * Any array comparisons will always fail because arrays aren't primitive.

// tail.js FUNCTION IMPLEMENTATION BELOW:
const tail = function(arr) {
  let arra = [];
  for (let i = 1; i < arr.length; i++) {
    arra.push(arr[i]);
  }
  return arra;
};

module.exports = tail;