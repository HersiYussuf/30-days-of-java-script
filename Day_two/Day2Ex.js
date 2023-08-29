// 1.Declare a variable called challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
//2.Print the string on the browser console using console.log()
console.log(challenge)
//3.Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//4.Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
//6.Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0,2))
//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3,18))
//8.Check if the string contains a word Script using includes() method
console.log(challenge.includes('Days'))
//9.Split the string into an array using split() method
console.log(challenge.split())
//10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))
//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))
//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'))
//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))
//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11))
//15.Use indexOf to determine the position of the first occurrence of a in v30 Days Of JavaScript
console.log(challenge.indexOf('a'))
//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))
//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))
//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let string10 = ' 30 Days Of JavaScript '
console.log(string10.trim(' '))
//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))
//23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))
//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string11 = '30 Days of'
let string12 = 'JavaScript'
console.log(string11.concat(string12)
//25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))
//26.Love is the best thing in this world. Some found their love and some are still looking for their love. Count the number of word love in this sentence.
let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence1.match('love'))
//     ========Exercise Level 2======
//1.Exercise Level 2
//1.Exercise Level 2
// 1 using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
//2.using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
//3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10')!==10)
//4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8'))
//5.Check if 'on' is found in both python and jargon
