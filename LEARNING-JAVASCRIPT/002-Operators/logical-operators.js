// ***** Logical AND (&&) *****
// Returns TRUE if both operators are TRUE

// console.log(true && true);

// let hignIncome = true;
// let goodCredicScore = true;
// let eligibleForLohn = hignIncome && goodCredicScore;

// console.log(eligibleForLohn);

// ***** Logical OR (||) *****
// Returns TRUE if one of the operants is TRUE

// let hignIncome = false;
// let goodCredicScore = false;
// let eligibleForLohn = hignIncome || goodCredicScore;
// console.log('Eligible - ', eligibleForLohn);

// ***** Logical NOT (!) *****
// let aplicationRefuse = !eligibleForLohn; // If eligibleForLohn is true and '!' will convert that to false.
// console.log('Aplication Refused - ', aplicationRefuse);

// Logical Operators with non boolean

// ***** Falsy (false) ***** (false || 'Alin) (false || 1)
// undefined
// null
// 0
// false
// ''
// NaN
// ANYTHING THAT IS NOT FALSY IS TRUTHY
// Short-circuiting = false || 1 || 2

let userColor = '';
let defaultColor = 'Blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

let x = 10;
let y = x++;
console.log(y);
