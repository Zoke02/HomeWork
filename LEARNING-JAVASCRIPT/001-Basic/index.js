const interesRate = 0.3;
console.log(interesRate);

let lastName = 'Nedelcu';
console.log(lastName);

let age = 30;
console.log(age);

let isAproved = true;
console.log(isAproved);

let firstName = undefined;
console.log(firstName);

let selectedColor = null;
console.log(selectedColor);

// Person Object

let person = {
    name: 'Alin',
    age: 30,
};

console.log(person);

// Dot Notation -  to read a object "person"

person.name = 'Nedelcu';
console.log(person.name);

// Bracket Notation

person['name'] = 'John';
console.log(person.name);

let selection = 'name';
person[selection] = 'Johny';
console.log(person.name);

// Aray

let selectedColors = ['Red', 'Green'];
selectedColors[2] = 1;
console.log(selectedColors);

// Function

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Alin', 'Smith');

function square(number) {
    return number * number;
}

console.log(square(2));
