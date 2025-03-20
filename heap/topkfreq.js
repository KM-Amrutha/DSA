class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break; 
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);
        return min;
    }

    heapify(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left][0] < this.heap[smallest][0]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right][0] < this.heap[smallest][0]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.heapify(smallest);
        }
    }

    size() {
        return this.heap.length;
    }

    getHeap() {
        return this.heap;
    }
}

function topKFrequent(nums, k) {
    let freqMap = new Map();

    // Step 1: Count frequency of each number
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Min-Heap to store top K elements
    let minHeap = new MinHeap();

    for (let [num, freq] of freqMap.entries()) {
        minHeap.insert([freq, num]); // Store as [frequency, num]

        if (minHeap.size() > k) {
            minHeap.extractMin(); // Remove least frequent element
        }
    }

    // Step 3: Extract top K frequent elements from heap
    let result = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin()[1]); // Extract number
    }

    return result.reverse(); // Return in descending order
}

// Example
console.log(topKFrequent([1,1,1,2,2,3,3,3,3], 2)); // Output: [3, 1]
