function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

const it = range(0, 10, 2);
it.next();

console.log(it.next());
it.next();
it.next();
it.next();
it.next();
console.log(it.next());
/*
for (let i of range(0, 10, 2)) {
    console.log(i) // 0, 2, 4, 6, 8
}
*/