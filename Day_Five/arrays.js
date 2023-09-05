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
// Accessing arrays using index
// syntax
// const arr = []
// console.log(arr[index])
const fruits1= ['banana', 'orange', 'mango', 'lemon']
console.log(fruits1[0]) // banana
console.log(fruits1[1]) // orange
console.log(fruits1[2]) // mango
console.log(fruits1[3]) // lemon
// modifying array element
// an array element is mutable once created you can change it
// syntax
// const arr = []
// arr[index] = value //reassigning the value
const numbers1 = [1, 2, 3, 4, 5]
numbers1[0] = 10 // changing 1 at index 0 to 10
numbers1[1] = 20 // changing 2 at index 1 to 20
numbers1[2] = 30 // changing 3 at index 2 to 30
// Methods to manipulate array
// 1. Array length
// syntax
// const arr = []
// arr.length
const numbers2 = [1, 2, 3, 4, 5]
console.log(numbers2.length) // => 5
// Methods
// 1. Array length
// 2. array concat
// 3. array indexOf
// 4. array slice
// 5. array splice
// 6. array find
// 7. array findIndex 
// 8. array join
// 9. array includes
// 10. array lastIndexOf
// 11. array reverse
// 12. array push
// 13. array pop
// 14. array shift
// 15. array unshift
// 16. array fill
// 17. array from
// 18. array isArray
// 19. array of
// 20. array sort
// Array constructor 
// syntax
// Array() is used to create an array
// const arr = Array()
// const arr = Array(size)
// const arr = Array(element0, element1, ..., elementN)
const numbers3 = Array()
console.log(numbers3) // []
// creating a static values with fill
// fill: Fill all the array elements with a static value
const arr2= Array(8).fill('*')

console.log(arr2) // ["*", "*", "*", "*", "*", "*", "*", "*"]

// coNcat: Merge two or more arrays
// concat: Merge two or more arrays
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// Getting array length
// length: Get the length of an array
const numbers4 = [1, 2, 3, 4, 5]
console.log(numbers4.length) // => 5
// indexOf: Find index of item in the array
const numbers5 = [1, 2, 3, 4, 5]
console.log(numbers5.indexOf(5)) // => 4
console.log(numbers5.indexOf(0)) // => -1
// check an element if it exist in an array
// we use includes method to check if an element exist in an array
// includes: Check if an item exist in an array
const numbers6 = [1, 2, 3, 4, 5]
console.log(numbers6.includes(5)) // => true
// let us check if a banana exist in the array
const fruits2 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits2.indexOf('banana')
if(index == -1)
console.log("This fruit it not is found in our array")
else
console.log("This fruit is found in our array")
// getting the last index of an element in an array
// lastIndexOf: Find the last index of an item in the array
const numbers7 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbers7.lastIndexOf(2)) // => 7
console.log(numbers7.lastIndexOf(0)) // => -1
const webTechs3 = ['HTML','CSS','JavaScript','React','Redux','node js ','mongo db']
console.log(webTechs3.includes('node js'))
console.log(webTechs3.includes('C'))
// checking an array
//Array.isArray :
const numbers0 =[1,2,3,4,5,6,6] 
console.log(Array.isArray(numbers0))
// converting array to string 
// toString: converts array to string 
const numbers12 = [1,2,3,4,5,6]
console.log(numbers12.toString())
const names = ['Yussuf',"Lee","Polo"]
console.log(names.toString())
// Joining array elements 
// join: it is used to join the elements of the array, the argument we passed in the join method will be joined in the 
// in the array and return as a string 
const numbers09 = [1,2,3,4,5,6,6] 
joined = numbers09.join()
console.log(joined)
const names11 = ['Yussuf',"Lee","Polo"]
console.log(names11.join())
console.log(names11.join(''))
console.log(names11.join(' '))
console.log(names11.join(','))
console.log(names11.join('#'))
const webTechs4 = ['HTML','CSS','JavaScript','React','Redux','node js ','mongo db']
console.log(webTechs4.join(':'))
// slice: returns a copy of the portion of the array
// used to count a multiple items in range. It takes two parameters: the starting index position and the ending index position
const numberz = [1,2,3,4,5,6,7,8,9]
console.log(numberz.slice(0,3))
console.log(numberz.slice(1,4))
console.log(numberz.slice(2,5))
// Adding item to an array using push
// push: adds one or more items to the end of the array and returns the new length of the array
const arrayz = ['item','item2','item3','item4','item5']
arrayz.push('item6')
console.log(arrayz)
// Removing the an element from the back using pop
// pop: removes the last element from the array and returns that element
const arrayz1 = ['item','item2','item3','item4','item5']
arrayz1.pop()
console.log(arrayz1)
// push methods
// push: adds one or more items to the end of the array and returns the new length of the array
const numbers8 = [1, 2, 3, 4, 5]
numbers8.push(6)
console.log(numbers8) // => [1, 2, 3, 4, 5, 6]
// Removing the end element using pop
const numbers9 = [1, 2, 3, 4, 5]
numbers9.pop()


