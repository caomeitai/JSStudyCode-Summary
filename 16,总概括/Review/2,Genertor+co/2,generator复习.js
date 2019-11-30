// ----------------------------------------生成器与迭代器
// 生成器
// function* read(){
//     yield 1
//     yield 2
// }
// // 迭代器
// let it = read()
// // 迭代器需要next一下才会得到一个值
// console.log(it.next())//{ value: 1, done: false }
// console.log(it.next())//{ value: 2, done: false }
// console.log(it.next())//{ value: undefined, done: true}


// ----------------------------------生成器传参
// function* read(){
//    let a = yield 1;
//    console.log(a)
//    let b = yield 2;
//    console.log(b)
//    let c = yield 3
//    console.log(c) 
// }
// let it = read()
// // 未传递参数时a，b，c的值应该是undefined，它需要在下面next时为其传参，但是第一个next的参数无处接收
// console.log(it.next(2))//{ value: 1, done: false } 这是生成器产出 1
// console.log(it.next(1))//{ value: 2, done: false } 这是生成器产出 2
// console.log(it.next(2))//{ value: 3, done: false } 这是生成器产出 3
// console.log(it.next(3))//{ value: undefined, done: true } 这是生成器产出


// ---------------------------------------生成器读取文件
// 读取文件得到的是promise
// const fs = require("fs").promises
// // 生成器读取文件
// function* read() {
//     // 两次读取文件两次yield
//     let content = yield fs.readFile("./name.txt", "utf-8")
//     yield fs.readFile(content, "utf-8")
// }
// // 生成器调用得到迭代器
// let it = read()
// it.next().value.then((data) => {//得到的data为age.txt
//     it.next(data).value.then(
//         data => console.log(data)//1222
//     )
//   }
// )


// -------------------------------------Generator与Co库配合使用
// const fs = require("fs").promises
// function* read() {
//     let content = yield fs.readFile("./name.txt", "utf-8")
//     return  yield fs.readFile(content, "utf-8")
// }
// // 引入co库，让其与generator配合使用
// let co = require("co")
// // 直接利用co库将生成器包一下就直接.then可处理异步，处理promise
// co(read()).then(data=>console.log(data))//1222

















