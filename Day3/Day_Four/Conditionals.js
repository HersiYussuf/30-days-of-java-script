// Js conditional statements
// if, else, else if, switch, ternary operator
// if (condition) {
  // code goes here
// }
// if (condition) {
    // code goes here
// } else {
    // code goes here
// }
// if (condition) {
    // code goes here
// } else if (condition) {
    // code goes here
// } else {
    // code goes here
// }
// switch (expression) {
    // case x:
        // code goes here
        // break;
    // case y:

        // code goes here
        // break;
    // default:
        // code goes here
// }
// Examples of each
// switch case example
let weather = "cloudy"
switch (weather) {
    case "rainy":
        console.log("You need a rain coat.")
        break;
        case "cloudy":
            console.log("It might be cold, you need a jacket.")
            break;
            case "sunny":
                console.log("Go out freely.")
                break;
                default:
                    console.log("No need for rain coat.")
}   
// switch case example 2
let dayUserInput = prompt("What day is today ?")
let day = dayUserInput.toLowerCase()
switch (day) {
    case "monday":
        console.log("Today is Monday")
        break;
        case "tuesday":
            console.log("Today is Tuesday")
            break;
            case "wednesday":
                console.log("Today is Wednesday")
                break;
                case "thursday":
                    console.log("Today is Thursday")
                    break;
                    case "friday":
                        console.log("Today is Friday")
                        break;
                        case "saturday":
                            console.log("Today is Saturday")
                            break;
                            case "sunday":
                                console.log("Today is Sunday")
                                break;
                                default:
                                    console.log("It is not a week day.")
}
