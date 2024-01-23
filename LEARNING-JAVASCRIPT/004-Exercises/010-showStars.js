function showStars(numberOfStars) {
    for (i = 1; i <= numberOfStars; i++) {
        star = '*';
        nrOfStars = i;
        console.log(star.repeat(i));
    }
}

showStars(6);

// Mosh Answer

// function showStars(rows) {
//     for (let row = 1; row <= rows; row++) {
//         // console.log(row);
//         let numberOfStars = '';
//         for (i = 0; i < row; i++) {
//             numberOfStars += '*';
//         }
//         console.log(numberOfStars);
//     }
// }

// showStars(5);
