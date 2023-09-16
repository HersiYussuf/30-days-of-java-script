// Using custom functions
// in js a function can be created in couple of ways
// 1. function declaration
// 2. function expression
// 3. arrow function
// 4. Annomous function
// 5. Immediately Invoked Function Expression (IIFE)
// 6. Generator function
// 7. Async function
// 8. Function constructor
// 9. Function constructor with generator
// 10. Function constructor with async
// 11. Function constructor with async generator
// 12. Function constructor with async generator
// 13. Function constructor with async generator
// 14. Function constructor with async generator
// 15. Function constructor with async generator
// Function declaration
// syntax
function functionName(){
    // function body

}
functionName();
// Function without parameter and return type
function add(){
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
add();
// Function with returning value
function printFullName(){
    var firstName = "John";
    var lastName = "Doe";
    var fullName = firstName + " " + lastName;
    return fullName;
}
console.log(printFullName());
// Function with parameter and return type
function areaOfCircle(r){
    var area = Math.PI * r**2;
    return area;

}
console.log(areaOfCircle(5));
// a function with two parameters
function FunctionName(param1, param2){
    // function body
}
// A function with many parameters
function functionName(param1, param2, param3, param4, param5){
    // function body
}
// A function with default parameter
function functionName(param1, param2 = 10){
    // function body
}
function sumOfArray(arr){
    let sum = 0
    for (let i =0 ; i< Array.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10]));
// unlimited parameter in an arrow function
// let us access the arguments object
// arguments object is an array like object
// it is not an array
// it is an array like object
const sumAllNumbers = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}
console.log(sumAllNumbers(1,2,3,4,5,6,7,8,9,10));
// EXPRESSION FUNCTION 
const square = function(x){
    return x * x;

}
console.log(square(5));
// self invoking function
(function(n){
    console.log(n * n);

})
