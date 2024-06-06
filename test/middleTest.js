const assert = require('chai').assert;
const middle = require('../middle');
const eqArrays = require('../eqArrays');

// TESTING SET-UP BELOW:
testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArray2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
shortTestArray1 = [1, 2, 3, 4, 5];
shortTestArray2 = ["1", "2", "3", "4", "5"];

describe("#tail", () => {
  it("confirms works with even length array and the number data type", () => {
    assert.strictEqual(eqArrays(middle(testArray1), [5, 6]), true);
  });
  it("confirms works with even length array and the string data type", () => {
    assert.strictEqual(eqArrays(middle(testArray2), ["5", "6"]), true);
  });
  it("confirms works with odd length array and the number data type", () => {
    assert.strictEqual(eqArrays(middle(shortTestArray1), [3]), true);
  });
  it("confirms works with odd length array and the string data type", () => {
    assert.strictEqual(eqArrays(middle(shortTestArray2), ["3"]), true);
  });

});