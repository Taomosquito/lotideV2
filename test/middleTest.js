const assert = require('chai').assert;
const middle = require('../middle');

// TESTING SET-UP BELOW:
testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArray2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
shortTestArray1 = [1, 2, 3, 4, 5];
shortTestArray2 = ["1", "2", "3", "4", "5"];

describe("#middle", () => {
  it("confirms works with even length array and the number data type", () => {
    assert.deepEqual(middle(testArray1), [5, 6]);
  });
  it("confirms works with even length array and the string data type", () => {
    assert.deepEqual(middle(testArray2), ["5", "6"]);
  });
  it("confirms works with odd length array and the number data type", () => {
    assert.deepEqual(middle(shortTestArray1), [3]);
  });
  it("confirms works with odd length array and the string data type", () => {
    assert.deepEqual(middle(shortTestArray2), ["3"]);
  });

});