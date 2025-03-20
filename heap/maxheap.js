
class maxheap{
    constructor(){
        this.heap = []
    }

insert(value){
    this.heap.push(value)
    this.bubbleup()
}

bubbleup(){
    let index = this.heap.length-1
    let parentindex = Math.floor((index-1)/2)
    while(index >0){

if(this.heap[index]<= this.heap[parentindex]) 
    break;
[this.heap[index],this.heap[parentindex]] = [this.heap[parentindex],this.heap[index]]
index = parentindex;
parentindex = Math.floor((index-1)/2)

}
}

extractmax(){
    if(this.heap.length === 0)return null;
    if(this.heap.length ===1) return this.heap.pop()

        let max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapyfy(0)

        return max;
}

heapyfy(index){
    let leftindex = 2*index+1;
    let rightindex = 2*index+2;

    let largest = index;

    if(leftindex < this.heap.length && this.heap[leftindex] > this.heap[largest]){
        largest = leftindex
    }
    if(rightindex< this.heap.length && this.heap[rightindex] > this.heap[largest]){
        largest = rightindex
    }
    if(largest != index){
        [this.heap[index], this.heap[largest]] = [this.heap[largest],this.heap[index]]
        this.heapyfy(largest)
    }
    
}
remove(value) {
    let index = this.heap.indexOf(value);
    if (index === -1) return false;

    this.heap[index] = this.heap.pop();
    this.heapyfy(index);
    return true;
}


heapsort(arr){
    let sorted = []

for(let num of arr){
    this.insert(num)
}
for(let i=0;i<arr.length;i++){
    sorted.push(this.extractmax())
    
}
return sorted;
}


size() {
    return this.heap.length;
  }

  getMax() {
    return this.heap[0]; // Root element (maximum value in max heap)
  }
}

  class PriorityQueue {
    constructor() {
        this.maxHeap = new maxheap();
    }

    enqueue(value) {
        this.maxHeap.insert(value);
    }

    dequeue() {
        return this.maxHeap.extractmax();
    }

    peek() {
        return this.maxHeap.getMax();
    }

    isEmpty() {
        return this.maxHeap.isEmpty();
    }
}







function findKthSmallest(arr, k) {

    const maxHeap = new maxheap();
  
    for (let num of arr) {
      maxHeap.insert(num);
  
      if (maxHeap.size() > k) {
        maxHeap.extractmax(); 
      }

    //   let kthLargest;
    //   for (let i = 0; i < k; i++) {
    //       kthLargest = maxHeap.extractMax(); // Extract max K times
    //   }
  
    //   return kthLargest;
    }
  
    return maxHeap.getMax(); // Kth smallest element
  }

const arr = [4,10,8,5,1]
console.log(maxheap.heapsort(arr))
// maxHeap.insert(4);
// maxHeap.insert(10);
// maxHeap.insert(8);
// maxHeap.insert(5);
// maxHeap.insert(1);


// console.log(maxHeap.heap); // Output: [10, 5, 8, 4, 1]
// console.log(maxHeap.extractmax()); // Output: 10
// console.log(maxHeap.heap); // Output: [8, 5, 1, 4]
// maxHeap.remove(8);
// console.log("Heap after removing 8:", maxHeap.heap);


// **Example: Task Scheduling**
const pq = new PriorityQueue();
pq.enqueue("Fix Critical Bug", 5);
pq.enqueue("Code Review", 2);
pq.enqueue("Write Documentation", 1);
pq.enqueue("Develop New Feature", 4);

console.log(pq.peek()); // Highest priority task: { task: 'Fix Critical Bug', priority: 5 }

console.log(pq.dequeue()); // Removes 'Fix Critical Bug'
console.log(pq.dequeue()); // Removes 'Develop New Feature'
console.log(pq.dequeue()); // Removes 'Code Review'
console.log(pq.dequeue()); // Removes 'Write Documentation'

console.log(pq.isEmpty()); // true

