
// const scores = [
//   ['JavaScript', 6, 2],
//   ['DS', 3, 2],
//   ['Node.js', 5, 5],
//   ['React.js', 3.5, 6],
//   ['Mongo', 5, 5],
// ];

// const result = scores
//   .map(([subject, theory, practical]) => ({
//     subject,
//     theory,
//     practical,
//     total: theory + practical,
//   }))
//   .sort((a, b) => a.total - b.total); // sort by total ascending

// console.log(result);

// const arr =[['apple',150],['orange',100],['grapes',80]]

// const obj = Object.fromEntries(arr)
// console.log(obj)
// output:  { apple: 150, orange: 100, grapes: 80 }

// const obj = { a: 1, b: 2 };
// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

//  reomove vowels in a string


// setTimeout(()=>{
//     console.log('hello');
// },1000)


// let set=setInterval(()=>{
//     console.log('intervel');
// },1000)

// setTimeout(() => {
//     clearInterval(set)
// }, 4000);
// setImmediate(()=>{
//     console.log('immediate');
// })
// process.nextTick(()=>{
//     console.log('process');
// })


//Promise chaning

// new Promise((resolve, reject) => {
//   resolve(1);
// })
// .then(result => {
//   console.log('First:', result); // 1
//   return result + 1;
// })
// .then(result => {
//   console.log('Second:', result); // 2
//   return result + 1;
// })
// .then(result => {
//   console.log('Third:', result); // 3
// });

// const str = 'india is my country'

// function abc(str){
//   let ans = str.split(' ')
//  return  ans.map((x)=> x.charAt(0).toUpperCase() + x.slice(1)).join(' ')

  
// }
// console.log(abc(str))

const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    throw new Error('sommething broke')

})

app.use((err,req,res,next)=>{
console.log('error occured', err.message)
res.status(500).send('internal server error')
next()
})





app.listen(5000)
