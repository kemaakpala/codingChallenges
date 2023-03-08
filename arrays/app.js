/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  // throw 'Not implemented!';
  return this.map((num) => num * num)
};

// or 
// more verbose solution
Array.prototype.square2 = function () {
  const length = this.length;
  const results = new Array(length);

  for (let i = 0; i < length; i++) {
    results[i] = this[i] * this[i];
  }

  return results;
};

// selection sort (Sorting Algorithm)
/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
function selectionSort(arr) {
  // Iterate through the unsorted portion of the array.
  for (let i = 0; i < arr.length; i++) {
    // Initialize index of min element to the start
    // of the unsorted section.
    let minIndex = i;
    // Find the min element.
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found min element with the first element of the
    // unsorted section.
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

console.log(selectionSort([9, 3, 6, 2, 1, 11])) //[1,2,3,6,9,11]
console.log(selectionSort([12, 16, 14, 1, 2, 3])) // [1,2,3,12,14,16]


// STACK: Array Based Solution
class Stack {
  constructor() {
    this.stackItems = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this.stackItems.push(item)
    return this.stackItems.length;
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    return this.stackItems.pop();
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return !this.stackItems.length;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.stackItems[0]
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.stackItems.length;
  }
}