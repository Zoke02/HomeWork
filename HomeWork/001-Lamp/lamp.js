states = ['Green', 'Yellow', 'Red'];

state = 'Green';

power = true

function fromGreenToRed() {
    state = states[0];
    console.log(state);
    window.setTimeout(function () {
        state = states[2];
        console.log(state);
        window.setTimeout();
    }, 1000 * 5);
}

function fromRedToGreen() {
    state = states[2];
    console.log(state);
    window.setTimeout(function () {
        state = states[0];
        console.log(state);
    }, 1000 * 10);
}

while (power = true) {
    
}
