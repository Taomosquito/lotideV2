const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
const sampleArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const sampleArray2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const limitedArray1 = [1, 2, 3];
const limitedArray2 = ["1", "2", "3"];

// TESTING BELOW:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // First in-line test.
assertEqual(eqArrays([1, 2, 3], sampleArray1), false); // First variable substitution test.
assertEqual(eqArrays(["1", "2", "3"], sampleArray2), false); // Second variable substitution test. 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Second in-line test.
assertEqual(eqArrays([], []), true); // comparing empty arrays
assertEqual(eqArrays([]), false); // checking status of a single array
assertEqual(eqArrays(limitedArray1, [1, 2, 3]), true); // First variable vs in-line that should pass.
assertEqual(eqArrays(limitedArray2, ["1", "2", "3"]), true); // Second variable vs in-line that should pass.