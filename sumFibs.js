/**
 * Given a positive integer num, return the sum of 
 * all odd Fibonacci numbers that are less than or equal to num.
 * 
 * sumFibs(1) should return a number
 * sumFibs(1000)should return 1785
 * sumFibs(4000000)should return 4613732
 * sumFibs(4)should return 5
 * sumFibs(75024) should return 60696
 * sumFibs(75025) should return 135721
 * 
 */

function sumFibs(num) {
    var oddNumArr = [];
    var currentValue, prePreValue, preValue, sum;

    // Base case
    if(num === 0 || num === 1){
        return num;
    }

    // Bottom up method
    prePreValue = 0;
    preValue = 1;
    for(var i = 1; i < num; i++){
        currentValue = prePreValue + preValue;
        prePreValue = preValue;
        preValue = currentValue;
        if(currentValue <= num){
            oddNumArr.push(currentValue);
        }
    }
    sum = oddNumArr.reduce(function(total, amount, index, array){
        if(amount % 2 === 1){
            total += amount;
        }
        return total;
    }, 1);

    return sum;
}


console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
