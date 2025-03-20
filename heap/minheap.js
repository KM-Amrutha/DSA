class minheap{
    constructor(){
        this.heap =[]
    }

    insert(value){
        this.heap.push(value)
        this.bubbleup()
    }

    bubbleup(){
        let index = this.heap.length-1
        let parent = Math.floor((index-1)/2)

        while(index>0){
            if(this.heap[index] >= this.heap[parent]) break;
            [this.heap[index],this.heap[parent]]  = [this.heap[parent], this.heap[index]]
            index = parent
            parent = Math.floor((index-1)/2)
        }
        }    

    extractmin(){
        if(this.heap.length == 0) return null;
        if(this.heap.length ==1) return this.heap.pop();

        let min = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapyfy(0)

        return min;
    }

heapyfy(index){

    let leftindex= 2*index+1;
    let rightindex = 2*index+2;
    let smallest = index

    if(leftindex < this.heap.length && this.heap[leftindex] < this.heap[smallest]){
        smallest = leftindex
    }
    if(rightindex < this.heap.length && this.heap[rightindex] < this.heap[smallest]){
        smallest = rightindex
    }
    if(smallest!= index){
        [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]]
        this.heapyfy(smallest)
      }
        }

}

const h = new minheap()


const minHeap = new minheap();
minHeap.insert(4);
minHeap.insert(10);
minHeap.insert(8);
minHeap.insert(5);
minHeap.insert(1);
minHeap.heapyfy(0)
console.log(minHeap.heap); // Output: [1, 4, 8, 10, 5]
console.log(minHeap.extractmin()); // Output: 1
console.log(minHeap.heap); 


