// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
//  class linkedlist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

// empty(){
//     return this.size == 0
// }
//  getvalue(){
//     return this.size
//  }

// insert(value,index){
//     if(index <0 || index > this.size){
//         return
//     } 
//     if( index == 0){
//         this.prepend(value)
//     } 
//     else {
//         let node = new Node(value)
//         let curr = this.head;

//         for(let  i=0;i<index-1;i++){
//             curr = curr.next
//         }
//         node.next = curr.next
//         curr.next = node
        

//     }
//     this.size++
// }



// remove(index){
//     if(index <0 || index > this.size){
//         return
//     } 
//     let rem;
//     if(index == 0){
//         rem = this.head
//         this.head = this.head.next
//     } 
//     else {
//         let curr = this.head
//         for(let i=0;i< index-1;i++){
//             curr = curr.next
//         }
//          rem  = curr.next
//         curr.next = rem.next

//     }
//      this.size--;
// }

// removevalue(value){
//     if(this.empty()){
//         return null
//     } 
//     if(this.head.value == value){
//         this.head = this.head.next;
//         this.size--
//          return value
//     } 
//     else{
//         let curr = this.head
//         while(curr.next && curr.next.value != value){
//             curr = curr.next
//         } 
//         if(curr.next){
//             let rem;
//        rem.next = curr.next
//             curr.next = rem
// this.size--
// return value
//         }
//     }

//     return null
// }

// serach(value){
//     if(this.empty()){
//         return -1
//     }  else {
//         let i=0;
//         let curr = this.head
//         while(curr){
//             if(curr.value == value){
//                 return i
//             }
        //   curr = curr.next
            
//             i++
//         }
// return -1;
//        
//     }
  
// }



//  prepend(value){
//     const node = new Node(value)
//     if(this.empty()){
//         this.head = node
//     } else {
//         node.next = this.head
//         this.head = node
//     }
//     this.size++
//  }

//  append(value) {
//     const node = new Node(value);

//     if (this.empty()) {
//         this.head = node;
//     } else {
//         let prev = this.head;
//         while (prev.next) {
//             prev = prev.next;
//         }
//         prev.next = node;
//     }
//     this.size++;
// }

// print(){
//     if(this.empty()){
//         console.log('its empty')
//         return null
//     } else {
//         let curr = this.head
//         let value = ''
//         while(curr){
//             value += `${curr.value} `
//             curr = curr.next
//         }
//         console.log('values are: ', value)
//     }
// }

// }
// const link = new linkedlist

// link.prepend(10)
// link.prepend(20)

// link.print()
// link.append(80)
// link.print()


