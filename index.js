// // class hashtable{
// //     constructor(size){
// //         this.size = size
// //         this.table = [...Array(size)].map(()=> [])
// //      }

// //      hash(key){
// //         let total =0;
// //         for(let i=0;i<key.length;i++){
// //             total += key.charCodeAt(i)
// //         }
// // return total % this.size
// //      }


// //      set(key,value){
// //         let ind =   this.hash(key)
// //         let bucket = this.table[ind]
       

// //         for(let i=0;i<bucket.length;i++){
// //             if(bucket[i][0] == key){
// //              bucket[i][1]  = value
// //              return
// //             }
// //         }
// // bucket.push([key,value])

// //          }

// //          get(key){
// //             let ind =   this.hash(key)
// //             let bucket = this.table[ind]

// //             for(let i=0;i<bucket.length;i++){
// //                 if(bucket[i][0] == key){
// //                     return bucket[i][1]
// //                 }
// //             }
// // return undefined
// //          }

// //          remove(key){
// //             let ind = this.hash(key)
// //             let bucket = this.table[ind]

// //             for(let i=0;i<bucket.length;i++){
// //                 if(bucket[i][0] == key){
// //                     bucket.splice(i,1)
// //                     return
// //                 }
// //             }
// //          }

// //          display(){
// //             for(let i=0;i< this.table.length;i++){
// //                 if(!this.table[i] ==0){
// //                     console.log(i,this.table[i])
// //                 }
// //             }
// //          }

// // }

// // //duplicate remove
// // function sup(str){
// //     let tab = new hashtable(str.length)
// //     let arr = []
// //     for(let i=0;i<str.length;i++){
// //         let char = str[i]
// //         if(!tab.get(char)){
// //             tab.set(char,true)
// //             arr.push(char)
// //         }
// //     }
// //      return arr.join('')
// // }

// // // frequency kanan

// // function freq(str){
// //     let obj ={}
// //     for(let i=0;i<str.length;i++){
// //         let char = str[i]

        
// //         obj[char] = (obj[char] ||0) +1
// //     }
// // }


// // let h = new hashtable(5)
// // h.set('name','ammu')
// // h.set('place','palakkad')
// // h.display()
// // h.remove('place')
// // h.display()


// // class Node{
// //     constructor(value){
// //         this.value = value
// //         this.next = null
// //     }
// // }

// // class linkedlist{
// //     constructor(){
// //         this.head = null
// //         this.tail = null
// //         this.size = 0
// //     }

// // isempty(){
// //     return this.size ==0
// // }
// // getvalue(){
// //     return this.size
// // }
// // prepend(value){
// //     const node = new Node(value)
// // if(this.isempty()){
// //     this.head = node
// //     this.tail = node

// // } else{
    
// //     node.next = this.head
// //     this.head = node

// // }
// // this.size++


// // }

// // append(value){
// //     const node = new Node(value)
// //     if(this.isempty()){
// //         this.head = node
// //         this.tail = node

// //     }
// //     else{
// // this.tail.next = node
// // this.tail =node

// //     }
// //     this.size++
// // }

// // print(){
// //   let curr = this.head
// //   let value = ''

// //   while(curr){
// //     value += `${curr.value}`
// //     curr = curr.next

// //   }
// //   console.log('value is: ', value)
// // }

// // removefront(){
// //     if(this.isempty()){
// //         return null
// //     }
// //     else{
// //         this.head = this.head.next
// //         let value = this.head.value
// //         if(!this.head) {this.tail = null }
// //         this.size--
// //         return value
// //     }
// // }

// // removeback(){
// //     if(this.isempty()){
// //         return null
// //     }
// //     if(this.size == 1){
// //         this.head = null
// //         this.tail = null
// //         this.size--
// //         let value = this.head.value
// //         return value
// //     } else {
// //    let curr = this.head
// //    while(curr.next != this.tail){
// //     curr = curr.next
// //    }
// //    curr.next= null
// //    this.tail= curr
// //    let value = this.tail.value
// //    this.size--
// //    return value
// //     }
   

// // }

// // }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     print() {
//         let curr = this.head;
//         let value = '';
//         while (curr) {
//             value += `${curr.value} `;
//             curr = curr.next;
//         }
//         console.log('Value is:', value.trim());
//     }

//     removeFront() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         let value = this.head.value;
//         this.head = this.head.next;
//         if (!this.head) {
//             this.tail = null; // If list becomes empty, reset tail
//         }
//         this.size--;
//         return value;
//     }

//     removeBack() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (this.size === 1) {
//             let value = this.head.value;
//             this.head = null;
//             this.tail = null;
//             this.size--;
//             return value;
//         }

//         let curr = this.head;
//         while (curr.next !== this.tail) {
//             curr = curr.next;
//         }

//         let value = this.tail.value;
//         curr.next = null;
//         this.tail = curr;
//         this.size--;
//         return value;
//     }
// }

// module.exports = LinkedList;


class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class bst{
    constructor(){
        this.root = null
    }

    insert(value){
        let node = new Node()
        if(this.root == null){
            this.root =node
        }
        if(value < this.root.value ){
            if(this.root.left == null){
                this.root.left = value
            } else {
                this.insert(this.root.left)

            }

        }  
        if(this.root.right == null){
            this.root.right = value
        } else {
            this.insert(this.root.right)
        }
    }


    min(root){
        if(!root.left){
            return root.value
        } else {
            this.min(root.left)
        }
    }


    secondlargest(root){
        if(!root){
            return null
        }
        let parent = curr 
        let curr = this.root

        if(root.right){
            root = root.right
            parent = curr
            curr = root
        }

        if(curr.right){
            curr = curr.right
        while(curr.left){
            curr= curr.left

        }
        return curr
        
        }



return parent.value

    }

}

const binary = new bst()
binary.insert(10)
binary.insert(5)
binary.insert(15)
binary.insert(3)

