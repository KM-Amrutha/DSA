// l remove cheyyan

// function abc(str){


//     if(str.length ==0) return '';

//     let first = str[0] == 'l' ? '*' : str[0]
//     return first + abc(str.slice(1))

// }

// console.log(abc('lollipop'))

// sum of digits

// function sum(n){
//     if(n == 0) return 0
//     return n%10 + sum(Math.floor(n/10))
// }
// console.log(sum(1234))


// reverse a string

// function reverse a string

// function reverse(str){
//  if(str.length == 0) return ''
//  return str[str.length-1] + reverse(str.slice(0,-1))

// }

// console.log(reverse('hello'))



// power of a number

// function power(x,n){
//     if(n== 0) return 1
//     return x* power(x,n-1)
// }

// console.log(power(2,10))


// function isPalindrome(str) {
//   if (str.length <= 1) return true;
//   if (str[0] !== str[str.length - 1]) return false;
//   return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome("madam")); 

// flatten nested array
// function flatten(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]

// sum of nested array
// function nestedSum(arr) {
//   return arr.reduce((sum, val) =>
//     Array.isArray(val) ? sum + nestedSum(val) : sum + val
//   , 0);
// }

// console.log(nestedSum([1, [2, [3]]])); // 6


const arr= [['apple',150],['orange',100],['grapes',120]]

const obj = Object.fromEntries(arr)
console.log(obj)