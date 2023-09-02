// In contrast to variables, arrays can store multiple values.
// each value has an index number
// each index number starts from 0
// each index has a reference in a memory address
// Array is a collection of data types which are ordered and changeable(modifiable).
// How to create an empty array?
// In js , we can create an array in different ways:
// It is very common to use const instead of let to declare an array.
// if you are using a const it means you do not use that variable to reassign it.
// example 
// syntax 
// const arr = Array()
//or 
// let arr = new Array()
// console.log(arr)
// using a square bracket
// syntax
// This is the most recommended way to create an array.
// const arr = []
// console.log(arr)
// How to create an array with values?
//by using a square bracket
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = [ 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS','JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)
console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)
console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)
console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)
console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)
console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
// Arrays can have items of different data types
const arr = [
    'Yussuf Ahmed',
    250,
    true,
    { country:'Finland','city':'Helsinki' },
    { skills : ['HTML', 'CSS', 'JS', 'React', 'Python'] }

]
console.log(arr)
// creating an array using split
// syntax
// const arr = str.split(separator)
// const arr = str.split(separator, limit)
const js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
const companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split('*')
console.log(companies)