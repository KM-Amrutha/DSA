// reverse an array
// const arr = [1,2,3,4,5]
 
 
//  let mid = Math.floor(arr.length/2)
//  let temp;
//  for(let i=0;i< mid;i++){
//     temp = arr[i]
//    arr[i] =  arr[arr.length-1-i] 
//    arr[arr.length-1-i] = temp

//  }
//  console.log(arr)

// assending or descending order

// const arr = [5,8,1,6,3,4]
// let temp;
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//        if(arr[i] >arr[j]){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp

//        }

//     }
// }
// console.log(arr)

// const arr = [1, 2, 3, 4, 5, 6];
// const arr1 = [];
// let left = 0;
// let right = arr.length - 1;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr1[i] = arr[right];
//         right--;
//     } else {
//         arr1[i] = arr[left];
//         left++;
//     }
// }
// console.log(arr1)

// const arr = [11,2,13,4,5,6,7,8,9,455,888,75,76,4,32,9,-2134];
// let vendath = 0;
// for(let i=0;i<arr.length;i++){
//     let count =0;
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]> arr[i]){
//             count++
//         }
//     }
//     if(count == 3){
//         vendath = arr[i]
//     }
// }
// console.log(vendath);


// const arr = [1,2,3,4,5]
// let second =0;
// for(let i=0;i<arr.length;i++){
//     let count =0
//     for(let j=0;j<arr.length;j++){
//         if( arr[j] < arr[i]){
//             count++
//         }

//         if(count == 2){
//             second = arr[i]
//         }
//     }
// }
// console.log(second)
// const arr = [5, 1, 8, 3];

// let secondSmallest = 0;
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] < arr[i]) {  // Count how many numbers are smaller
//             count++;
//         }
//     }
//     if (count == 1) {  // Exactly one number should be smaller
//         secondSmallest = arr[i];
//     }
// }

// console.log(secondSmallest);

// const arr = [3,5,1,7]
// let second = 0
// let max = 0;
// let third = 0

// for(let num of arr){
//     if(num < max){
//         third = second
//         second = max
//         max = num
    
//     }
// else if(num < second && num !== max){
//     third = second
//     second = num
// } 
// if(num < third && num != max && num != second){
// third = num
// }

// }
// console.log(third)

// const str = 'hello world'

// let  temp =''
// let prev =''
// for(let i=0;i<=str.length;i++){
//     if(i<str.length && str[i] !=' '){
//         temp = str[i]+ temp
//     } else {
//         prev += (prev == '' ? temp:' '+temp)
//           temp =''
//     }
    
// }
// console.log(prev)

// const nestedArray = [1, 2, [3, 4, [5, 6]]];

// function calc(arr){
//     let  sum =0
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//          sum+= calc(arr[i])

//         }
//         else {
//             sum +=arr[i]
//         }
//     }
//     return sum
// }
// console.log(calc(nestedArray))

// function charFrequency(str) {
//     let freqMap = {}; // Hashmap to store frequency

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//        freqMap[char] = (freqMap[char] ||0)+1 // Increment count
//     }

//     return freqMap;
// }

// // Example
// console.log(charFrequency("hello world"));

// const arr = [1,2,3,4,5]
// const val = 5
// function bin(arr,val){
//     left =0;
//     right = arr.length-1
   
//         while(left<right){
//             let mid = Math.floor(left+right)/2

//             if(arr[mid] == val) return mid
//             if(arr[mid]< val) {left = mid+1}
//             else { right = mid-1}

//         }
//     }


// find the longest consecutive repeating characters in string




