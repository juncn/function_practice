/**
 * O(n^2) time
 * O(1) space
 */

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }

  return array;
}

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const arr1 = [12, 11, 13, 5, 6];
const arr2 = [];
const arr3 = [-1, -4, 5, 3, 20, 0];
const arr4 = [4];

console.log(insertionSort(arr1));
console.log(insertionSort(arr2));
console.log(insertionSort(arr3));
console.log(insertionSort(arr4));