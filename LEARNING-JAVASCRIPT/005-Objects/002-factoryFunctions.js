// Factory Functions are writte with cammel notation: oneTwoThreeFourFive

// Factory Function

function createCircle(radius) {
    return {
        radius,

        draw() {
            console.lot('Draw');
        },
    };
}

const circle1 = createCircle(1);
console.log(circle1.radius);
const circle2 = createCircle(5);
console.log(circle2.radius);
