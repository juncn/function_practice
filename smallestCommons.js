/**
 * Find the smallest common multiple of the provided parameters that can be 
 * evenly divided by both, as well as by all sequential numbers in the range 
 * between these parameters.
 * 
 * common multiple:
 * 1: 1, 2,  3,  4,  5,  ..., 60, ...
 * 5: 5, 10, 15, 20, 25, ..., 60, ...
 * 
 * in this case, the answer is 60 since
 * 60 % 1 = 0
 * 60 % 2 = 0
 * 60 % 3 = 0
 * 60 % 4 = 0
 * 60 % 5 = 0
 * 
 * smallestCommons([1, 5]) should return a number
 * smallestCommons([1, 5]) should return 60
 * smallestCommons([5, 1]) should return 60
 * smallestCommons([1, 13]) should return 360360
 * smallestCommons([23, 18]) should return 6056820
 */



function smallestCommons(arr) {
    // Euclidean algorithm of finding gcd
    function findGCD(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);

        var t = null;
        while (y) {
            t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    // Create new array to hold missing value between arr[0] and arr[1]
    var fullArray = [];
    for(var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--){
        fullArray.push(i);
    }

    var lcm = fullArray[0];
    var gcd = null;
    for(var j = 1; j < fullArray.length; j++){
        gcd = findGCD(lcm, fullArray[j]);
        lcm = lcm * fullArray[j] / gcd;
    }
    return lcm;
}


function findGCD(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    var t = null;
    while (y) {
        t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(findGCD(12, 5));

// console.log(smallestCommons([1, 5]));
