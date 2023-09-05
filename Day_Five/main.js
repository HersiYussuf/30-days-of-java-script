// How to Accessing countries.js and web_techs.js from main.js
import {countries} from './countries.js'
import {webtechs} from './web_techs.js' 
// 2. First remove all the functions and change related names and function calls by using the above two arrays
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.split(' ');
console.log(words);
// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add meat
newShoppingCart = shoppingCart.push('Meat');
console.log(shoppingCart);
// add sugar at the end of array
newShoppingCart2 = shoppingCart.push('Sugar');
console.log(shoppingCart);
// Remove Honey and Tea from the shopping cart
newShoppingCart3 = shoppingCart.splice(2, 2);
console.log(shoppingCart);
// modify Coffee to 'Green Tea'
newShoppingCart4 = shoppingCart.splice(1,1, 'Green Tea');
console.log(shoppingCart);
// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}
console.log(countries);
// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.
if (webtechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webtechs.push('Sass');
}
console.log(webtechs);
// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// Exercise Level 3:
// 7. The following is an array of 10 students ages:
const ages = [19,22,19,24,20,25,26,24,25,24]
// Sort the array and find the min and max age
sortedAge = age.sort();
console.log(sortedAge);
console.log(sortedAge[0]);
console.log(sortedAge[sortedAge.length -1]);
// Find the median age(one middle item or two middle items divided by two)
if (sortedAge.length % 2 == 0) {
    console.log(sortedAge[sortedAge.length / 2]);
} else {
    console.log(sortedAge[Math.floor(sortedAge.length / 2)]);
}
// Find the average age(all items divided by number of items)
let sum = 0;
for (let i = 0; i < sortedAge.length; i++) {
    sum += sortedAge[i];
}
console.log(sum / sortedAge.length);
// Find the range of the ages(max minus min)
console.log(sortedAge[sortedAge.length -1] - sortedAge[0]);
// Compare the value of (min - average) and (max - average), use abs() method 1
console.log(Math.abs(sortedAge[0] - (sum / sortedAge.length)));
console.log(Math.abs(sortedAge[sortedAge.length -1] - (sum / sortedAge.length)));
// 8. Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));
// Find the middle country(ies) in the countries array
if (countries.length % 2 == 0) {
    console.log(countries[countries.length / 2]);
}
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length % 2 == 0) {
    console.log(countries.slice(0, countries.length / 2));
    console.log(countries.slice(countries.length / 2));
}

