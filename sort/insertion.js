// ### 3. Insertion Sort
// - *Best Case:* O(n)
// - *Average Case:* O(n^2)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(1)


const arr = [4,0,-5,8,51]


for(let i=1;i<arr.length;i++){
 let key = arr[i]
let j=i-1
while(j>=0 && arr[j] > key){
    arr[j+1] = arr[j];
    j--

}

arr[j+1] = key


}
console.log(arr)

// const arr = [5,10,7,-6,0,8]

// for(let i=1;i<arr.length;i++){
//     let key = arr[i]
// let j=i-1
//     while(j>=0 && arr[j] > key){
// arr[j+1] = arr[j];
// j--
//     }
//     arr[j+1] =key
// }

// console.log(arr)

// const arr = [0,-5,9,10,5] 

// function insert(arr){
//     for(let i=1;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1;

//         while(j>=0 && arr[j] > key){
//             arr[j+1] = arr[j]
//             j--

//         }
//         arr[j+1] = key
//     }
    
//     return arr
// }

// console.log(insert(arr));

