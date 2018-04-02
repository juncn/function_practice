/**
 * Check if the predicate (second argument) is truthy on all elements of 
 * a collection (first argument).
 * 
 * truthCheck([
 *              {"user": "Tinky-Winky", "sex": "male"}, 
 *              {"user": "Dipsy", "sex": "male"}, 
 *              {"user": "Laa-Laa", "sex": "female"}, 
 *              {"user": "Po", "sex": "female"}
 *            ], "sex") should return true
 * truthCheck([
 *              {"user": "Tinky-Winky", "sex": "male"}, 
 *              {"user": "Dipsy"}, 
 *              {"user": "Laa-Laa", "sex": "female"}, 
 *              {"user": "Po", "sex": "female"}
 *            ], "sex") should return false
 * truthCheck([
 *              {"user": "Tinky-Winky", "sex": "male", "age": 0}, 
 *              {"user": "Dipsy", "sex": "male", "age": 3}, 
 *              {"user": "Laa-Laa", "sex": "female", "age": 5}, 
 *              {"user": "Po", "sex": "female", "age": 4}
 *            ], "age") should return false
 * truthCheck([
 *              {"name": "Pete", "onBoat": true}, 
 *              {"name": "Repeat", "onBoat": true}, 
 *              {"name": "FastFoward", "onBoat": null}
 *            ], "onBoat") should return false
 * truthCheck([
 *              {"name": "Pete", "onBoat": true}, 
 *              {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
 *              {"name": "FastFoward", "onBoat": true}
 *            ], "onBoat") should return true
 * truthCheck([{"single": "yes"}], "single") should return true
 * truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
 * truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
 * truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
 */

function truthCheck(collection, pre) {
    // Loop through each element in the collection
    // For each element
        // Check if is has the property pre
            // if yes
                // check if property's value is true
                    // if yes, continue to next element
                    // else, return false
            // return false
    // return true
    for(var i = 0; i < collection.length; i++){
        if(collection[i].hasOwnProperty(pre)){
            if(!collection[i][pre]){
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"));
console.log(truthCheck([{ "single": "" }, { "single": "double" }], "single"));