// function binary (arr,n){
//     let left = 0
//     let right = arr.length-1

//     while(left <= right){
//         let mid = Math.floor((left+right)/2)
//         if(arr[mid] == n) return mid

//          if(arr[mid] < n ) left = mid+1

//         else  right = mid-1

//     }
//     return -1
// }
// console.log(binary([2,5,6,7,8,12,15,19], 15))



// function binarySearchRecursive(arr, left, right, target) {
//     if (left > right) return -1;

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) 
//         return binarySearchRecursive(arr, mid + 1, right, target);
    
//     return binarySearchRecursive(arr, left, mid - 1, target);
// }

// let arr = [2, 5, 6, 7, 8, 12, 15, 19];
// let target = 15;
// console.log(binarySearchRecursive(arr, 0, arr.length - 1, target));
