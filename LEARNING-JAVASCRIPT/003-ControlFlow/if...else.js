// Hour
// If hour is betwin 6AM and 12PM - Greeting = Good Morning!
// If hour is betwin 12PM and 6PM - Greeting = Good Afternoon!
// Otherwise - Greeting = Good Evening!

// if (condition) {
//     statement;
// } else if (anotherCondition) {
//     statement;
// } else if (yetAnotherCOndition) {
//     statement;
// } else {
//     statement;
// }

let hour = 23;

if (hour >= 6 && hour < 12) {
    greeting = 'Good Morning!';
} else if (hour >= 12 && hour < 18) {
    greeting = 'Good Afternoon!';
} else {
    greeting = 'Good Evening!';
}

console.log(greeting);
