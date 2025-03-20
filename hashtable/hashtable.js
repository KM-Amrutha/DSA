// class HashTable {
//     constructor(size) {
//       this.size = size;
//       this.table = [...Array(size)].map(() => []);
//     }
  
//     hash(key) {
//       let hash = 0;
//       for (let i = 0; i < key.length; i++) {
//         hash += key.charCodeAt(i);
//       }
//       return hash % this.size;
//     }
  
//     set(key, value) {
//       const index = this.hash(key);
//       const bucket = this.table[index];
  
//       for (let i = 0; i < bucket.length; i++) {
//         if (bucket[i][0] === key) {
//           bucket[i][1] = value; 
//           return;
//         }
//       }
  
  
//       bucket.push([key, value]);
//     }
  
//     get(key) {
//       const index = this.hash(key);
//       const bucket = this.table[index];
  
//       for (let i = 0; i < bucket.length; i++) {
//         if (bucket[i][0] === key) {
//           return bucket[i][1];
//         }
//       }
  
//       return undefined; 
//     }
  
//     remove(key) {
//       const index = this.hash(key);
//       const bucket = this.table[index];
  
//       for (let i = 0; i < bucket.length; i++) {
//         if (bucket[i][0] === key) {
//           bucket.splice(i, 1); 
//           return;
//         }
//       }
//     }
//     display() {
//       for (let i = 0; i < this.table.length; i++) {
//         if (!this.table[i].length==0) {
//           console.log(i, this.table[i]);
//         }
//       }
//     }
//   }
  
  
//   const hashTable = new HashTable(5);
//   hashTable.set("name", "John");
//   hashTable.set("mane", "Joel");
  
//   hashTable.set("age", 30);
//   hashTable.set("city", "New York");
  
//   console.log(hashTable.get("name")); // Output: John
//   console.log(hashTable.get("age")); // Output: 30
//   console.log(hashTable.get("city")); // Output: New York
//   hashTable.display();
  
//   hashTable.remove("age");
//   // console.log(hashTable.get("age"));  // Output: undefined (removed)


// class hashTable{
//     constructor(size){
//         this.table =[...Array(size).map(()=> [])]
//         this.size = size
//     }
// hash(key){
//     let total =0;
//     for(let i=0;i<key.length;i++){
//         total += key.charCodeAt(i)
//     }

//     return total%this.size

// }

//     set(key,value){

//         const ind = this.hash(key)
        

//         if(!this.table[ind]){
//             this.table[ind] = []
//         }
//         const bucket = this.table[ind]
    
//         for(let i=0;i<bucket.length;i++){
//             if(bucket[i][0] == key){
//                 bucket[i][1] = value
//                 return
//             }
//         }
//         return bucket.push([key,value])


//     }

// get(key){
//     let ind = this.hash(key)
//     let bucket = this.table[ind]
//     for(let i=0;i<bucket.length;i++){
//         if(bucket[i][0] == key){
//             return bucket[i][1]
//         }
//     }
// return undefined;
    

// }

// remove(key){
//     let ind = this.hash(key)
//     let bucket = this.table[ind]
//     for(let i=0;i<bucket.length;i++){
//         if(bucket[i][0] == key){
//             bucket.splice(i,1)
//             return
//         }
//     }

// }
// display(){
//     for(let i=0;i<this.table.length;i++){
//         if(!this.table.length ==0){
//         console.log(i,this.table[i])
//     }
// }
// }
// }

// //---------------------------------------- duplicate kaanaan.......
// function duplicate(str){
//     const table = new hashTable(str.length)
//     const arr =[]

//     for(let i=0;i<str.length;i++){
//         const char = str[i]
//         if(!table.get(char)){
//             table.set(char,true)
//             arr.push(char)
//         }
//     }
//     return arr.join('')
// }


// const hash = new hashTable(1)
// hash.set('name','amrutha')
// hash.set('place','palakkad')

// console.log(hash.get('name'))
// console.log(hash.get('place'))

// hash.display()

// hash.remove('place')
// console.log(hash.get('place'))

// hash.display()

// first frequency  

function first(str) {
    const charMap = new Map();

    
    for (let char of str) {
        // charMap.set(char, (charMap.get(char) || 0) + 1);
        charMap.set(char,(charMap.get(char)  ||0) +1)
    }

    
    for (let char of str) {
        if (charMap.get(char) === 1) {
            return char;
        }
    }

    return null;
}

// Example Usage
console.log(firstNonRepeatingChar("aabbcdeff")); // Output: "c"
console.log(firstNonRepeatingChar("aabb")); // Output: null
console.log(firstNonRepeatingChar("leetcode")); // Output: "l"
