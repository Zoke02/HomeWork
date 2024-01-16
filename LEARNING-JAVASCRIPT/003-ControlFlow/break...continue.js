let i = 0;

while (i <= 10) {
    // if (i === 5) break;
    if (i % 2 === 0) {
        i++;
        continue;
    }
    // Continue stopes the while loop here and goes back to condition (i <= 10) or same as jump to next iteration.
    console.log(i);
    i++;
}
