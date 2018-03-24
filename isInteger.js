// Ways to write isInteger(x) that determines if x is an integer

function isInteger1(x){
    return (x ^ 0) === x;
}

console.log(isInteger1(2.3));
console.log(isInteger1(3));


function isInteger2(x){
    return Math.round(x) === x;
}
console.log(isInteger1(2.3));
console.log(isInteger1(3));


function isInteger3(x) {
    return (typeof x === 'number') && (x % 1 === 0);
}
console.log(isInteger1(2.3));
console.log(isInteger1(3));