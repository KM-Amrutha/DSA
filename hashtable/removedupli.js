

// function duplicate(arr){
//     const obj ={}
//     const res=[]
//     for(let i=0;i<arr.length;i++){
//         let char = arr[i]

//         if(!obj[char]){
//             obj[char] = true
//             res.push(char)
//         }
//     }
//     console.log('hashtable :', obj)
//      return res
// }
// console.log(duplicate('madam'))
// ------------------------------------------frequency kaanan-------------------------------//
// function frequency(str){
//     const hashtable={}
//     for(let i=0;i<str.length;i++){
//         const char = str[i]

//         hashtable[char] = (hashtable[char] || 0)+1
//     }
// return hashtable
// }
// console.log(frequency('malayalam'))

// -----------------------------------duplicate undo nokkan----------------------------------------//

// function hasduplicates(arr) {
//     let hashtable = {};
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (hashtable[num]) {  // If already in hash table, return true
//             return true;
//         }
//         hashtable[num] = true;
//     }
//     return false;
//  }
// console.log(hasduplicates([4,1,5,8,4,1])) 


