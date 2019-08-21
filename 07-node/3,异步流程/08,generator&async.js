// 生成器的概念  生成器生成迭代器  让程序中断  不会把{}中的代码全部执行
// generator  生成器   ES6中的语法  *必须处于function和read函数之间即可

//这是生成器 
// function * read(){
//     yield  1;  //仅仅产出，而没有执行
// }
// // 这是迭代器  调用生成器就会生成迭代器   it就是迭代器
// let it = read()


// 生成器可直接产出好多值，迭代器只能next一下，拿到一值，next一下，拿到一值
// function * read(){
//     yield  1;  
//     yield  2;  
//     yield  3;  
//     yield  4;  
// }
// // 调用生成器就是迭代器
// let it = read()
// // 迭代器需要每next一下拿一下值，不会一下执行完。
// console.log(it.next())  //{ value: 1, done: false }
// console.log(it.next())  //{ value: 2, done: false }
// console.log(it.next())  //{ value: 3, done: false }
// console.log(it.next())  //{ value: 4, done: false }
// console.log(it.next())  //{ value: undefined, done: true }

// 在生成器中如果出现let a 这种声明时，或者console.log()时，它都需要传递参数，最终的值也都是传递过来的参数
// function * read(){
//    let a = yield 1;
//    console.log(a);  //5
//    let b = yield 2;
//    console.log(b);  //6
//    let c = yield 3;
//    console.log(c)  //7
// }
// let it = read()
// // 第一步next传参没有意义
// // console.log(it.next(2))//{ value: 1, done: false }
// console.log(it.next())//{ value: 1, done: false }
// console.log(it.next(5))  //{ value: 2, done: false }
// console.log(it.next(6)) //{ value: 3, done: false }
// console.log(it.next(7)) //{ value: undefined, done: true }


// 利用生成器来读取文件,将其转成promise
// const fs = require("fs").promises
// const path = require("path")
// let filepath = path.join(__dirname,"name.txt")
// function * read(){
//     // 利用生成器产出读取文件的异步操作
//   let content = yield fs.readFile(filepath,"utf8") //它是异步的  转成 promise 来解决  
//   yield fs.readFile(path.join(__dirname,content),"utf8")
// }
// let it =read()
// // console.log(it.next())  //{ value: Promise { <pending> }, done: false }
// // 利用.运算符来拿到promise  进行.then操作
// it.next().value.then((data)=>{
//     // console.log(data)  //age.txt
// //    console.log(it.next(data))    //将data作为参数传给第一个let值   { value: Promise { <pending> }, done: false }再次生成promise
//     it.next(data).value.then((data)=>{
//         console.log(data)  //12
//     })
// })

// const fs = require("fs").promises
// const path = require("path")
// let filepath = path.join(__dirname,"name.txt")
// function * read(){
//   let content = yield fs.readFile(filepath,"utf8")   
//   let age =yield fs.readFile(path.join(__dirname,content),"utf8")
//   return age
// }
// let it =read()
// it.next().value.then((data)=>{  //age.txt  将其作为参数再次传给content
//     it.next(data).value.then((data)=>{  //12  将其作为参数再次传给age
//        let r = it.next(data) //这里return了一个age  12
//        console.log(r)  //又因为it.next()返回一个对象  { value: '12', done: true }
//     })
// })

// 为解决上面问题，出现co库
// const fs = require("fs").promises
// const path = require("path")
// let filepath = path.join(__dirname,"name.txt")
// function * read(){
//   let content = yield fs.readFile(filepath,"utf8")   
//   let age =yield fs.readFile(path.join(__dirname,content),"utf8")
//   return age
// }
// let co = require("co")
// // 需要使用co将生成器代入  只需一步.then就可拿到age.txt中的内容
// co(read()).then(data=>{
//     console.log(data)
// })

// async+await  只需将生成器*去掉  将yield换成await，在之前的生成器前加上async  另外直接调用之前的迭代器.then即可
const fs = require("fs").promises
const path = require("path")
let filepath = path.join(__dirname,"name.txt")
async function  read(){
  let content = await fs.readFile(filepath,"utf8")   
  let age =await fs.readFile(path.join(__dirname,content),"utf8")
  return age
}
read().then(data=>{
    console.log(data)
})