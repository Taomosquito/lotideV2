const assert = require('chai').assert;
const tail = require('../tail');

const result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of the number data type.
const result2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; // Array of numbers in the string data type.
const result3 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]; // Array of strings in the string data type.

const altResult1 = tail(result1);
const altResult2 = tail(result2);
const altResult3 = tail(result3);

describe("#tail", () => {
  it("returns first element from revised = second element from initial (uses number type numbers)", () => {
    assert.strictEqual(altResult1[0], result1[1]);
  });
  it("returns first element from revised = second element from initial (uses string type numbers)", () => {
    assert.strictEqual(altResult2[0], result2[1]);
  });
  it("returns first element from revised = second element from initial (uses string type word numbers)", () => {
    assert.strictEqual(altResult3[0], result3[1]);
  });
  it("checks that the array lengths differ in the way they should (uses number type numbers(new))", () => {
    assert.strictEqual(altResult1.length, 9);
  });
  it("checks that the array lengths differ in the way they should (uses string type numbers)(new)", () => {
    assert.strictEqual(altResult2.length, 9);
  });
  it("checks that the array lengths differ in the way they should (uses string type word numbers)(new)", () => {
    assert.strictEqual(altResult3.length, 9);
  });
  it("checks that the array lengths differ in the way they should (uses number type numbers)(old)", () => {
    assert.strictEqual(result1.length, 10);
  });
  it("checks that the array lengths differ in the way they should (uses string type numbers)(old)", () => {
    assert.strictEqual(result2.length, 10);
  });
  it("checks that the array lengths differ in the way they should (uses string type word numbers)(old)", () => {
    assert.strictEqual(result3.length, 10);
  });
});