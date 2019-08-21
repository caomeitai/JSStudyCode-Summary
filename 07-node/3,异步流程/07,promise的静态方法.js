// let p = new Promise((resolve,reject)=>{
// 并未执行任何
// })
// p.then()

// 在Pomise类上面，提供了几个静态方法resolve()  reject()  它们都可直接使用.运算符调用
// 1，resolve()方法
// Promise.resolve("包包").then(data=>{
//     console.log(data)
// })

// 等效于下面
// let p = new Promise((resolve,reject)=>{
//    resolve("包包")
// })
// p.then(data=>{
//     console.log(data)
// })

// 2，reject()方法  还直接使用了catch方法
// Promise.reject("穷").catch(err=>{
//     console.log(err)
// })

// 等效于下面
// let p = new Promise((resolve,reject)=>{
//     reject("穷")
//  })
//  p.catch(err=>{
//      console.log(err)
//  })

// 3，finally  最终  不管转成成功态还是失败态，都会调用finally这个方法
// Promise.resolve("闲钱").then(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log("finally")
// })

// Promise.reject("穷").catch(err=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("finally")
// })

// 首先在fs模块中有了promises类
// 4，all表示[]中的promise都成功之后才会得到终值
// let fs = require("fs").promises;//将其变为promise的那种读法，在这个api上只需.promises
// let path = require("path")
// let filepath = path.join(__dirname,"name.txt")
// let filepath1 = path.join(__dirname,"age.txt")
// Promise.all([fs.readFile(filepath,"utf8"),fs.readFile(filepath1,"utf8")]).then(data=>{
//     console.log(data)
// })

// 5，race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
let fs = require("fs").promises;//将其变为promise的那种读法，在这个api上只需.promises
let path = require("path")
let filepath = path.join(__dirname,"name.txt")
let filepath1 = path.join(__dirname,"age.txt")
Promise.race([fs.readFile(filepath,"utf8"),fs.readFile(filepath1,"utf8")]).then(data=>{
    console.log(data)  //age.txt  读取更快一些
})


















