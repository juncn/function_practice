function isPalindrome(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return (str === str.split('').reverse().join(''));
}

console.log(isPalindrome('hello'));
console.log(isPalindrome('level'));
console.log(isPalindrome('A car, a man, a maraca'));