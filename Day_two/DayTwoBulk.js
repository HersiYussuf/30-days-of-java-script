let randomNum = Math.random(); // Generates a random decimal number between 0 and 1 (exclusive)
let numBtnZeroAndTen = randomNum * 11; // Generates a random decimal number between 0 and 11
console.log(numBtnZeroAndTen); // Logs the random decimal number

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen); // Rounds the random decimal number down to the nearest integer
console.log(randomNumRoundToFloor); // Logs the rounded number
// paragraphs
const paragraph = "This meta tag is crucial for responsive web design. It set\
the viewport properties for different screen sizes. The width=device-width ensures\
that the page content takes the width of the device's screen, and initial-scale=1.0\
sets the initial zoom level to 1.0,preventing unnecessary zooming on mobile devices."
console.log(paragraph)
// Escape sequences in Strings 
// \n = newline
// \t = tab
// \\ = backslash
// \' = single quote
// \" = double quote
console.log('I hope everyone is ennjoying the 30 days of JavaScript challenge.\nDo you?')
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash symbol (\\)')
console.log('In every programming language it starts with \"Hello world"')
console.log("In every Programming language it starts with \' Hello World'")
console.log('The saying \'Saying is Believing\' isn\'t correct 2020')
// Template Strings
// `This is a string literal text`
// `String literals text ${expression}`
// Example 
console.log('The sum of 2 and 3 is 5')// statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a}  and ${b} is  ${a+b}`)// dynamically writing the data
//example 2
let firstName = 'Yussuf'
let lastName = 'Hersi'
let country = 'Kenya'
let city = 'Nairobi'
let language = 'JavaScript'
let job = 'Data Scientist and a Developer'
let age = 20
let fullName = firstName + ' ' + lastName
let personInfoTwo = `I am ${fullName} . I am ${age}.I live in ${country}.I live in ${city}.I am a ${job}. I am learning ${language}.`
console.log(personInfoTwo)
// Using string template literals makes it easier to write and interpolate variables and expressions in a string.
//Using template or string interpolation method, we can add expression , which could be value to, or some operation
// that should be performed in the string.
// Example
let k = 2;
let g = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}: ${a>b}`)
//String Methods
// String methods are methods that are available to strings
// String Methods are used to perform operations on strings
// String Methods are built-in JavaScript methods
// We can apply string methods on string literals or string object
// Use the . operator to access any string method
// Example
// Length methods
let js = 'JavaScript'
console.log(js.length)
// Accessing characters in a string using index
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)
let secondLetter = string[1]
console.log(secondLetter)
let thirdLetter = string[2]
console.log(thirdLetter)
let lastLetter = string[9]
console.log(lastLetter)
let lastIndex = string.length - 1
console.log(lastIndex)
console.log(string[lastIndex])
//toUpperCase() This methods changes a string to uppercase
let string1 = 'javascript'
console.log(string1.toUpperCase())
//toLowerCase() This a method that changes a string to lowercase
console.log(string1.toLowerCase())
// substr() This method returns a substring from a string. It takes two arguments, the starting index and number of characters to slice.
// It takes only two arguments, the starting index and the number of characters to slice

let string2 = 'JavaScript'
console.log(string2.substr(4,6))// 
let country1 = 'Finland'
console.log(country.substr(3,4))
// 6. substring(): It takes two arguments, the starting index and the stopping index but it does not include the characters at the stopping index.
let string3 = 'JavaScript'
console.log(string3.substring(0,4))
console.log(string.substring(4,10))
let country7 = "Finland"
console.log(country.substring(0,3))
console.log(country.substring(3,7))
// 7.split(): This method splits a string at a specified separator and returns an array of strings.
console.log(string.split())// returns the whole string as an array of strings
console.log(string.split(''))// returns each character as an array of strings
// 8.trim() Removes trailing space in the beginning or the end of a string.
let string4="   30 days of JS"
console.log(string4.trim(' '))
// 9.includes(): it takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
let string5 = '30 Days Of JavaScript'
console.log(string5.includes('Days'))// true
console.log(string5.includes('days'))// false
// 10.replace(): Takes as a parameter the old substring and a new substring.
let string6 = '30 Days Of JavaScript'
console.log(string6.replace('JavaScript','Python'))
// 11.charAt(): Takes an index argument and it returns the character at the index.
let string7 = '30 Days Of JavaScript'
console.log(string7.charAt(0))
// 12.charCodeAt(): Takes an index argument and it returns the char code (ASCII number) of the character at the index.
let string8 = '30 Days Of JavaScript'
console.log(string8.charCodeAt(3))

// 13.indexOf(): Takes a substring argument and it returns the index of the first match. The index of the first character of a string is 0, the second character is 1, and so on.
let string9 = '30 Days Of JavaScript'
console.log(string9.indexOf('D'))
console.log(string9.indexOf('Days'))
console.log(string9.indexOf('days'))
// 14.lastIndexOf(): Takes a substring argument and it returns the index of the last match.
let string10 = '30 Days Of JavaScript'
console.log(string10.lastIndexOf('a'))
console.log(string10.lastIndexOf('Days'))
// 15.concat(): Takes many substring arguments and it returns a new string that is a combination of all the substring arguments.
let string11 = '30'
let string12 = 'Days'
let string13 = 'Of'
let string14 = 'JavaScript'
console.log(string11.concat(string12,string13,string14))
// 16.startsWith: It takes a substring argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
let string15 = '30 Days Of JavaScript'
console.log(string15.startsWith('30'))
console.log(string15.startsWith('Days'))
// 17.endsWith(): It takes a substring argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
let string16 = '30 Days Of JavaScript'
console.log(string16.endsWith('30'))
console.log(string16.endsWith('JavaScript'))
// 18.search(): It takes a substring argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
let string17 = '30 Days Of JavaScript'
console.log(string17.search('Days'))
console.log(string17.search(0))
// 19.match(): It takes a substring or regular expression pattern and it returns an array if there is match if not it returns null.
let string18 = '30 Days Of JavaScript'
console.log(string18.match('Days'))
// Checking the types of the datatypes using the typeof
let firstName1 = 'Yussuf'
let lastName1 = 'Hersi'
let country2 = 'Kenya'
let city2 = `Nairobi`
let language2 = 'JavaScript'
let job2 = 'Data Scientist and a Developer'
let age2 = 20.90
console.log(typeof(firstName1))
console.log(typeof(lastName1))
console.log(typeof(country2))
console.log(typeof(city2))
console.log(typeof(language2))
console.log(typeof(job2))
console.log(typeof(age2))
// changing datatypes and typecasting them
// Casting is converting to from one data type to another
// We use parseInt() to convert a string to an integer
// We use parseFloat() to convert a string to a floating point number
// We use Number() to convert a string to a number
// We use String() to convert from number to string
// We use Boolean() to convert to a boolean value
let string19 = '9.81'
console.log(typeof(string19))
let num = parseFloat(string19)
console.log(num)
// float to int
let string20 = '9.81'
let num1 = parseFloat(string20)
console.log(num1)
let num2 = parseInt(string20)
console.log(num2)
