/*
console.log(mul(2)(3)(4));      // Output: 24
console.log(mul(3)(4)(4));      // Output: 48
*/

function mul(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}

console.log(mul(2)(3)(4));
console.log(mul(3)(4)(4));
