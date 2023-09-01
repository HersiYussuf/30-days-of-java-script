let userInput = parseInt(prompt("Enter your age:"))
if (userInput >= 18) {
    console.log("You are old enough to drive")
    else {
        timeLeft = 18 - userInput
        console.log(`You have left ${timeLeft} years to drive`)

}
// 2. compare the values of myAge and yourAge and use the appropriate operator to print out whether myAge is greater than or equal to yourAge.
let myAge = 250;
let yourAge = 25;
if (myAge >= yourAge) {
    ageDifference = myAge - yourAge
    console.log(`I am ${ageDifference} years older than you`)
  
}
else {
    console.log("I am younger than you")
}
// Exervise level 2:
// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
let score = parseInt(prompt("Enter your score:"))
if (score >= 80 && score <= 100){
    console.log("A")

}
else if (score >= 70 && score <= 79){
    console.log("B")

}
else if (score >= 60 && score <= 69){
    console.log("C")

}
else if (score >= 50 && score <= 59){
    console.log("D")

}
else if (score >= 0 && score <= 49){
    console.log("F")

}
else {
    console.log("Invalid score")
}
// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = prompt("Enter the month:")
if (month == "September" || month == "October" || month == "November"){
    console.log("The season is Autumn")

}
// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day  today? Saturday
//     Saturday is a weekend.
//     What is the day today? saturDaY
//     Saturday is a weekend.
//     What is the day today? Friday
//     Friday is a working day.
//     What is the day today? FrIDAy
//     Friday is a working day.
let day = prompt("Enter the day:")
if (day == "Saturday" || day == "sunday""){
    console.log("Weekend day")

}
else {
    console.log("Working day")
}
// 4. Write a program which tells the number of days in a month.
//     Enter a month: January
//     January has 31 days.
//     Enter a month: JANUARY
//     January has 31 day
//     Enter a month: February
//     February has 28 days.
//     Enter a month: FEbruary
//     February has 28 days.
let month = prompt("Enter the month:")
if (month == "January" || month == "JANUARY"){
    console.log("January has 31 days")
    