"use strict";
// WE CAN WRITE DATES IN FOUR WAYS:
console.log("\n");
console.log("\n");
console.log(`USE CASES OF DATES`);
console.log("\n");
// CALLING DATE CONSTRUCTOR AND STORE IT INTO A VARIABLE.
const now = new Date();
console.log(now);

// PARSE A DATE FROM A DATE STRING.
// THIS TIME WILL NOT BE UPDATED
console.log(new Date("Apr 26 2024 14:46:10"));

// WRITING OUR OWN DATE.
console.log(new Date("December 24 2015 2:00"));

// YEAR , MONTH(ZERO BASED), DAY , HOURS, MINUTES.
console.log(new Date(2037, 10, 19, 15, 23));
// YEAR , MONTH , DAY
console.log(new Date(2037, 10, 31));

// IT WILL SHOW THE UNIX TIME, WHICH IS JAN 01 1970.
console.log(new Date(0));
// STARTING DAY FROM SUNDAY (1ST DAY OF THE WEEK) , 1ST MONTH , 04 (ZERO BASED) , 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000));

console.log("\n");
console.log("\n");
console.log(`----STARTING WITH DATES----`);
console.log("\n");

// WORKING WITH DATES(DATE METHODS)
const future = new Date(2037, 10, 19, 15, 23);

console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 (THUR)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T10:23:00.000Z
console.log(future.getTime()); // UNIX TIME (STRING VALUE)

console.log(new Date(2142238980000)); // CONVERTS UNIX DATE VALUE TO STRING
console.log(Date.now()); // DATE OF NOW.

// THAT'S ALL ABOUT DATES , WE SHOULD ONLY FOCUS ON HOW TO PASS ARGUMENT TO THE DATE CONSTRUCTOR FUNCTION AND ALSO THERE METHODS.
