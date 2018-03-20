/*  Different method to empty array
    See original post:
    https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
*/
var arrayList = [1, 2, 3, 4, 5, 6];

/* Method one */
arrayList[];

/* Method two */
arrayList.length = 0;

/* Method three */
arrayList.splice(0, arrayList.length);

/* Method four */
while(arrayList.length){
    arrayList.pop();
}

/* 
    Method one is recommended if we don't have reference to the original array.
    If we have referenced the array from different variable, then the original reference
    will remain unchanged.
*/
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];     // Created array 
var anotherArrayList = arrayList;                   // Referenced arrayList by another variable 
arrayList = [];                                     // Empty the array 
console.log(anotherArrayList);                      // Output ['a','b','c','d','e','f']

/* 
    Method two and three update all reference variable pointing to arrayList
*/
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];     // Created array 
var anotherArrayList = arrayList;                   // Referenced arrayList by another variable 
arrayList.length = 0;                               // Empty the array by setting length to 0
console.log(anotherArrayList);                      // Output []
