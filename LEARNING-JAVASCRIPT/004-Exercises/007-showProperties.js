const movie = {
    title: 'A',
    year: 1991,
    rateing: 4.5,
    director: 'B',
};

function showProperties(object) {
    for (let items in object) {
        if (typeof object[items] == 'string') console.log(items, object[items]);
    }
}

showProperties(movie);
