/**
 * whatIsInAName([
 *                  { first: "Romeo", last: "Montague" }, 
 *                  { first: "Mercutio", last: null }, 
 *                  { first: "Tybalt", last: "Capulet" }
 *              ], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]
 * 
 * whatIsInAName([
 *                  { "a": 1 }, 
 *                  { "a": 1 }, 
 *                  { "a": 1, "b": 2 }
 *              ], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
 * 
 * whatIsInAName([
 *                  { "a": 1, "b": 2 }, 
 *                  { "a": 1 }, 
 *                  { "a": 1, "b": 2, "c": 2 }
 *              ], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]
 * 
 * whatIsInAName([
 *                  { "a": 1, "b": 2 }, 
 *                  { "a": 1 }, 
 *                  { "a": 1, "b": 2, "c": 2 }
 *              ], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }]
 */


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    
    // Only change code below this line
    var sourcePro = Object.keys(source);
    for(var i = 0; i < collection.length; i++){
        var count = 0;
        for(var j = 0; j < sourcePro.length; j++){
            if(collection[i].hasOwnProperty(sourcePro[j]) && collection[i][sourcePro[j]] === source[sourcePro[j]]){
                count++;
            }
        }
        if(count === sourcePro.length){
            arr.push(collection[i]);
        }
    }

    // Only change code above this line
    console.log(arr);
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });