"use strict"; // tell browser to use modern code rules for current javascript

// console.log("hello");

let y = 2;
let x = "5";

// data type conversion is automatic in javascript

// - is unambiguous subtraction operator
// console.log(x - y);

// + is both addition operator for numbers, but concatenation operator for strings 
console.log(x + y);

console.log( Number(x) + Number(y) );

let myyear = 2022;

myyear = myyear + 10;
myyear += 10;

// const helps devs catch coding errors if someone tries to change a value in a variable not supposed to change
const myeyecolor = "brown";
// myeyecolor = "blue";

let q = [1, 2, "a", "b"];
// window.alert( q[0] );

// window.prompt user interaction
let age = window.prompt("How old in years and months as a decimal are you?");

let roundedAge = Math.round( Number(age) );
console.log(roundedAge);

if ( roundedAge > 13 ) {
  window.alert("You can join the club!");
} else {
  let happy = window.confirm("Are you happy?");
  console.log(happy);
  if (!happy) {
    // change the active web page's html markup by using document object!
    document.getElementById("mything").innerText = "I hope you feel better soon...";
  } else {
    document.getElementById("mything").innerText = "I am glad to hear you are happy";
  }
}

switch( roundedAge ) {
  //equiv to if (roundedAge==13)
  case 13:
    document.getElementById("thing2").innerText = "Old enough for federal COPPA rules";
    break;
  case 18:
    document.getElementById("thing2").innerText = "You are an adult";
    break;
  case 21:
    document.getElementById("thing2").innerText = "Old enough to drink";
    break;
  default:
    document.getElementById("thing2").innerText = "Another age entirely";
}

// while loops
let counter = 1;
while ( counter <= roundedAge ) {
  document.getElementById("thing2").innerHTML += "<br>year " + counter;
  counter++;
}
// for loops
for (let forcounter = 1; forcounter <= roundedAge; forcounter++) {
  document.getElementById("thing2").innerHTML += sayHi(forcounter);

}

// function is named block of code, equiv to a variable that holds code as its data
function sayHi(x) {
  if (x === 2) {
    return "Hello, dear friend " + x + "<br>";
  } else {
    return "";
  }
}

var s = "I am a string.";
// s.length is the number of characters in string
console.log(s.length);
