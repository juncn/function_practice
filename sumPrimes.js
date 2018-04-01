/**
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, 
 * one and itself. 
 * For example, 2 is a prime number because it's only divisible by one and two.
 * 
 * sumPrimes(10) should return a number.
 * sumPrimes(10) should return 17.
 * sumPrimes(977) should return 73156.
 */

function sumPrimes(num) {
    var sum;
    var sumArray = [];
    // loop from 1 to num
    // for each value
        // check if the value is a prime
        // if yes
            // add to array
        // else
            // ignore, continue looping
    // sum up array using reduce
    for(var i = 1; i <= num; i++){
        if(checkPrime(i)){
            sumArray.push(i);
        }
    }

    // sum up all prime number between 1 to n
    sum = sumArray.reduce(function(total, amount){
        return total+= amount;
    });
    return sum;
}

function checkPrime(n){
    var sqrtOfN = Math.sqrt(n);
    for(var i = 2; i <= sqrtOfN; i++){
        if(n % i === 0){
            return false;
        }
    }
    return n !== 1;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
