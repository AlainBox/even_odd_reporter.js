// Whenever checking 1 loop, please comment out other 2 loops for better readability.

for (let i = 0; i <= 20; i++){
    if (i === 0){
        console.log(i + " is even");
    } else if (i % 2 === 0){
        console.log(i + " is even");
    } else {
        console.log(i + " is uneven");
    }
}

for (let i = 1; i <= 10; i++){
    const table = 9
    const result = i * table;
    console.log(i, "x", table, "=", result);
}

for (let i = 1; i <= 10; i++){
    for (let m= 1; m <= 10; m++){
        const table = m
        const result = i * table;
        console.log(i, "x", table, "=", result);
    }
}
