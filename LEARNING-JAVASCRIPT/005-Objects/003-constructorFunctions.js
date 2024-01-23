// Constructor Function are writte in Pascal Notation: OneTwoThreeFour

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    };
}
// "this" points to the "x" object
// "new" basicly means "const x = {}"

const circle = new Circle(5);
circle.draw();
