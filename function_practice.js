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

console.log(reverseNum(32243));