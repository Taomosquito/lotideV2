const assertEqual = require("../assertEqual");
const tail = require("../tail");
const result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of the number data type.
const result2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; // Array of numbers in the string data type.
const result3 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]; // Array of strings in the string data type.

const altResult1 = tail(result1);
const altResult2 = tail(result2);
const altResult3 = tail(result3);

// TESTING BELOW:
assertEqual(altResult1[0], result1[1]); // Check that result1 has the same 1 index as 0 index of tail(result1).
assertEqual(altResult2[0], result2[1]); // Check that result2 has the same 1 index as 0 index of tail(result1).
assertEqual(altResult3[0], result3[1]); // Check that result3 has the same 1 index as 0 index of tail(result1).
assertEqual(altResult1.length, 9); // Check that result1 has a length 1 larger than tail(result1).
assertEqual(altResult2.length, 9); // Check that result2 has a length 1 larger than tail(result2).
assertEqual(altResult3.length, 9); // Check that result3 has a length 1 larger than tail(result3).