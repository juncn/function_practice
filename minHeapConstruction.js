class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  /**
   * Build a Min Heap from an input array of integers
   * O(n) time
   * O(1) space
   */
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  /**
   * O(log n) time
   * O(1) spacea
   */
  siftDown(currentIdx, endIdx, heap) {
    // Get childOne index
		// While not at the end of heap tree or leaf of heap tree
		// 		Get childTwo index
		// 		if there is a childTwo and childTwoValue < childOneValue
		// 			value to swap is childTwoValue
		// 		else
		/// 		value to swap is childOneValue
		// 		if valueToSwap < value at currentIdx
		// 			swap two value
		// 			update currentIdx to be index of valueToSwap
		// 			re-calculate childOne index
		// 		else 
		// 			no swap needed
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap; 
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap] < heap[currentIdx]) {
        this.swap(idxToSwap, currentIdx, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  /**
   * O(log n) time
   * O(1) space
   */
  siftUp(currentIdx, heap) {
    // Get parentNode index of node at currentIdx
    let parentIdx = Math.floor((currentIdx - 1) / 2);

    // While not at root index
    //  Compare value at parentIdx and currentIdx
    //  If currentNode < parentNode
    //    Peform swap
    //    re-calculate currentIdx and parentIdx 
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  /**
   * Peek at the heap's minimum/root value
   * O(1) time
   * O(1) space
   */
  peek() {
    return this.heap[0];
  }

  /**
   * Remove the heap's minimun/root value
   * O(log n) time
   * O(1) space
   */
  remove() {
    // Swap root value with last element in the heap
    // Pop the last element from heap array
    // Perform siftDown to correct position of swapped value
    // Return popped value
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    
    return valueToRemove;
  }

  /**
   * Insert integers in the heap
   * O(log n) time
   * O(1) space
   */
  insert(value) {
    // Insert value to the end of array
    // Perform siftUp to correct position of value in the heap tree
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

exports.MinHeap = MinHeap;