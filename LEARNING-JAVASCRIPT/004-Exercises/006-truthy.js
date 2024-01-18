// Falsy
// undefined
// null
// ""
// false
// NaN
// 0

// Truthy

const test = [0, 1, 2, 3];

function countTruthy(array) {
    let count = 0;
    for (let items of array) if (items) count++;
    return count;
}

console.log(countTruthy(test));
