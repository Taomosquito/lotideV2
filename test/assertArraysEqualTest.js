const assertArraysEqual = require("../assertArraysEqual");
const sampleArray = [1, 2, 3];
assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual(["A", "B", "C"], ["A", "B", "C"]);
assertArraysEqual([1, 2, 3], sampleArray);