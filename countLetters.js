//***// PLANNING STAGE BELOW: //***//
// INPUT: 
// * Take in a sentence as a string.

// OUTPUT:
// * Return a count of each of the letters in that sentence.

// DETAILS:
// * Will require lots of testing as objects are reference data not primitives.
// * With lot of testing we can confirm this works exactly as planned although it is hard to test for efficiency as technically I could write this to remove spaces from the target object at the end or just not add  them in the first place.

//***// IMPLEMENTATION STAGE BELOW: //***//
// assertEqual FUNCTION IMPLEMENTATION BELOW:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔ ✔ ✔ ✔ ✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

//countLetters FUNCTION IMPLEMENTATION BELOW:
const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (result[letter] === undefined) {
        result[letter] = 0;
      }
      result[letter] += 1;
    }
  }
  return result;
};

//***// TESTING STAGE BELOW: //***//
// TESTING SET-UP BELOW:
sampleStr1 = 'LHL'
sampleStr2 = "Lighthouse in the house"
sampleStr3 = `${sampleStr2} and ${sampleStr1}`

// TESTING BELOW:
assertEqual(countLetters(sampleStr1)["L"], 2);
assertEqual(countLetters(sampleStr1)["H"], 1);
assertEqual(countLetters(sampleStr2)["L"], 1);
assertEqual(countLetters(sampleStr2)["i"], 2);
assertEqual(countLetters(sampleStr2)["g"], 1);
assertEqual(countLetters(sampleStr2)["h"], 4);
assertEqual(countLetters(sampleStr2)["t"], 2);
assertEqual(countLetters(sampleStr2)["o"], 2);
assertEqual(countLetters(sampleStr2)["u"], 2);
assertEqual(countLetters(sampleStr2)["s"], 2);
assertEqual(countLetters(sampleStr2)["e"], 3);
assertEqual(countLetters(sampleStr2)["n"], 1);
assertEqual(countLetters(sampleStr2)[" "], undefined);
assertEqual(countLetters(sampleStr3)["L"], 3);
assertEqual(countLetters(sampleStr3)["i"], 2);
assertEqual(countLetters(sampleStr3)["g"], 1);
assertEqual(countLetters(sampleStr3)["h"], 4);
assertEqual(countLetters(sampleStr3)["t"], 2);
assertEqual(countLetters(sampleStr3)["o"], 2);
assertEqual(countLetters(sampleStr3)["u"], 2);
assertEqual(countLetters(sampleStr3)["s"], 2);
assertEqual(countLetters(sampleStr3)["e"], 3);
assertEqual(countLetters(sampleStr3)["n"], 2);
assertEqual(countLetters(sampleStr3)["H"], 1);
assertEqual(countLetters(sampleStr3)["a"], 1);
assertEqual(countLetters(sampleStr3)["d"], 1);
