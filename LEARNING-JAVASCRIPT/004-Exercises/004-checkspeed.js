// Check if a car passed speed limit of 70
// for every 5kmh more u get 1 point
// Math.floor(1.3) = 1
// 12 points = licence suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint) console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) console.log('Licence Suspended');
        else console.log('Points:', points);
    }
}

// Cleaner;
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint) {
//         console.log('Ok');
//         return;
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) console.log('Licence Suspended');
//         else console.log('Points:', points);
//     }
// }
checkSpeed(71);
