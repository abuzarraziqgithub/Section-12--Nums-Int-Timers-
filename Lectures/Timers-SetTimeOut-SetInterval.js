"use strict";

// THERE ARE 2 TYPES OF TIMERS IN JAVASCRIPT:
// THE SET TIMEOUT FUNCTION IS A HIGHER ORDER FUNCTION , IT EXECUTE ONLY ONCE AFTER A GIVEN TIME .
// THE SET INTERVAL FUNCTION EXECUTE FOREVER.

// LET'S CREATE AN ARRY OF INGREDIENTS:
const ingredients = ["olives", ""];
// CREATED A PIZZA TIMERS , USING SET TIME OUT FUNCTION , AND PASSED TWO PARAMETERS , ALSO ASSIGNED ARGUMENTS AT LAST IN THE SET TIME OUT.
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  2000,
  ...ingredients
);
console.log("Waiting...");

// THE CLEARTIMEOUT WILL REMOVE OR DELETE IF THE CONDITION BECOMES TRUE OTHERWISE EXECUTES.
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// THAT'S ABOUT SET TIME OUT FUNCTION, LET'S IMPLEMENT IT TO THE BANKIST PROJECT, TO SIMULATE APPROVAL OF OUR LOAN.

// SET TIME INTERVAL:
// THE SET TIME INTERVAL , EXECUTES CONTINOUSLY AFTER GIVEN TIME.

// THE CALL BACK WILL EXECUTE AFTER EACH 2 SECONDS.
const interval = setInterval(function () {
  const now = new Date();
  console.log(now);
}, 2000);

// IT WILL DELETE THE SET INERVAL FUNCTION
clearInterval(interval);

// A LITTLE CHALLENGE:
// CREATE A REAL CLOCK , WHICH INCLUDE HOURS , MINUTES AND SECONDS USING SET INTERVAL.
