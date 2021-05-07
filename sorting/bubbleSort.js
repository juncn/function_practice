/**
 * O(n^2) time
 * O(1) space
 */

const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

const arr1 = [1, 5, 4, 7, 0, 9];
const arr2 = [-1, -5, -6, 3, 2, 0];
const arr3 = [0];
const arr4 = [];

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));
console.log(bubbleSort(arr3));
console.log(bubbleSort(arr4));