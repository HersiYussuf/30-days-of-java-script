// Exercise level
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Yussuf";
let lastName = "Hersi";
let country = "Kenya";
let city = "Nairobi";
let age = 20;
let isMarried = false;
let year = 2023;
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))
// Check if type of '10' is equal to 10
console.log(typeof('10')==10)
// Check if parseInt('9.8') is equal to 10
console.log(parseInt(('9.8'))==10)'))   
// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(10>0)
console.log(1==1)
console.log(10<100)
// Write three JavaScript statement which provide falsy value.
console.log(10<0)
console.log(1!=1)
// 6.Figure out the results of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// Exercise level 2:
// write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter the base of the triangle:")
let height = prompt("Enter the height of the triangle:")
let area = 1/2*base*height
console.log(area)
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = parseFloat(prompt("Enter side A of the triangle:"))
let sideB = parseFloat(prompt("Enter side B of the triangle:"))
let sideC = parseFloat(prompt("Enter side C of the triangle:"))
let perimeter = sideA + sideB + sideC;
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the area of triangle (area = s(s-a)(s-b)(s-c) ** 0.5)
let sideA1 = parseFloat(prompt("Enter side A of the triangle:"))
let sideB2= parseFloat(prompt("Enter side B of the triangle:"))
let sideC3 = parseFloat(prompt("Enter side C of the triangle:"))
let s = (sideA1 + sideB2 + sideC3)/2
let area1 = Math.sqrt(s*(s-sideA1)*(s-sideB2)*(s-sideC3))
console.log(area1)
// Write a script that prompt the user to enter length and width of a rectangle and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
//exercise level 3
// create human readable time format using the Date time object.The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
// Write a script that prompt a user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = prompt("Enter the number of years you have lived:")
let seconds = years*365*24*60*60
console.log(seconds)
// Create a human readable time format using the Date time object.
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()+1
