// const arr= [5,3,7,1,2]

// let mid = Math.floor(arr.length /2)
// let n= arr.length
// let temp;
// for(let i=0;i<mid;i++){
// temp = arr[i]
// arr[i] = arr[n-1-i]
// arr[n-1-i] = temp
// }
// console.log(arr)

// const nestedArray = [1, 2, [3, 4, [5, 6]]];
// function calculateSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             sum += calculateSum(arr[i])
//         } else {
//             sum += arr[i]
//         }
//     }
//     return sum

// }

// console.log(nestedArray);
// console.log("sum: ", calculateSum(nestedArray));


const array = [[1, 2], [3, 4], [5, 6]];
const flattened = [];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    flattened.push(array[i][j]);
  }
}

console.log(flattened);
