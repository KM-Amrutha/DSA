
// ### 4. Merge Sort
// - *Best Case:* O(n log n)
// - *Average Case:* O(n log n)
// - *Worst Case:* O(n log n)
// - *Space Complexity:* O(n)



// const arr =[0,5,8,6,9]

// function mergesort(arr){
//     if(arr.length<2){
//         return arr
//     }

// let mid = Math.floor(arr.length/2)
// let left = arr.slice(0,mid)
// let right = arr.slice(mid)

// return merge(mergesort(left),mergesort(right))

// }

// function merge(left,right){
//     const sorted =[]

//     while(left.length && right.length){
//         if(left[0] <=right[0]){
//             sorted.push(left.shift())
//         } else {
//             sorted.push(right.shift())
//         }
//     }

// return [...sorted,...left,...right]
// }
// console.log(mergesort(arr))

