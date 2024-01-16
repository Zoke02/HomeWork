function landscapeOrPortrait(width, height) {
    return width > height ? 'Landscape' : 'Portrait';
}

let test = landscapeOrPortrait(1280, 1024);
console.log(test);

function isLandscape(width, height) {
    return width > height;
}

let test2 = isLandscape(1280, 1024);
console.log(test2);
