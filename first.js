// function abc(arr,tar){
//     return search(arr,tar,0,arr.length-1)  
// }

// function search(arr,tar,left,right){
//  if(left > right) { return -1  }

//     while(right<left){
//         let mid = Math.floor((left+ right)/2)

//         if(arr[mid] == tar) { return mid}
//         else  if (tar < arr[mid]){
//             right = mid +1
//         } else {
//             left = mid-1
//         }

//     }
// }

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next= null;

//     }
// }

// class linked{
//     constructor(){
//         this.head = null
//         this.size= 0
//     }

//     isempty(){
//         return this.size ==0
//     }
//     getvalue(){
//         return this.size
//     }
// prepend(value){
//     const node = new Node(value)
//   if(this.isempty()){
//     this.head = node
//   } else{

//      node.next = this.head
//     this.head = node;
//   }
//     this.size++
// }

// print(){
//     if(this.isempty()){
//         console.log('node is empty')
//     } else {
//         let curr = this.head;
//         let values = '';
//         while(curr){
//             values += `${curr.value } `
//             curr= curr.next
//         }
//         console.log('values are ', values)
//     }
// }

// }

// const link = new linked;

// link.prepend(10)

// link.print()

// link.prepend(20)
// link.prepend(30)

// link.print();

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class linked {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isempty(){
        return this.size ==0
    }
getvalue(){
    return this.value;
}

insert(value,index){
    if(index <0 || index > this.size){
        console.log('invalid index');
        return 
    } if(index == 0){
            this.prepend(value)
    } else {
        const node = new Node(value)
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next

        }
        node.next = prev.next
        prev.next = node
    }
    this.size++
}

remove(index){
    if(index <0 || index > this.size){
        return null;
    }
    let rem
        if(index == 0){
            rem = this.head;
            this.head = this.head.next
        } else {

            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }

            rem = prev.next;
            prev.next = rem.next

        }
        this.size--
        return rem.value;
    }

    removevalue(value){
        if(this.isempty()){
            console.log('no node found')
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next;
            this.size--;
            return value;

        } else {

            let prev = this.head;
            while(prev.next && prev.next.value !== value){
              prev = prev.next
        } if(prev.next){
            let rem;
            rem = prev.next;
            prev.next = rem.next;
            this.size--;
            return value;
        }
            
    }
    return null
    }


search(value){
    if(this.isempty()){
        return -1
    } 
    let i=0;
    let curr = this.head
    while(curr){
        if(curr.value == value){
            return i
        }
        curr = curr.next;
        i++

    }
    return -1;
}

duplicate(){
    let curr = this.head;
    while(curr && curr.next){
        if(curr.value == curr.next.value){
            curr.next = curr.next.next
        } 
        else {
            curr = curr.next
        }
    }

}

//stack
removeLast() {
    if (!this.head) return; // Empty list

    if (!this.head.next) {
        this.head = null; // Only one node in the list
        return;
    }

    let current = this.head;
    while (current.next.next) { // Stop at second-last node
        current = current.next;
    }
    current.next = null; // Remove last node
}


//queue

append(value){
    const node = new Node(value)

    if(this.isempty()){
        this.head = node
    } else {
        let prev = this.head
        while(prev.next){
            prev = prev.next;
        }
        prev.next = node;

    }
    this.size++
}

prepend(value){
    const node = new Node(value);
    if(this.isempty()){
        this.head = node;
    } else {
        node.next= this.head
        this.head = node
    }
    this.size++

}

findmiddle(){
    let first = this.head
    let last = this.head
    while(first && first.next){
        first = first.next.next
        last = last.next
    }

    return last.value
}

print(){

        if(this.isempty()){
            console.log('its empty')
        } else{
            let curr = this.head;
            let value = '';
            while(curr){
                value += `${curr.value} `;

                curr = curr.next;
            }
            console.log('value is: ', value)

        }
    
}

reverse (){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next 
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
}



} 
const link = new linked;
link.print()
link.append(20)
link.append(30)

link.print()
link.insert(10,0);
link.insert(60,3)
link.print()
link.insert(1,7)
link.print()

console.log(link.remove(10))
console.log(link.remove(0))
link.print()






