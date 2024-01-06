// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

// console.log(1 | 2); // Bitwise OR "|"
// console.log(1 & 2); // Bitwise OR "&"

// Read,Write,Execute
// 00000100 - Read
// 00000110 - Read,Write
// 00000111 - Read,Write,Execute

const readPermision = 4;
const writePermision = 2;
const executepermision = 1;

let myPermision = 0;
myPermision = myPermision | readPermision | writePermision;
// console.log(myPermision);

let message = myPermision & readPermision ? 'Yes' : 'No';
console.log(message);
