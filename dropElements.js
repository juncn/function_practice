/**
 * Drop the elements of an array (first argument), starting from the front, 
 * until the predicate (second argument) returns true.
 * 
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]
 * dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]
 * dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3]
 * dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return []
 * dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4]
 * dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2]
 */


function dropElements(arr, func) {
    var copiedArr = arr.slice();
    for (var i = 0; i < arr.length; i++){
        if(!func(arr[i])){
            copiedArr = arr.slice(i+1);
        } else {
            return copiedArr;
        }
    }
    return [];
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));
console.log(dropElements([0, 1, 0, 1], function (n) { return n === 1; }));
console.log(dropElements([1, 2, 3], function (n) { return n > 0; }));
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));
console.log(dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }));
console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }));

