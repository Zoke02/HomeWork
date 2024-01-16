// Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by both = FizzBuzz

function fizzBuzz(number) {
    if (typeof number !== 'number') return NaN;
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
}

let number = fizzBuzz(true);
console.log(number);
