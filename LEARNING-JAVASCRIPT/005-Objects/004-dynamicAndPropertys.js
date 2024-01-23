// PART 1
// Dynamic Properties

// const circle = {
//     radius: 1,
// };

// circle.color = 'Yellow';
// circle.draw = function () {};

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// const means u cant reassign the variable "const circle = {}"..but u can change it.

// PART 2
// Factory Function

// function createCircle(radius) {
//     return {
//         radius,

//         draw() {
//             console.lot('Draw');
//         },
//     };
// }

// const circle = createCircle(1);

// // Constructor Function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('Draw');
//     };
// }

// const another = new Circle(5);

// PART 3
let x = {};
// Above is beeing translated to: let x = new Object();

new String(); // "" `` ''
new Boolean(); // true, false
new Number(); // 1,2,3....

// Every object has a constructor property and that references the function that was used to create it.
