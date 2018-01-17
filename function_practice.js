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
        result = result.concat(tempArr);
    }

    return result;
}

// console.log(generateCombinatin('dog'));
// console.log(generateCombinatin('ming'));

/**
 * 4. Write a JavaScript function that returns a passed 
 * string with letters in alphabetical order.
 * 
 * Example string : 'webmaster'
 * Expected Output : 'abeemrstw'
 */

function sortStr(str) {
    var result = str.toLowerCase()
                     .replace(/\W/g, '')
                     .replace(/\d/g, '');
    result = result.split('').sort().join('');
    return result;
}

// console.log(sortStr('webmaster'));
// console.log(sortStr('1342debcga'));

/**
 * 5. Write a JavaScript function that accepts a string as a parameter and 
 * converts the first letter of each word of the string in upper case.
 */

function convertFirstLetter(str) {
    var result = str.toLowerCase()
                     .split(' ');
    for(var i = 0; i < result.length; i++) {
        result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
    }

    result = result.join(' ');
    return result;
}

// console.log(convertFirstLetter('the quick brown fox'));
// console.log(convertFirstLetter('this is a string with each letter in a word change to upper case'));

/**
 * 6. Write a JavaScript function that accepts a string as a 
 * parameter and find the longest word within the string.
 */

function findLongestWord(str) {
    var tempStrArr = str.split(' ');
    var maxLength = 0;
    var index = 0;
    var longestWord = '';
    for (var i = 0; i < tempStrArr.length; i++) {
        if (maxLength < tempStrArr[i].length) {
            maxLength = tempStrArr[i].length;
            index = i;
        }
    }
    longestWord = tempStrArr[index];
    return longestWord;
}

// console.log(findLongestWord('Web Development Tutorial'));
// console.log(findLongestWord('a b c d e f g'));

/**
 * 7.Write a JavaScript function that accepts a string as a 
 * parameter and counts the number of vowels within the string
 */

function countVowel(str) {
    str = str.toLowerCase();
    var vowels = 'aeiou';
    var count = 0;
    for(var i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;

    // One line solution
    // return str.replace(/[^aeiou]/g, '').length;
}

// console.log(countVowel('The quick brown fox'))
// console.log(countVowel('This is a string contain ten vowels'));

/**
 * 8. Write a JavaScript function that accepts a number as a 
 * parameter and check the number is prime or not.
 */
function checkPrime(num) {
    if(num <= 1) { return false; }
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(checkPrime(37));
// console.log(checkPrime(2));
// console.log(checkPrime(3));
// console.log(checkPrime(5));
// console.log(checkPrime(4));
// console.log(checkPrime(9));
// console.log(checkPrime(11));

/**
 * 9. Write a JavaScript function which accepts an argument and 
 * return the type
 */

function returnType(arg) {
    return typeof(arg);
}

// console.log(returnType(12));
// console.log(returnType('w3resource'));
// console.log(returnType(false));
// console.log(returnType({}));
// console.log(returnType(null));
// console.log(returnType(undefined));

/**
 * 10. Write a JavaScript function which returns the n rows by n columns 
 * identity matrix
 */

function createMatrix(n) {
    var result = [];
    for(var i = 0; i < n; i++) {
        var tempArr = [];
        for(var j = 0; j < n; j++) {
            if(i === j) {
                tempArr.push(1);
            } else {
                tempArr.push(0);
            }
        }
        result.push(tempArr);
    }

    for(var k = 0; k < result.length; k++) {
        console.log(result[k]);
    }

    return result;
}

// createMatrix(3);
// createMatrix(10);

/**
 * 11. Write a JavaScript function which will take an array of numbers stored and 
 * find the second lowest and second greatest numbers, respectively
 */

function findSecond(arr) {
    arr = arr.sort();
    var secondLowest = 0;
    var secondLargest = 0;
    var lowFlag = false;
    var highFlag = false;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1] && lowFlag === false) {
            secondLowest = arr[i+1];
            lowFlag = true;
        }
        if(arr[arr.length-i-1] > arr[arr.length-i-2] && highFlag === false) {
            secondLargest = arr[arr.length-i-2];
            highFlag = true;
        }
    }
    return [secondLowest, secondLargest];
}

// console.log(findSecond([1,4,5,6,3,2]));
// console.log(findSecond([2,2,3,4,5,6,6]));

/**
 * 12. Write a JavaScript function which says whether a number is perfect
 */

function perfectNum(num) {
    var divisorArr = [];
    var divisorSum = 0;

    // Find all divisors and store in array
    for(var i = 1; i <= num; i++) {
        if(num % i === 0) {
            divisorArr.push(i);
        }
    }

    // Find sum of all divisors
    for(var j = 0; j < divisorArr.length-1; j++) {
        divisorSum += divisorArr[j];
    }

    // Check if num is perfet number
    if(divisorSum === num) {
        return true;
    } else {
        return false;
    }
}

// console.log(perfectNum(6));
// console.log(perfectNum(13));
// console.log(perfectNum(28));