// Booleans 
// Boolean values are either true or false.
// They are mainly used to compare two variables.
// For example, if we compare two variables using the greater than operator >, it will return a boolean value.
// Examples
let isLightOn = true;
let isRaining = false;
let hungry = true;
let isMarried = false;
let truValue = 4 > 3; // true
let falseValue = 4 < 3; // false
// Truthy and Falsy Values
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.\
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, 
// undefined, and NaN).
// All strings are truthy except empty strings.
// All numbers are truthy except 0, -0, 0n, NaN, which are falsy.
// Falsy Values
  // 0
  // On
    // Off
    // null
    // undefined
    // NaN
    // the boolean false
    // the empty string ""
// Undefined
// If we declare a variable and if we do no assign a value will be undefined
// If a function is not returning a value then it will be undefined 
let firstName 
console.log(firstName)// not defined 
// Null
//let empty = Null;
//console.log(empty)// -> Null, means no value
//Operators 
// Assignment operator
let firstName2 = "Hersi";
//Arithmetic Operators 
   // They are mathematical operators.
   // Addition(+): a + b;
   // subtraction(-): a-b;
   // multiplication(*): a * b;
   // Division(/): a / b;
   //modulus(%)
// EXAMPLES USING ARITHMETIC OPERATORS
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let multi = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
console.log(sum, diff, multi, div, remainder);
// example 2
const PI = 3.14;
let radius = 100; // length in meter
// let areaOfCircle = PI * radius * radius;
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle); // 314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram
// let weight = mass * gravity;
const weight = mass * gravity;
console.log(weight); // 706.32 N(Newton)

