//Code by musfirotus
function faktorial(x) {
    if(x < 0) return;
    if(x === 1) return 1;
    return x * faktorial(x - 1);
}
console.log(faktorial(3));