const grades = [90, 90, 80, 90, 50, 30];

// Average = 70

// 1-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

function calculateGrade(grades) {
    let numberOfGrades = 1;
    let sumOfGrades = 0;
    let averageGrade = 0;
<<<<<<< HEAD
    let message = 'Student grade is:';
    console.log(grades);
=======
    let message = 'Student Average Grade:';
>>>>>>> 98ea5373b7d57bb59f5fe8e4ca21ff579ad8215f
    for (let grade in grades) {
        // console.log(grade);
        numberOfGrades = ++grade;
    }
    // console.log(numberOfGrades);
    for (let grade of grades) {
        sumOfGrades += grade;
    }
    // console.log(sumOfGrades);
    averageGrade = sumOfGrades / numberOfGrades;
<<<<<<< HEAD
    console.log(averageGrade);
    if (averageGrade < 60) console.log(message, 'F');
    else if (averageGrade < 70) console.log(message, 'D');
    else if (averageGrade < 80) console.log(message, 'C');
    else if (averageGrade < 90) console.log(message, 'B');
    else console.log(message, 'A');
=======
    // console.log(averageGrade);
    if (averageGrade >= 90) console.log(message, 'A');
    else if (averageGrade >= 80) console.log(message, 'B');
    else if (averageGrade >= 70) console.log(message, 'C');
    else if (averageGrade >= 60) console.log(message, 'D');
    else console.log(message, 'F');
>>>>>>> 98ea5373b7d57bb59f5fe8e4ca21ff579ad8215f
}

calculateGrade(grades);

// Mosh Answer

// function calculateGrades(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array) sum += value;
//     return sum / array.length;
// }
