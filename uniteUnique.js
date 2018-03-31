function uniteUnique(arr) {
    var resultArray = [];
    var curArray;
    for(var i = 0; i < arguments.length; i++){
        curArray = arguments[i];
        curArray.map(function(curEl){
            if(resultArray.indexOf(curEl) === -1){
                resultArray.push(curEl);
            }
        });
    }
    console.log(resultArray);
}

function uniteUnique(arr) {
    var resultArray = [];
    var curArray;
    for (var i = 0; i < arguments.length; i++) {
        curArray = arguments[i];
        curArray.map(checkElement(curEl, resultArray));
    }
    console.log(resultArray);
    return resultArray;
}

function checkElement(value, array) {
    if (array.indexOf(value) === -1) {
        array.push(value);
    }
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

/**
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]
 * uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
 */