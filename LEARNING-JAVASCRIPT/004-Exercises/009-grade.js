const grades = [80, 80, 50];

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
    let message = 'Student Average Grade:';
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
    // console.log(averageGrade);
    if (averageGrade >= 90) console.log(message, 'A');
    else if (averageGrade >= 80) console.log(message, 'B');
    else if (averageGrade >= 70) console.log(message, 'C');
    else if (averageGrade >= 60) console.log(message, 'D');
    else console.log(message, 'F');
}

calculateGrade(grades);
