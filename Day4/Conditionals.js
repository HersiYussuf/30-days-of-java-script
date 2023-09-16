let userInput = parseInt(prompt("Enter your age:"))
if (userInput >= 18) {
    console.log("You are old enough to drive")
    else {
        timeLeft = 18 - userInput
        console.log(`You have left ${timeLeft} years to drive`)

}