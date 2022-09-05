"use strict"; // tells browser to use most current version of ECMAScript/JavaScript for my file

// variable names in js can have letters, numbers, underscores and dollar sign in them
// but they cannot start with a number, and they are case-sensitive, so myyear !== myYear
let myYear = 2020;

// older versions of js user the keyword var instead of let to create a variable
// we can actually still use var but there a handful of subtle difference in how var and let
// work - not for now but later

myYear = myYear + 10;

// developer use const as way to communicate that the variable should never have a change in value
const myEyeColor = "brown";

let age = window.prompt("How old are you in years?");

console.log(age);

if (age > 13) {
  window.alert("You are old enough to join our club");
} else {
  let happy = window.confirm("Are you happy?"); // returns true or false based on button pushed
  if (happy) {
    console.log("Happiness is good.");
  }
}

switch(age) {
  case 18:
    console.log("you are adult");
    break;
  case 21:
    console.log("you can now drink");
    break;
  default: 
    console.log("All other ages");
}

let counter = 1;
while ( counter < age ) {
  console.log("year " + counter);
  counter++;
}

let forcount;
for (forcount = 1; forcount < age; forcount++ ) {
  console.log("year " + counter);
}

var s = "I am a string.";
// length property of any string variable returns number of characters in string
console.log( s.length );

// custom named block of code = function
function sneeze(x) {
  if (x === 10) {
    let y = 100;
  } else {
    let y = x * 20;
  }
  return y;
}

// to have the browser perform the code in our custom function, call it by name with parens
let z = sneeze(10);
console.log(z);