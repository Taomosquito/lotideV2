const assertEqual = require("../assertEqual");
const head = require("../head");
assertEqual(head([5, 6, 7]), 5); // tests its ability to work on an array of numbers.
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // Tests its abiliy to work on an array of strings
assertEqual(head([]), undefined); //checks that no value will return undefined.