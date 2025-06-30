// const str = 'Hello world'
// let space  = 0
// for(let i = 0 ; i < str.length ; i++){
//   if(str[i] === ' '){
//     space = i
//   }
// }

// const str = 'apple,orange,32,,joekl,332,dssas'

// const res = str.split(',').map((item) => item == ''? null:item)

// console.log(res)

//double revrse linked list

// class Node{
//     constructor(value){
//         this.value = value
//         this.next =null
//         this.prev = null
//     }
// }


// class linked{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size =0;
//     }
// isempty(){
//     return this.size ==0
// }
// getvalue(){
//     return this.size
// }

// prepend(value){
//     const node = new Node(value)
//     if(this.isempty()){
//         this.head = node
//         this.tail = node
//     } else {
       
        
//         node.next =this.head
//         this.head.prev = node
//         this.head =node

//     }
//     this.size++
// }

// append(value){
//     const node = new Node(value)
//     if(this.isempty()){
//         this.head= node
//         this.tail = node
//     } 
//     else {
//         this.tail.next = node
//         node.prev = this.tail
//         this.tail = node
       

//     }
//     this.size++
// }

// reverse(){
//     let curr = this.head
//     let prev = null
//     while(curr){
//    let next = curr.next
// curr.next = prev
// curr.prev = next
// prev = curr
// curr = next

//     }
//     this.tail = this.head
//     this.head = prev


// }




// print (){
//     if(this.isempty()){
//         console.log('its empty')
//         return null
//     } else {
//         let curr = this.head
//         let value =''

//         while(curr){
//             value += `${curr.value} `
//             curr = curr.next
//         }
//         console.log('values are:' ,value)
//     }
// }
// }

// const link = new linked();
// link.prepend(10);
// link.append(20);
// link.append(30);
// link.print();
// link.reverse()
// link.print()

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null

//     }
// }

// class link{
//     constructor(){
//         this.head = null
//         this.size =0
//     }

//      isempty(){
//         return this.size ==0
//     }

//     getvalue(){
//         return this.size
//     }


//     prepend(value){
//         const node = new Node(value)
//         if(this.isempty()){
            
//             this.head = node
//         } 
//         else {
//        node.next = this.head 
// this.head = node
//         }
// this.size++

//     }

// append(){
//     const node = new Node(value)
//     if(this.isempty()){
//         this.head= node
//     } 
//     else {
//         let curr = this.head
//         while(curr){
//             curr = curr.next
//         }
        
//     }
// }
// }



// class Stack{
//     constructor(size){
//         this.array = []
//         this.size = size;
//     }

//     push(value){
//         return this.array.push(value)
//     }

//     pop(){
//         return this.array.pop()
//     }

//     isempty(){
//         return this.array.length == 0
//     }
// peek(){
//     return this.array[this.array.length-1]
// }

// print(){
//     console.log(this.array.toString())
// }

// reverse(str){
//     let sta = new Stack()
//     for(let i=0;i<str.length;i++){
//         sta.push(str[i])
//     }
//     let rev =''

//     while(!sta.isempty()){
//         rev += sta.pop()
//     }
// return rev
// }


// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)

// stack.print()
// stack.pop()
// stack.print()

// console.log(stack.reverse('ammu'))


// function bubble(arr){
//     let swap;
//     do{
//         swap = false;

//     for(let i=0;i<arr.length;i++){
       

//         if(arr[i] > arr[i+1]){
//             [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//             swap = true;
//         }
//     }
// }
//   while(swap){
//     return arr
//   }
// }

// console.log(bubble(arr))

// second largest in an array





// function secondLargest(arr) {
//     let n = arr.length;
//     let first = -Infinity, second = -Infinity;

//     for (let i = 0; i < n; i++) {
//         if (arr[i] > first) {
//             second = first; 
//             first = arr[i]; 
//         } else if (arr[i] > second && arr[i] !== first) {
//             second = arr[i]; 
//         }
//     }

//     return second;
// }
// const arr= [87,5,0,-78,9,64]
// console.log(secondLargest(arr))

//sort names

// function sortNames(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
               
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// let names = ['ammu', 'poppy','dhoni','charlie'];
// console.log(sortNames(names)); 

   // ascending order of  strings

