
class  queue{
    constructor(){
        this.array = []
    }
    enque (value){
        this.array.push(value)
    }

    deque(){
     return  this.array.shift()
    }

    isempty(){
        return this.array.length ==0
    }

    getsize(){
        return this.array.length
    }

    peek(){
        if(!this.isempty()){
            return this.array[0]
        } 
        return null
    }
    print(){
        console.log(this.array.toString())
    }
}

function reverseQueue(queue) {
    let stack = [];
    while (!queue.isempty()) {
        stack.push(queue.deque());
    }
    while (stack.length > 0) {
        queue.enque(stack.pop());
    }
}

let q = new queue();
q.enque(1);
q.enque(2);
q.enque(3);
q.enque(4);
q.enque(5);


console.log("Original Queue:");
q.print();

reverseQueue(q);

console.log("Reversed Queue:");
q.print();

