const grades = [80, 80, 50];

// Average = 70

// 1-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

function calculateGrade(grades) {
    let numberOfGrades = 0;
    let sumOfGrades = 0;
    let averageGrade = 0;
    for (let grade in grades) {
        // console.log(grade);
        numberOfGrades = grade;
    }
    // console.log(numberOfGrades);
    for (let grade of grades) {
        sumOfGrades += grade;
    }
    // console.log(sumOfGrades);
    averageGrade = sumOfGrades / numberOfGrades;
    console.log(averageGrade);
}

calculateGrade(grades);
