"use strict";
/*
-> BigInt WAS REPRESENTED IN ES2020 TO DEAL WITH BIG NUMBERS , LARGER THAN 53 .
-> IN JAVASCRIPT , NUMBERS ARE REPRESENTED IN 60 BIT , IN WHICH 53 ARE STORE BY JAVASCRIPT AND THE OTHER 7 ARE FOR DECIMAL POINTS AND SIGNS ETC.

-> SO , 53 DIGIT NUMBER IS A LIMIT FOR JAVASCRIPT TO REPRESENT A NUMBER.

-> WE CAN USE NUMBER NAMESPACE WHICH IS MAX_SAFE_INTEGER , WHICH ITSELF SAYS , THAT INTEGER AFTER THIS WILL NOT BE SAFE OR MAY INCORRECT.

-> SO THEREFORE THE BIGINT CAME IN TO MODERN JAVASCRIPT TO DEAL WITH BIG NUMBERS.

-> WE CAN NOW STORE NUMBERS AS LARGE AS WE WANT.

*/

// THESE ARE NOT SHOWING THE SAME RESULTS.
console.log(2 ** 53 + 2);
// IT WILL SHOW THE MAX INTEGER THAT IS SAFER.
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 2);

// WE CAN USE THE BIGINT:
// THE n IS USED TO STORE AND REPRESENT THE WHOLE BIG NUMBER.
console.log(4328764375743253258563487435345325832547423936n);

// WE SHOULD USE THE BIGINT FOR NOT MUCH LARGER VALUES.
console.log(BigInt(3217));

// OPERATIONS:
console.log(10000n + 10000n); // 20000n
console.log(8321875126517653575765353543253215n * 10000000n);

const huge = 32174326843698321046948164n;
const num = 23; // IT IS A REGULAR NUMBER
// WE CANNOT USE BIGINT WITH OTHER TYPE INTGER , SO WILL USE BIGINT FUNCTION FOR NUM , THEN IT WILL WORK.
console.log(huge * BigInt(num));

// EXCEPTIONS
// IT WILL CONVERT THE REGULAR INTEGER INTO BIGINT
console.log(20n > 15); // true
// IT IS BIGINT WITH REGULAR INT , AND TRIPLE EQUAL DOESN'T DO TYPE COERSION.
console.log(20n === 20); // false
console.log(typeof 20n); // bigInt
// IT DOES TYPE COERSION IMPLICITLY.
console.log(20n == 20); // true

// WITH STRINGS
// IT CONVERTS THE BIGINT INTEGER INTO A STRING , IMPLICITLY.
console.log(huge + " is really a big number");
console.log(10n + " is a BigInt");

// DIVISIONS.
console.log(11n / 3n); // 3n
console.log(12n / 3n); // 4n
console.log(12n / 2n); // 6n
