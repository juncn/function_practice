// sum method which will work properly when invoked using either syntax below.
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// Method 1
function sum1(x){
    if(arguments.length === 2){
        return arguments[0] + arguments[1];
    } else {
        return function(y){
            return x + y;
        }
    }
}
console.log(sum1(2, 3));   // Outputs 5
console.log(sum1(2)(3));   // Outputs 5

// Method 2 
function sum2(x, y){
    if(y !== undefined){
        return x + y;
    } else {
        return function(y){
            return x + y;
        }
    }
}

console.log(sum1(3, 4));   // Outputs 7
console.log(sum1(4)(3));   // Outputs 7