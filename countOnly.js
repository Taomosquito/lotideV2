// INPUT: 
// * An array parameter for the countOnly function.
// * An object parameter for the countOnly function.

// OUTPUT:
// * An object containing counts of everything that the input object listed.

// DETAIL:
// * allItems: an array of strings that we need to look through.
// * itemsToCount: an object specifying what to count.

// assertEqual FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// countOnly FUNCTION IMPLEMENTATION BELOW:
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// TESTING SET-UP:
// First Testing Consideration:
const colorTest = [
  "Red",
  "Blue",
  "Orange",
  "White",
  "Black",
  "Grey",
  "Pink",
  "Blue",
  "White",
  "Green"
]

// Second Testing Consideration:
const result1 = countOnly(colorTest, {
  Grey: true,
  Silver: true,
  White: true,
  Green: false,
});

// TESTING BELOW:
assertEqual(result1["Grey"], 1);
assertEqual(result1["Silver"], undefined);
assertEqual(result1["White"], 2);
assertEqual(result1["Green"], undefined);