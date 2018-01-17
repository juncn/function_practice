"use strict";

/**
 * 1. Write a JavaScript function that reverse a number.
 * Example x = 32243;
 * Expected Output : 34223
 */

function reverseNum(num) {
    var strNum = num.toString().split('').reverse().join('');;
    return Number(strNum);
}

// console.log(reverseNum(32243));
// console.log(reverseNum(123456789));

/**
 * 2. Write a JavaScript function that checks
 * whether a passed string is palindrome or not
 */

function checkPalindrom(str) {
    if(str === '') {
        return false;
    } else {
        str = str.toLowerCase().replace(/\W/g, '');
        var reverseStr = str.split('').reverse().join('');
        if(str === reverseStr) {
            return true;
        }
    }
    return false;
}

// console.log(checkPalindrom('madam'));
// console.log(checkPalindrom('nurses run'));
// console.log(checkPalindrom('fox'));

/**
 * 3. Write a JavaScript function that generates 
 * all combinations of a string.
 */

function generateCombinatin(str) {
    var strLength = str.length;
    var result = [];
    var tempArr = [];

    for(var i = 0; i < strLength; i++) {
        tempArr = [str[i]];
        for(var j = 0; j < result.length; j++) {
            tempArr.push('' + result[j] + str[i]);
        }
        console.log(result);
        result = result.concat(tempArr);
    }

    console.log(result);
    console.log(result.length);
    return result;
}

generateCombinatin('dog');
generateCombinatin('ming');