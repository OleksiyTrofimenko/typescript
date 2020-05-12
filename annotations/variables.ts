let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

// Array
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3, 4];
let truth: boolean[] = [true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function.
// Annotation (i: number) => void
// Function (i: number) => console.log(i);
const logNumber: (i: number) => void = (i: number) => console.log(i);

// Type annotations - We (developers) tell TS the type
// Type interface - TS guesses the type

// When to use annotations
// 1) Function that return 'any' type of value
const json = '{ "x" : 10, "y": 20 }';
const coordinates: { x: number; y: number } = JSON.parse(json); // { x: 10, y: 20 }

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'yellow'];
let foundWord: boolean; // or better code: let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let number = [-10, -1, -12];
let numberAboveZero;


