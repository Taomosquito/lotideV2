// INPUT: 
// * Take in an array as a parameter

// OUTPUT:
// * Return the 1 middle array element if the array is of odd length.
// * Return the two middle array elements if the array is of even length.

// DETAILS:
// * Should lean more heavily on conditionals than loops.

// middle FUNCTION IMPLEMENTATION BELOW:
const middle = function(arr) {
  let newArr = [];
  let middleBuilder = Number(Math.floor(arr.length / 2));
  if (arr.length < 3) {
    return newArr;
  }
  if (arr.length % 2 === 0) {
    newArr.push(arr[middleBuilder]);
    newArr.unshift(arr[middleBuilder - 1]);
  } else {
    newArr.push(arr[middleBuilder]);
  }
  return newArr;
}
module.exports = middle;

