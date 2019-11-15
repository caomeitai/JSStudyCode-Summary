// 仅仅是new上一个promise的类，它必有一个执行器，且中有两个参数，最初刚创建时它是处于等待态的

// 利用promise主要解决：异步并发问题；链式调用问题；如果不存在promise，之前全部靠回调函数，而回调会产生回调地狱。
// Promise是一个类，使用之前需要new，在new时需要给其传递一个执行器executor()=>{}，这个执行器会立即执行，在执行器中有两个参数：resolve，reject；二者都是函数，就可以将promise从等待态到成功态或者说失败态
// promise有一个then方法，如果是成功态，它会调用then中的第一个函数data，其参数就是成功的终值结果；如果失败的话，就调用then中的第二个函数err，其参数就是失败的原因。

// 1，仅仅new上一个类而已，只是创建
// let p = new Promise(()=>{
// })
// console.log(p)  //  Promise { <pending> }


// 2，promise本身是同步操作,.then才是异步操作中的微任务
// console.log("big hit")
// let p = new Promise(()=>{
//     console.log("bts")
// })
// console.log("txt")  //big hit  bts  txt


// 3，调用参数resolve,reject，将其从等待态转成成功或者失败态
//    promise在刚创建时处于等待态，可通过参数转成成功态或者失败态
// resolve  pending-->成功态    reject  pending--->失败态
// let p = new Promise((resolve,reject)=>{
//    resolve("旅行")
// })
// console.log(p) //Promise { '旅行' }--->成功态

// let p = new Promise((resolve,reject)=>{
//     reject("在家")
//     throw new Error("在家")
//  })
//  console.log(p) //Promise { <rejected> '在家' }--->失败态

// 4，promise上有一个then方法，它有两个参数 
//  第一个参数表示从等待态到成功态，成功的话会调用第一个函数
//  第二个参数表示从等待态到失败态，失败的话会调用第二个函数
// let p = new Promise((resolve,reject)=>{
//   resolve("有钱旅游")
// })
// p.then(()=>{
//     console.log("有闲钱") // 有闲钱
// },()=>{
//   console.log("没钱")
// })

// let p = new Promise((resolve,reject)=>{
//     reject("没钱旅游")
//   })
//   p.then(()=>{
//       console.log("有闲钱")
//   },()=>{
//     console.log("没钱") //没钱
//   })

// 5，一个promise的状态只能从等待态到成功 或者 从等待态到失败态
// let p = new Promise((resolve,reject)=>{
//     resolve("有钱旅游")
//     reject("没钱旅游")  //该代码未执行
//   })
//   p.then(()=>{
//       console.log("有闲钱") //有闲钱
//   },()=>{
//     console.log("没钱") 
//   })

// 6，.then两个参数，分别代表着两种结果；成功肯定有一个成功的结果   失败肯定有一个失败的原因
// let p = new Promise((resolve,reject)=>{
//     // resolve("有钱旅游")
//     reject("没闲钱旅游")
//   })
//   p.then((data)=>{
//       console.log(data) //有钱旅游  data得到的是成功的终值
//   },(err)=>{
//     console.log(err)   //没闲钱旅游  err得到的是失败的原因
//   })

let p = new Promise((resolve,reject)=>{
    // 扔一个错误对象那就代表着失败，会走下面err，打印出错误
    throw new Error("没钱啦...")  //Error: 没钱啦...
  })
  p.then((data)=>{
      console.log(data) 
  },(err)=>{
    console.log(err)   
  })






























































