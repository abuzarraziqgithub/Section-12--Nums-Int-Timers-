"use strict";

/* CONVERTING AND CHECKING NUMBERS:

-> NUMBERS ARE REPRESENTED AS FLOATING POINTS IN JAVASCRIPT , THAT'S WHY WE HAVE ONE DATA TYPE FOR ALL NUMBERS.
EXP : console.log(23 === 23.0) //true

-> JAVASCRIPT HAS SOME EXCEPTIONS LIKE , THE RESULT OF 0.1 + 0.2 WILL BE 0.33333333...4 , ALSO IF WE CHECK 0.1 + 0.2 === 0.3 , THE RESULT WILL BE FALSE , THAT'S WHY JAVASCRIPT CAN BE VERY CHALLENGING WHEN USE FOR VERY SCIENTIFIC AND FINANCIAL PURPOSE.

-> WE HAVE TO USE / CALL THE "NUMBER" FUNCTION(OBJECT) TO CONVERT VALUE TO NUMBER BUT WE CAN USE THE + OPERATOR BEFORE A VALUE AND THEN IT WILL DO THE SAME.

-> PARSEINT, FLOAT , ISNAN ISFINITE ARE GLOBAL METHODS , BUT IN MODERN JS , WE HAVE TO CALL IT USING THE NUMBER FUNCTION.

-> THE PARSEINT WILL FIGURE OUT A NUMBER IN A VALUE AND THEN GET THAT NUMBER OUT OF THAT VALUE.
-> THE STARTING POINT OF A VALUE SHOULD BE NUMBER , OTHERWISE IT WILL GIVE US NAN.

->  WE CAN USE PARSEFLOAT INSTEAD OF PARSEINT BECAUSE IT WILL GET THE DECIMAL VALUE AS WELL.

-> WE CAN CHECK IF THE VALUE IS NOT A NUMBER ISNAN , IF NOT A NUMBER(MEANS STRING OR BOOLEAN) IT WILL BE TRUE , OTHERWISE FALSE.

-> WE SHOULD USE ISFINITE INSTEAD OF ISNAN , BECAUSE IT CAN CHECK THE VALUE IF IT IS INFINITY (NOT FINITE).

-> WE CAN CHECK THE VALUE USING ISINTEGER AS WELL .




*/

console.log(23 === 23.0); // true

// BASE 10 - 0 TO 9.  1 / 10 = 0.1 , 3 / 10 = 3.333333.....
// BINARY BASE 2 - 01

console.log(0.1 + 0.2); // 0.3000000000...4
console.log(0.1 + 0.2 === 0.3); // false

console.log(Number("23"));
console.log(+"23");

// PARSING
console.log(Number.parseInt("30px", 10)); // 30
console.log(Number.parseInt("e23", 10)); // NaN

console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(Number.parseInt("2.5rem")); // 2

// CHECK IF VALUE IS NAN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("20")); // false
console.log(Number.isNaN(+"20X")); // true

// CHECK IF VALUE IS NUMBER
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); // false
console.log(Number.isFinite(+"20X")); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
