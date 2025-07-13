// top k element largest
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => a - b);
  }

  remove() {
    return this.heap.shift();
  }

  peak() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function topKElements(nums, k) {
  let minheap = new MinHeap();
  console.log(minheap);
  for (let num of nums) {
    minheap.insert(num);
    if (minheap.size() > k) {
      minheap.remove();
    }
  }
  return minheap;
}

const res = topKElements([13, 333, 1, 2, 3, 5, 6, 777, 1000], 2);

// this is an example of topKLargest Element

console.log(res);

//topKSmallestElement is vice vaersa of this
