/**
 * Create a function that sums two arguments together. If only one argument is provided, 
 * then return a function that expects one argument and returns the sum.
 * 
 * addTogether(2, 3) should return 5.
 * addTogether(2)(3) should return 5.
 * addTogether("http://bit.ly/IqT6zt") should return undefined.
 * addTogether(2, "3") should return undefined.
 * addTogether(2)([3]) should return undefined.
 */

function addTogether() {
    var arg = arguments[0];
    if(arguments.length > 1){
        for(var i = 0; i < arguments.length; i++){
            if(typeof arguments[i] !== 'number'){
                return undefined;
            }
        }
        return arguments[0] + arguments[1];
    } else {
        if(typeof arg !== 'number'){
            return undefined;
        } else {
            return function (x) {
                if(typeof x !== 'number'){
                    return undefined;
                }
                return x + arg;
            };
        }
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));



