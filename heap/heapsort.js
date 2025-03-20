
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

heapsort(array){
    let sorted = []
    for(let num of array){
        this.insert(num)
    }

    for(let i=0;i<arr.length;i++){
        sorted.push(this.extractmax())

    }
    return sorted;
}



}
const maxHeap = new maxheap();
// maxHeap.insert(4);
// maxHeap.insert(10);
// maxHeap.insert(8);
// maxHeap.insert(5);
// maxHeap.insert(1);

// console.log(maxHeap.heap); // Output: [10, 5, 8, 4, 1]
// console.log(maxHeap.extractmax()); // Output: 10
// console.log(maxHeap.heap); // Output: [8, 5, 1, 4]
const arr= [10, 5, 8, 4, 1]

console.log(maxHeap.heapsort(arr))