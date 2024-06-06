const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TESTING SET-UP BELOW:
testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArray2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
shortTestArray1 = [1, 2, 3, 4, 5];
shortTestArray2 = ["1", "2", "3", "4", "5"];

// TESTING BELOW:
assertArraysEqual(middle(testArray1), [5, 6]);
assertArraysEqual(middle(testArray2), ["5", "6"]);
assertArraysEqual(middle(shortTestArray1), [3]);
assertArraysEqual(middle(shortTestArray2), ["3"]);