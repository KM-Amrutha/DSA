// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// console.log(linearSearch([10, 20, 30, 40, 50], 30));

// function firstOccurrence(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(firstOccurrence([4, 2, 3, 2, 5, 2], 2));

// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([3, 1, 9, 7, 2]))

// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) return mid;
//         else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }

//     return -1;
// }

// console.log(binarySearch([1, 3, 5, 7, 9], 5));

// function firstOccurrenceBinary(arr, target) {
//     let left = 0, right = arr.length - 1, result = -1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             result = mid; 
//             right = mid - 1; 
//         } else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }

//     return result;
// }

// console.log(firstOccurrenceBinary([1, 2, 2, 2, 3, 4], 2));



// function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
//     if (low > high) {
//         return -1; // Base case: not found
//     }

//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) {
//         return mid; // Target found
//     } else if (arr[mid] < target) {
//         // Search in the right half
//         return binarySearchRecursive(arr, target, mid + 1, high);
//     } else {
//         // Search in the left half
//         return binarySearchRecursive(arr, target, low, mid - 1);
//     }
// }

// const nums = [1, 3, 5, 7, 9, 11, 13];
// console.log(binarySearchRecursive(nums, 9)); // Output: 4


// function squareRoot(n) {
//     if (n < 0) return -1; 
//     let left = 0, right = n, ans = 0;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (mid * mid === n) return mid;
//         else if (mid * mid < n) {
//             left = mid + 1;
//             ans = mid;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return ans;
// }

// console.log(squareRoot(25)); 

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1); 
// }

// console.log(factorial(5));

// function fibonacci(n) {
//     if (n === 0) return 0; 
//     if (n === 1) return 1; 
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(5));

// function power(x, n) {
//     if (n === 0) return 1; 
//     return x * power(x, n - 1); 
// }

// console.log(power(2, 3)); 
