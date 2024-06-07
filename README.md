# LotideV2

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @taomosquito/lotideV2`

**Require it:**

`const _ = require('@taomosquito/lotideV2');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head()`: returns the head of a source array that is passed in as a function argument.
- `tail()`: returns everything but the head of a source array that is passed in as a function argument.
- `middle()`: returns the middle element of a source array if odd length or middle two elements if even length.
- `without()`: returns a new array that excludes anything in the comparison array.
- `takeUntil()`: returns a new array that returns every element incrementally up until the condition is true.
- `map()`: iterates through an array and provides a modification to every element using a callback designed around unnamed callbacks since it is expecting a condition.
- `letterPositions()`: returns an object containing an array of indices based on where in a string a character occurs for each character in the string expects the string added as a parameter.
- `flatten()`: compresses a nested array 1 layer deep.
- `findKey()`: finds a key in an object passed in as a parameter when given a callback as a second parameter.
- `findKeyByValue()`: finds a key in an object passed in as a parameter when given a value as a second parameter.
- `eqArrays()`: takes in two arrays as arguments and checks if they are equal or not.
- `eqObjects()`: takes in two objects as arguments and checks if they are equal or not.
- `countOnly()`: takes in an array of items and an object of conditions and returns the amount of times that condition is true in the given array.
- `countLetters()`: returns an object containing each character in the string and a value equal the amount of times it exists in the string.
- `assertEqual()`: prints a stylized assertion to the console based on the equality of two values.
- `assertArraysEqual()`: prints a stylized assertion to the console based on the equality of two arrays.
- `assertObjectsEqual()`: prints a stylized assertion to the console based on the equality of two objects (this has a verbose trigger as an optional third argument expecting truthy to make verbose).