// ----------------------------------PART 2 ------------------------------//

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linked{
//     constructor(){
//         this.head = null
//         this.size = 0;
//     }

//     isempty(){
//         return this.size =0
//     }

// getvalue(){
//     return this.size

// }

// prepend(value){
//     const node = new Node(value)
//     if(this.isempty()){
//         this.head = node
//     }
//     else{
//         node.next = this.head
//         this.head = node
//     }
//     this.size++
// }

// append(value){
//     const node = new Node(value)
//     if(this.isempty()){
// this.head = node
// } else {
//     let curr = this.head
//     while(curr.next){
//         curr = curr.next
//     }
//     curr.next = node

// }
// this.size++
// }

// print(){
//     if(this.isempty()){
        
//         console.log('its empty')
//         return -1
//     }
//     else {
//         let curr = this.head
//         let value =''
//         while(curr){
            
//             value += `${curr.value} `
//             curr = curr.next
//         }
//         console.log('value is: ' , value);
//     }
// }

// search(value){
//     let curr = this.head
//     let i=0
//     while(curr){
//         if(curr.value == value){
//             return i
//         }
//         curr = curr.next
//         i++

//     }
//     return -1
    

// }


// insert(value,index){
//     if(index < 0 && index > this.size){
//         return
//     }
//     if(index == 0){
//         this.prepend(value)
//     } else {
//         const node = new Node(value)
//         const prev = this.head
//        for(let i=0;i<index;i++){
//         prev = prev.next
//        }
//        node.next = prev.next
//        prev.next = node
//        this.size++
//     }
// }

// remove(index){
//     let  remove
//     if(index < 0 && index < this.size){
//         return -1
//     }
//     else {
        
// let prev = this.head
// for(let i=0;i<index-1;i++){
//     prev = prev.next
// }
//  remove = prev.next
//  prev.next = remove.next

//     }
//     this.size--;
// }


// removevalue(value){
//     if(this.isempty()){
//         return null
//     }
    
//     if(this.head.value == value){
        
//         this.head = this.head.next
//         this.size--
//         return value
        
//     } else {
//         let rem
//         let prev = this.head
//         while(prev.next && prev.next.value != value){
//             prev = prev.next

//         }
//         if(prev.next){
//             rem = prev.next
//             prev.next = rem.next
//             this.size--
//             return value
            
//         }
//         return null
//     }
// }

// findMiddle() {
//     if (this.isempty())
//          return null;

//     let slow = this.head;
//     let fast = this.head;

//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow.value;
// }
// }
// const link = new linked

// link.prepend(10)
// link.append(20)
// link.append(30)

// link.print()


// class maxheap{
//         constructor(){
//                 this.heap = []
//         }


//         insert(value){
//                 this.heap.push(value)
//                 this.bubbleup()
//         }

//       bubbleup(){
//       let index = this.heap.length-1
//       let parentindex = Math.floor((index-1)/2)

//       while(index >0){
//         if(this.heap[index] <= this.heap[parentindex]) break;

//         [this.heap[index],this.heap[parentindex]] = [this.heap[parentindex], this.heap[index]]
//         index = parentindex

//         parentindex = Math.floor((index - 1) / 2); 
//       }
//       }

//       extractmax(){

//         if(this.heap.length === 0) return null
//         if(this.heap.length ===1) return this.heap.pop()


//         let max = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapyfy(0)

//         return max
//       }
// heapyfy(index){
//         let leftindex = 2*index+1
//         let rightindex = 2*index+2

//         let largest = index

//         if(leftindex < this.heap.length && this.heap[leftindex] > this.heap[largest]){
//                 largest = leftindex
//         }
// if(rightindex < this.heap.length && this.heap[rightindex] > this.heap[largest]){
//         largest = rightindex
// }

// if(index != largest){
//         [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
//         this.heapyfy(largest)
// }

// }

// heapsort(arr){
//         let instance = new maxheap()
//         let sorted = []
//         for(let num of arr){
//                 instance.insert(num)
//         }
//        while(instance.heap.length>0){
//         sorted.push(instance.extractmax())
//        }
//        return sorted
// }

// }

// const heap = new maxheap();
// heap.insert(10);
// heap.insert(5);
// heap.insert(20);
// heap.insert(3);

// console.log("Extract Max:", heap.extractmax()); // 20
// console.log("Heap Sort:", heap.heapsort([7, 2, 5, 1, 9])); // [9, 7, 5, 2, 1]


// class trienode{
//         constructor(){
//                 this.children = {}
//                 this.endofword = false
//         }
// }

// class Trie{
//         constructor(){
//                 this.root = new trienode()
//         }


//         insert(word){
//                 let node = this.root
//                 for(let char of word){
//                         if(!node.children[char]){
//                                 node.children[char] = new trienode
//                         }
//                         node = node.children[char]
//                }
//                node.endofword = true
//         }

//         search(word){
//                 let node = this.root
//                 for(let char of word){
//                         if(!node.children[char]){
//                                 return false
//                         }

//                         node = node.children[char]
//                 }
//                 return node.endofword;
//         }

//         startwithprefix(prefix){
//                 let node = this.root
//                 for(let char of prefix){
//                         if(!node.children[char]){
//                                 return null
//                         }
//                         node = node.children[char]

//                 }
//                  return true
//         }

// findallwordswithprefix(prefix){
//         let words = []
//         let node = this.searchprefix(prefix)
// if(node){
//         this.collectwords(node,prefix,words)
// }
// return words

// }
// searchprefix(prefix){
//         let node = this.root
//         for(let char of prefix){
//                 if(!node.children[char]){
//                         return null
//                 }
//                 node = node.children[char]
//         }
//          return node
// }

// collectwords(node,prefix,words){
//         if(node.endofword){
//                 words.push(prefix)
//         }

//         for(let char in node.children){
//                 this.collectwords(node.children[char], prefix+char,words)
//         }
// }

// }

// let trie = new Trie();

// trie.insert("cat");
// trie.insert("car");
// trie.insert("bat");
// trie.insert("ball");


// console.log(trie.search('car'))
// console.log(trie.startwithprefix('ca'))
// console.log(trie.findallwordswithprefix('ca'))

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }




// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// console.log(findLCA(root));



    
// function findHeight(root) {
//     if (!root) return -1;
//     return Math.max(findHeight(root.left), findHeight(root.right)) + 1;
// }

// function findLCA(root, p, q) {
//     if (!root || root === p || root === q) return root;
//     let left = findLCA(root.left, p, q);
//     let right = findLCA(root.right, p, q);
//     return left && right ? root : left || right;
// }

// function isFullBinaryTree(root) {
//     if (!root) return true;
//     if (!root.left && !root.right) return true;
//     if (root.left && root.right) {
//         return isFullBinaryTree(root.left) && isFullBinaryTree(root.right);
//     }
//     return false;


function removeDuplicates(arr, seen = new Set()) {
        let result = [];
    
        for (let el of arr) {
            if (Array.isArray(el)) {
                result.push(removeDuplicates(el, seen)); // Recursively process nested array
            } else {
                if (!seen.has(el)) {
                    seen.add(el);
                    result.push(el);
                }
            }
        }
    
        return result;
    }
    
    // Example usage:
    const nestedArr = [1, 2, [3, 4, [2, 3, 5], 4], 1, 5, [6, 7, 6]];
    console.log(removeDuplicates(nestedArr));
    












