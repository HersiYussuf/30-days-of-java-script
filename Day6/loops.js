// Loops are used for repetetive tasks
// There are 3 types of loops
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for in loop
// 5. for of loop
// for loop
// syntax
// for(initialization; condition; increment/decrement){
//      code to be executed
// }
// initialization: it is used to initialize the loop variable
// condition: it is used to check the condition
// increment/decrement: it is used to increment or decrement the loop variable
// code to be executed: it is the code that will be executed if the condition is true
// example
for (let i = 0; i < 25; --i) {
    console.log(i)
}
// Example 2
for (let i = 0; i <= 25; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
// example 3
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (let i = 0; i < countries.length; i++){
    console.log(countries[i].toUpperCase())

}
// Adding all elements in the array
const numbers = [1, 2, 3, 4, 5]
const newArray = []
let sum = 0
for (let i = 0; i < numbers.length; i++){
   newArray.push(numbers[i])    
}
// while loop
// syntax
// initialization
// while(condition){
//     code to be executed
//     increment/decrement
// }
// example
let i = 0
while(i <=8){
    console.log(i)
    i++
}
// Do while loop
// syntax
// initialization
// do{
//     code to be executed
//     increment/decrement
// }while(condition)
// example
let i = 0
do{
    console.log(i)
    i++
}
while(i <= 8)
// for in loop
// syntax
// for(variable in object){
//     code to be executed
// }
// example
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country in countries){
    console.log(country.toUpperCase())
}
// for of loop 
// syntax
// for(variable of object){
//     code to be executed
// }
// example
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries){
    console.log(country.toUpperCase())
}
// Break
// Break is used to terminate a loop
// example
for (let i = 0; i <= 10; i++){
    if (i === 5){
        break
    }
    console.log(i)

}
// continue
// continue is used to skip a step in a loop
// example
for (let i = 0; i <= 100;i++){
    if (i % 2 === 0){
        a
    }
}