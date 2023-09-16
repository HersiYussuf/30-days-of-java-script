// Exercise : Day 6
// Exercise level : Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'

]
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
1. Iterate 0 to 10 using for loop, do the same using while and do while loop.
// for loop
for (let i=0; i<=10; i++){
    console.log(i)
}
// while loop
let i = 0
while(i<=10){
    console.log(i)
    i++
}
// do while loop
let i = 0
do{
    console.log(i)
    i++
}
while(i<=10)
2. Iterate 10 to 0 using for loop, do the same using while and do while loop.
// for loop
for(let i = 10; i>=0; i--){
    console.log(i)
}
// while loop
while(i>=10){
    console.log(i)
    i--
}
// do while loop
let i = 10
do {
    console.log(i)
    i--
}
while(i>=10)
// 3. Iterate 0 to n using for loop.
// for loop
for(let i = 0; i<=10; i++){
    console.log(i)
}
// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
let pattern = '#'
for (let i = 0; i<=134; i++){
    console.log(pattern)
    pattern += "#"
}
// ####
// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let i = 0; i<=10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}
// 6. Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
for (let i = 0; i<=10; i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
}
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i<=100; 1++){
    if (i % 2 ===0){
        console.log(i)
    }
    else{
        console.log('Odd')
    }
}
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i<=100; i++){
    if (i % 2 !==0){
        console.log(i)
    }
    else{
        console.log('Even')
    }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i<=100; i++){
    if (i % 2 !==0){
        console.log(i)
    }
    else{
        console.log('Prime')
    }
}
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (let i = 0; i<=100; i++){
    sum += i
}
console.log(sum)
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sum1= 0
for (let i = 0; i<=100; i++){
    if (i % 2 ===0){
        sum += i
    }
}
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sum2 = 0
for (let i = 0; i<=100; i++){
    if (i % 2 === 0){
        sum += i

    }
}
console.log(sum)
// 13. Develop a small script which generate array of 5 random numbers
let randomNumbers = []
for (let i = 0; i<=5; i++){
    randomNumbers.push(Math.floor(Math.random()*100))
}
console.log(randomNumbers)
// 14. Develop a small script which generates six characters random id:
// Example output: 5j2khz
let randomId = ''
let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
for (let i = 0; i<=6; i++){
    randomId += characters.charAt(Math.floor(Math.random()*characters.length))

}
console.log(randomId)
// Exercise: Level 2
// 1. Develop a small script which generate any number of characters random id:
// Example output: 5j2kh
let randomId2 = ''
let n = randomId2.length
let characters2 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
for (let i = 0; i<=n; i++){
    randomId2 += characters2.charAt(Math.floor(Math.random()*characters2.length))
}
console.log(randomId2)
// 2. Write a script which generates a random hexadecimal number.
// '#ee33df'
let randomHexaDecimal = '#'
let characters3 = '0123456789abcdef'
for (let i = 0; i<=6; i++){
    randomHexaDecimal += characters3.charAt(Math.floor(Math.random()*characters3.length))
}
console.log(randomHexaDecimal)  
// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)
let randomRgbColor = []
for (let i = 0; i<=2; i++){
    randomRgbColor.push(Math.floor(Math.random()*255))
}
console.log(randomRgbColor)
// 4. Using the above countries array, create the following new array.
let countries1 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY"];
let newArrays = []; // Corrected the variable name to newArrays

for (let i = 0; i < countries1.length; i++) { // Use < instead of <= to avoid going out of bounds
    newArrays.push(countries1[i].toUpperCase()); // Convert each country name to uppercase and push it into newArrays
}

console.log(newArrays);
// 5. Using the above countries array, create an array for countries length'.
let countries2 = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany"];
let countriesLength = [];
for (let i = 0; i < countries2.length; i++){
    countriesLength.push(countries2[i].length)

}
// 6. Use the countries array to create the following array of arrays:
let countries3 = []
for (let i = 0; i < countries2.length; i++){
    countries3.push([countries2[i], countries2[i].slice(0, 3), countries2[i].length])
}
console.log(countries3)