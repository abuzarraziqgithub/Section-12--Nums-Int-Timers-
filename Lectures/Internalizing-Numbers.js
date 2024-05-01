"use strict";

// WE CAN ALSO USE THE INTERNATIONALIZATION OF NUMBERS , TO CAHNGE THE FORMAT OF NUMBERS ACCORDING TO THE GIVEN LOCAL OR sCOUNTRY.
// WE CAN ALSO PASS AN OPTION OBJECT TO CUSTOMIZE THE LOCAL FORMAT.

// THE SYNTAX IS QUITE SAME AS INTL DATE :

const num = 121832.34;

// FORMAT THIS NUMBER TO US:
const numToUS = new Intl.NumberFormat("en-US").format(num);
console.log(numToUS);

// FORMAT IT TO ARABIC SYRIA:
const numToSyria = new Intl.NumberFormat("ar-SY").format(num);
console.log(numToSyria);

// THERE ARE A LOT OF LOCALES WE CAN USE TO FORMAT NUMBERS , WE CAN SEARCH FOR IT AND ASLO CAN USE MDN DOCUMENTATIONS.

// NOW LET'S PASS AN OBJECT , TO CUSTOMIZE THINGS.
// WE USED THE CURRENCY , STYLE TO GBP , WE CAN USE MANY STYLES . WE CAN SEARCH FOR IT.
const options = {
  style: "currency",
  currency: "GBP",
};

const customizedFormat = Intl.NumberFormat(navigator.language, options).format(
  num
);
console.log(customizedFormat);

// LET'S CUSTOMIZED IT MORE:

const num2 = 233243;

const customs = {
  style: "currency",
  currency: "EUR",
  //   userGrouping: false,
};

// FOR US
console.log("US :", new Intl.NumberFormat("en-US", customs).format(num2));
console.log("GERMANY :", new Intl.NumberFormat("de-DE", customs).format(num2));
console.log("SYRIA :", new Intl.NumberFormat("ar-SY", customs).format(num2));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, customs).format(num2)
);

// THAT'S ALL ABOUT INTERNATIONALIZING NUMBERS , LET'S MOVE TO THE PROJECT TO CHANGE THE CURRENCY/LOCALES IN THE MOVEMENTS , CURRENT AMOUNT AND ALSO OTHER ACCORTING TO THEIR LOCALES/CURRENCY.
