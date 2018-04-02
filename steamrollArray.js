/**
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
 * steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
 * steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]
 * steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
 */


function steamrollArray(arr) {
    var flattenedArray = [];
    
    // If element is not an array
        // Push it to flattenedArray
    // Else
        // Flatten each level
    function flatten(element){
        if(!Array.isArray(element)){
            flattenedArray.push(element);
        } else {
            for(var e in element){
                flatten(element[e]);
            }
        }
    }

    arr.forEach(flatten);

    return flattenedArray;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));