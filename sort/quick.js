// ### 5. Quick Sort
// - *Best Case:* O(n log n)
// - *Average Case:* O(n log n)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(log n) (due to the stack space in recursive calls)



// const arr=[0,-8,4,3,9,5]

// function quick(arr){

//     if(arr.length<2){
//         return arr
//     }
// let pivot = arr[arr.length-1]
// const left = []
// const right = [];



//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]

// }

// console.log(quick(arr))

// const arr = [4,1,0,9]

// function abc(arr){
//     if(arr.length< 2){
//         return arr
//     }
    
//     let pivot = arr[arr.length-1]
//     const left =[]
//     const right =[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         } else{
//             right.push(arr[i])

//         }
//     }
//     return [...abc(left),pivot,...abc(right)]
// }

// console.log(abc(arr))

const arr = [-1,0,8,91]

function quick(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let left =[]
    let right = []

    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }

    return [...quick(left),pivot,...quick(right)]
}
console.log(quick(arr))