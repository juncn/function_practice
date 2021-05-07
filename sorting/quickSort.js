// Best: O(nlogn) time | O(log n) space
// Average: O(nlogn) time | O(log n) space
// Worst: O(n^2) time | O(log n) space

const quickSort = (array, left, right) => {
  let index;

  if (array.length > 1) {
    index = partition(array, left, right); // index returned from partition
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  
  return array;
}

const partition = (array, left, right) => {
  let pivot = array[Math.floor((left + right) / 2)];
  
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(i, j, array);
      i++;
      j--;
    }
  }

  return i;
}

const swap = (low, high, array) => {
  const temp = array[low];
  array[low] = array[high];
  array[high] = temp;
}

const arr1 = [12, 11, 13, 5, 6];
const arr2 = [];
const arr3 = [-1, -4, 5, 3, 20, 0];
const arr4 = [4];

console.log(quickSort(arr1, 0, arr1.length - 1));
console.log(quickSort(arr2, 0, arr2.length - 1));
console.log(quickSort(arr3, 0, arr3.length - 1));
console.log(quickSort(arr4, 0, arr4.length - 1));