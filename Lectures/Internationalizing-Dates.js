"use strict";

/*
-> INTERNATIONALIZATION OF DATE IS USED TO CHANGE THE DATE FORMAT ACCORDING TO THE GIVEN COUNTRY OR LOCAL.


*/

// SYNTAX OF INT
const now = new Date();
console.log(now); // Sat Apr 27 2024 13:12:25 GMT+0500 (Pakistan Standard Time)

const intDateUS = new Intl.DateTimeFormat("en-US").format(now);
console.log(intDateUS); // 4/27/2024

// DISPLAY THE LANGUAGE OF YOUR SYSTEM
const locale = navigator.language;

// OPTION OBJECT FOR DISPLAYING THE LOCALE DATE
const Option = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

const intDateEng = new Intl.DateTimeFormat(locale, Option).format(now);
console.log(intDateEng);
