function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) {
            return false;
            // console.log(false);
        }
    return true;
    // console.log(true);
}

function showPrimesOfLimit(limit) {
    for (let numbers = 2; numbers <= limit; numbers++)
        if (isPrime(numbers) === true) console.log(numbers);
}

showPrimesOfLimit(13);
