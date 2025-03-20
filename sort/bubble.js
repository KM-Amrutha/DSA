
// ### 1. Bubble Sort
// - *Best Case:* O(n)
// - *Average Case:* O(n^2)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(1)


let arr =[5,9,0,-5,3]

function abc(arr){
let swap

do{
     swap = false;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]> arr[i+1]){
        
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            swap = true
        }
    }
}
while(swap) return arr
}
console.log(abc(arr))


// const arr =[4,7,0,-1,5];

// function bubble(arr){
//     let swap
//     do{
//         swap = false;
//         for(let i=0;i<arr.length;i++){
//             if(arr[i] >arr[i+1]){
//                 [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
//                 swap = true
//             }
//         }
//     }
//     while(swap) return arr
// }
// console.log(bubble(arr))


// const arr= [8,9,5,3,1]