//    const arr = ['poppy','charlie','chakkara'];

//    function insert(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j= i-1

//         while(j >= 0&& arr[j].toLowerCase() > key.toLowerCase()){
//             arr[j+1] = arr[j]
//             j--
//         }

//         arr[j+1] = key
//     } 
//     return arr
//    }

//    console.log(insert(arr));


// ascending order of selection sort



// function selection(arr){
    
//     let n= arr.length;
//     for(let i=0;i<n-1;i++){
//         let min = i
//         for(let j=i+1;j<n;j++){

//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]]
//     }

//     return arr
// }

// console.log(selection(arr))

// Find the Kth smallest element using Selection Sort 

// Sort a List of Names Alphabetically

// const arr = ['chakkara', 'poppy','ammu','asdfafasfv']


// const arr =[-8,0,1,5,9]
// let k=5
// function quick(arr){
// if(arr.length <2) {
//     return arr
// }

//     let pivot = arr[arr.length-1]
// let left = []
// let right = []

// for(let i=0;i<arr.length-1;i++){
//     if  (arr[i] < pivot ){
//         left.push(arr[i])

//     } else {
//         right.push(arr[i])
//     }
// }
//  return [...quick(left),pivot,...quick(right)]

// }
// let names = ['ammu','arya','aparna','anila','athira'];
// let sortedNames = quick(names);
// console.log("Sorted Names:", sortedNames)

// function firstNonRepeatingChar(s) {
//    let charCount = {};
   
//    for (let char of s) {
//        charCount[char] = (charCount[char] || 0) + 1;
//    }

//    for (let char of s) {
//        if (charCount[char] === 1) {
//            return char;
//        }
//    }
//    return null;
// }

// console.log(firstNonRepeatingChar("swiss")); 
// Output: 'w'

// function twoSum(nums, target) {
//    let numMap = {};

//    for (let i = 0; i < nums.length; i++) {
//        let complement = target - nums[i];
//        if (numMap.hasOwnProperty(complement)) {
//            return [numMap[complement], i];
//        }
//        numMap[nums[i]] = i;
//    }
//    return [];
// }

// console.log(twoSum([2, 7, 11, 15], 9)); 

// function findDuplicates(nums) {
//    let numCount = {};
//    let duplicates = [];

//    for (let num of nums) {
//        if (numCount[num]) {
//            duplicates.push(num);
//        } else {
//            numCount[num] = 1;
//        }
//    }
//    return [...new Set(duplicates)];
// }

// console.log(findDuplicates([1, 2, 3, 1, 2, 4]));
//  Output: [1, 2]



// class Node{
//    constructor(value){
//       this.value = value
//       this.left = null
//       this.right = null
//    }
// }

// class bst{
//    constructor(){
//       this.root = null
//    }

//     isempty(){
//    return this.size == 0
//     }

//     getsize(){
//       return this.size
//     }

//   insertvalue(value){
//    let newNode = new Node(value)
//    if(this.isempty()){
//       this.root = newNode
//    }else {
//       this.insert(this.root,newNode)
//    }
//   }

//   insert(root,newnode){
//    if(newnode.value< root.value){
//       if(root.left == null){
//          root.left = newnode
//       } else {
//          this.insert(root.left,newnode)
//       }
//    } else {
//       if(root.right == null){
//          root.right = newnode
//       } else {
//          this.insert(root.right,newnode)
//       }
//    }
//   }

//   preorder(root){
//    console.log(root.value)
//    this.preorder(root.left)
//    this.preorder(root.right)
//   }

//   inorder(root){
//    this.inorder(root.left)
//    console.log(root)
//    this.inorder(root.right)
//   }

//   postorder(root){
//         this.postorder(root.left)
//         this.postorder(root.right)
//         console.log(root.value)
//   }

//   bfs(){
//    let arr = []
//    arr.push(this.root)

//    while(arr.length){
//       let curr = arr.shift()
//       arr.push(curr)
//       console.log(curr.value)
//    } 
//    if(curr.left){
//       arr.push(curr.left)
//    }
//    if(curr.right){
//       arr.push(curr.right)
//    }
   

//   }



// }

// const bst1 = new bst()
// bst.insertvalue(5)