const boilingPoint = 100; // temperature in oC, boiling point of water
const bodyTemp = 37; // body temperature in oC
// concatenating string with numbers using string interpolation
// The boiling point of water is 100 oC. Human body temperature is 37 oC.
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`);
// Comparison Operators
// In programming we can compare values 
// There are two types of comparison operators.
// examples of comparison operators
console.log(3>2) // true, because 3 is greater than 2
console.log(3>=2) // true, because 3 is greater than 2
console.log(3<2) // false,  because 3 is greater than 2
console.log(2<3) // true, because 2 is less than 3
console.log(2<=3) // true, because 2 is less than 3
console.log(3==2) // false, because 3 is not equal to 2
console.log(3!=2) // true, because 3 is not equal to 2
console.log(3==3) // true, because 3 is equal to 3
console.log(3!=3) // false, because 3 is equal to 3
console.log(3==='3') // false, because 3 is not equal to '3'
console.log(3!=='3') // true, because 3 is not equal to '3'
console.log(0==false) // true, because false is equivalent to 0
console.log(0===false) // false, because they are not the same type
console.log(0==0) // true, because 0 is equal to 0
console.log(0===0) // true, because 0 is the same type as 0
// console.log(0 = ' ')// true, because 0 is equal to 0
console.log('' = '')// true, because 0 is equal to 0
console.log('str' = 'str')// true, because 0 is equal to 0
console.log(0 = ' ')// true, because 0 is equal to 0
// Logical Operators
// The following symbols are the common logical operators:&&(ampersand),||(pipe) and !(negation).
// The && operator only returns true for true && true.
// The || operator returns true for false || true, true || false, and true || true.
// The ! negates true to false and false to true.
// Examples
// && ampersand operator example
const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2= 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false
// || pipe or operator
const check4 = 4 > 3 || 10 > 5; // true || true -> true
const check5 = 4 > 3 || 10 < 5; // true || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false
// ! Negation operator example
let checko = 4>3
let checko2 = 10<5
console.log(!checko) // false
console.log(!checko2) // true
// Increment and Decrement Operators
*/ In JavaScript we use the increment operator(++) and decrement operator(--) to add or subtract 1 from a variable.*/
// 1.Pre-increment
let count = 0;
console.log(++count);
console.log(count);
// 2.Post-increment 
let count2 = 0;
console.log(count2++);
console.log(count2);
// Decrement operator
*/ In JS we use the decrement operator(--) to decrease a value by stored in a variable by 1.*/
*/ The decrement could be pre or post decrement.*/
// 1.Pre-decrement
let count3 = 0;
console.log(--count3);
console.log(count3);
// 2.Post-decrement
let count4 = 0;
console.log(count4--);
console.log(count4);
// Ternary Operator
let isRaining = true;
isRaining
   ? console.log("You need a rain coat.")
   : console.log("No need for a rain coat.");
isRaining = false;
isRaining
    ? console.log("You need a rain coat.")
    : console.log("No need for a rain coat.");
// Example 2
let number = 5;
number > 0
     ? console.log(`${number} is a positive number`)
      : console.log(`${number} is a negative number`);
number = -5;
number > 0
      ? console.log(`${number} is a positive number`) 
      : console.log(`${number} is a negative number`);
// Operator predecence 
// Operator predecence determines how operators are parsed concerning each other.
// Windows Methods
// Alert
// The alert() method displays an alert box with a specified message and an OK button.
alert("message");
// Prompt
// The prompt() method displays a dialog box that prompts the visitor for input.
// A prompt box is often used if you want the user to input a value before entering a page.
// Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
// If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
prompt("Enter your name");
// Confirm
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
// A confirm box is often used if you want the user to verify or accept something.
// Note: When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
// If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
confirm("Are you sure you want to do this?");
// Console Methods
// Console.log()
// The console.log() method writes a message to the console.
console.log("30 Days Of JavaScript");
// Console.error()
// The console.error() method writes an error message to the console.
console.error("This is an error message");
// Console.warn()
// The console.warn() method writes a warning to the console.
console.warn("This is a warning message");
// Console.table()
// The console.table() method writes a table in the console view.
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);
// Console.time() and Console.timeEnd()
// The console.time() method starts a timer in the console view.
// It can be useful for testing how long a function takes to run.
console.time("Regular for loop");
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
console.timeEnd("Regular for loop");
// Regular for loop: 0.02099609375ms
// The console.timeEnd() method stops a timer that was previously started by console.time().
// Console.info()
// The console.info() method writes an information message to the console.
console.info("30 Days of JavaScript challenge is trending on Github");
// Console.assert()
// The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
console.assert(4 > 3, "4 is greater than 3");
console.assert(3 > 4, "3 is not greater than 4");
// DOM
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// A Web page is a document. This document can be either displayed in the browser window or as the HTML source.
// But it is the same document in both cases. The Document Object Model (DOM) provides another way to represent, store, and manipulate that same document. The DOM is a fully object-oriented representation of the web page, and it can be modified with a scripting language such as JavaScript.
// The DOM is constructed as a tree of Objects:
// The Document object is the root node of our web page
// All elements in the HTML page are represented as objects
// All different types of nodes are accessed through the Document Object Model
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// A Web page is a document. This document can be either displayed in the browser window or as the HTML source.
// Date objects
// Time is a very important concept in programming. To be able to use time we need to work with date objects.
// In js current time  and date are created using the new Date() object.
// In js current time and date are created using the new Date() object.
// The methods we use to get date and time in js are:
// getFullYear() - get the year
// getMonth() - get the month
// getDate() - get the day of the month
// getDay() - get the day of the week
// getHours() - get the hour
// getMinutes() - get the minutes
// getSeconds() - get the seconds
// getMilliseconds() - get the milliseconds
// getTime() - get the time, in milliseconds since 1970/01/01
// getDay() - get the weekday as a number (0-6)
// Date.now() - get the time now
// Date.parse() - parse a date string and return the number of milliseconds since January 1, 1970
// Date.UTC() - parse a date string and return the number of milliseconds since January 1, 1970, according to UTC
// Date.now() - returns number of milliseconds since January 1, 1970 00:00:00 UTC
// creating a datetime object
const now = new Date();
console.log(now);
// creating a datetime object
const now = new Date();
console.log(now.getMonth());
