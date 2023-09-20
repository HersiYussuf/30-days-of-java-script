// We declare variable in js using var, let and const
//  A variable can be declared with different scopes 
// 1. Global scope
// 2. local scope
// anything declared without var, let and const is global

// window global object

a = "JavaScript";
b = 100;
function letsLearnScope(){
    console.log(a, b);
    if (true){
        console.log(a, b);
    }
}
console.log(a, b);
// Global scope

let a = "JavaScript";
let b = 10;
function letsLearnScope(){
    console.log(a,b)
}
// GLobal scope 
let a = "JavaScript";
let b = 100;
function letsLearnScope(){
    console.log(a, b);
    if (true){
        let a = "Python";
        let b = 50;
        console.log(a, b);
    }

}
// local scope
// let us learn about block scope
// A variable can accessed only in certain block of code 
// Block 
// Function scope
let a = "JavaScript";
let b = 100;
function letsLearnScope(){
    console.log(a, b);
    let value = false;
    if (true){
        let a = "Python";
        let b = 50;
        let value = true;
        console.log("Block scope", a, b, value);
    }
    console.log("Function scope", a, b, value);
}
// Objects
// Objects are variables that can contain many values
// creating an object
const person ={}
// creating an object with values
const person = {
    firstName:"John",
    lastName: "Doe",
    age: 25,
    country: "Finland",
    city: "Helsinki",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "MongoDB",
        "Python",
        "D3.js"
    ],
    isMarried: true
}
console.log(person);
// Getting values from an object
// Dot notation
console.log(person.firstName)