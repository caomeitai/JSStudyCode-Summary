// for(let i=0;i<10;i++){}   //不够优雅
// ES6中iterator迭代器是个对象存在next方法，方法中有value和done属性；每next一次才可得到一个结果
// forof方法用来循环可迭代的集合，js中，常见的可迭代集合有：数组，Set，map等等...

// -------------------------------------如何将一个伪数组转成数组呢？
// 1，[...obj] 它的前提条件是obj是可迭代的
// arguments 和document.getElementsByTagName得到的伪数组还是可迭代的

// 自己模拟的伪数组
// let obj = {
//     0:"a",
//     1:"b",
//     length:2
// }
// // 直接利用Array.from将伪数组转为数组
// console.log(Array.from(obj))//[ 'a', 'b' ]
// console.log([...obj])//obj is not iterable

// 2,给伪数组加上iterator
// [Symbol.iterator](){
//     得到iterator
// }

// -----------------------------------------生成器
// 生成器
// function* read() {
//     yield 1
//     yield 2
//     yield 3
// }
// // 迭代器
// let it = read()
// console.log(it.next())//{ value: 1, done: false }
// console.log(it.next())//{ value: 2, done: false }
// console.log(it.next())//{ value: 3, done: false }
// console.log(it.next())//{ value: undefined, done: true }

// -------------------------------------生成器参数赋值
// function* read() {
//     let a = yield 1
//     console.log(a)
//     let b = yield 2
//     console.log(b)
//     let c = yield 3
//     console.log(c)
// }
// let it = read()
// // 第一个next的参数无处接收，下面的next会依次传递给上面的参数
// console.log(it.next(0))//{ value: 1, done: false }  a=1
// console.log(it.next(1))//{ value: 2, done: false }  b=2
// console.log(it.next(2))//{ value: 3, done: false }  c=3 
// console.log(it.next(3))//{ value: undefined, done: true }

// --------------------------------生成器解决异步问题
// const fs = require("fs").promises
// function* read(){
//   let age = yield fs.readFile("./name.txt","utf8")
//   yield fs.readFile(age,"utf8")
// }
// let it = read()

// 都能成功读取到文件中内容
// console.log(it.next())//{ value: Promise { <pending> }, done: false }
// it.next().value.then(data=>console.log(data))//data--->age.txt

// 都能成功读取到文件中内容
// let {value,done} = it.next()
// console.log(value)// Promise { <pending> }
// console.log(done)//false

// resolve会将pending态变成成功态
// Promise.resolve(value).then(data=>console.log(data))//age.txt

// ----------------------------------嵌套读取文件
// const fs = require("fs").promises
// function* read(){
//   let age = yield fs.readFile("./name.txt","utf8")
//   yield fs.readFile(age,"utf8")
// }
// let it = read()

// 方案一：
// let {value,done}  = it.next()
// Promise.resolve(value).then(data=>{
//     // console.log(data)//age.txt
//     let {value,done} = it.next(data)//next参数传递中给了上面声明的变量age
//     Promise.resolve(value).then(data=>console.log(data))//1222
// })

// 方案二：
// it.next().value.then(data=>{
//     it.next(data).value.then(data=>console.log(data))//1222
// })

// ---------------------------------------上面利用generator解决异步也会出现promise嵌套问题
// 诞生Co库,它不再需要迭代器，只需要co库将生成器包一下就可以直接then来解决异步问题啦
let fs = require("fs").promises
function* read(){
  let c =  yield fs.readFile("./name.txt","utf8")
  return  yield fs.readFile(c,"utf8")
}
let co = require("co")
co(read).then(data=>console.log(data))




