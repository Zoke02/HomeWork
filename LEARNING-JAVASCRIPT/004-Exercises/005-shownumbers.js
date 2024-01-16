// Create a function, if the number is even display EVEN if its odd display ODD

// function showNumbers(limit) {
//     for (let iteration = 0; iteration <= limit; iteration++)
//         if (iteration % 2 === 0) console.log(iteration, 'EVEN');
//         else console.log(iteration, 'ODD');
// }

function showNumbers(limit) {
    for (iteration = 0; iteration <= limit; iteration++) {
        const message = iteration % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

showNumbers(10);
