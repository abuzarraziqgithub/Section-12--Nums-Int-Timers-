"use strict";

// MATH AND ROUNDING:

/*
-> WE HAVE USED DIFFERENT MATHEMATICAL OPERATORS IN OUR CODE.
-> THERE ARE MORE MATH OPERATIONS WE CAN USE IN OUR CODE FOR BETTER RESULTS.


*/

// SQUARE ROOT
console.log(Math.sqrt(25)); // 5
// EXPONENTIAL OPERATOR (SQUARE)
console.log(25 ** (1 / 2)); // 5
// EXPONENTIAL OPERATOR (CUBIC)
console.log(8 ** (1 / 3)); // 2

// FINDING MAX VALUE
console.log(Math.max(5, 18, 23, 11, 2)); // 23
// IT DOES TYPE COERSION AS WELL.
console.log(Math.max(5, 18, "23", 11, 2)); // 23
// PARSING DOESN'T WORK FOR IT.
console.log(Math.max(5, 18, "23px", 11, 2));

// MIN VALUE
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// FINDING THE RADIUS OF A CIRCLE WITH 10PX DIAMETER
// THE MATH.PI IS A CONSTANT OPERATOR.
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// FOR RANDOM NUMBERS , EXCLUDING THE DECIMALS USING TRUNC.
console.log(Math.trunc(Math.random() * 6) + 1);

// FUNCTION FOR
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(Math.trunc(Math.random() * (20 - 10) + 1) + 10);

// ROUNDING INTEGERS

// IT ROUND THE INTEGR TO THE CLOSEST INT
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

// IT ROUNDS UP THE INTEGER.
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

// IT CUTS THE DECIMAL POINT LIKE TRUNC , BUT IT IS DIFFERENT WHEN IT COMES TO NEGATIVE NUMBER.
console.log(Math.floor(23.3)); // 23
// TYPE COERSION WORKS HERE AS WELL.
console.log(Math.floor("23.9")); // 23

console.log(Math.trunc(23.3)); // 23

console.log(Math.trunc(-23.3)); // -23
// IT ROUNDS DOWN TO THE LEAST NUMBER.
// IT IS BETTER THAN TRUCNT , BECAUSE IT  WORKS IN ALL SITUATIONS.
console.log(Math.floor(-23.3)); // -24

// ROUNDING DECIMALS (IT WORKS IN A LITTLE DIFFERENT WAY)
// WE PASS A NUMBER ARGUMENT , FOR TELLING TO ADD THE NUMBER OF DECIMAL POINTS.
// IT ALSO CONVERTS THE VALUE TO STRING.
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
//CONVERTING TO NUMBER.
console.log(+(2.345).toFixed(2)); // 2.35

// APPLIED MATH.FLOOR TO THE LOAN FUNCTION IN THE BANKIST APP AND ALSO TOFIXED METHOD TO THE DISPLAYED VALUES.
