// 浏览器中的js和node中的js都是单线程
// 先执行同步代码  同步代码执行完后  先清空微任务  再去执行宏任务
// node版本是12.13.0中的结果与浏览器中一致
// node是先执行主栈中的代码，执行完，先清空一轮微任务,再执行宏任务队列中的第1个,把宏任务执行了,再次去清空微任务


// then2,then3,timer1,then1,timer2  最新版本
// then2,then3,timer1,timer2,then1  老版本
// setTimeout(()=>{
//     console.log("timer1")
//     Promise.resolve().then(data=>{
//         console.log("then1")
//     })
// })
// Promise.resolve().then(data=>{
//     console.log("then2")
//     setTimeout(()=>{
//         console.log("timer2")
//     })
// })
// Promise.resolve().then(data=>{
//     console.log("then3")
// })


// ------------------------------- setTimeout setImmediate 谁快？
// setTimeout setImmediate 执行顺序不确定，且可能与其先后顺序有关
// setTimeout(()=>{
//     console.log("setTimeout...")
// })
// setImmediate(()=>{
//     console.log("setImmediate111...")
// })


// then1，then2，timer1，timer2，then3 老版本
// then1，then2，timer1，then3，timer2 新版本
// setTimeout(()=>{
//     console.log("timer1")
//     Promise.resolve().then(data=>{
//         console.log("then3")
//     })
// })
// setTimeout(()=>{
//     console.log("timer2")
// })
// Promise.resolve().then(data=>{
//     console.log("then1")
// })
// Promise.resolve().then(data=>{
//     console.log("then2")
// })


// timer2，timer1，then3 老版本
// timer1，then3，timer2或者 timer2，timer1，then3 新版本中顺序可能会变
setTimeout(()=>{
    console.log("timer1")
    Promise.resolve().then(data=>{
        console.log("then3")
    })
},3)
setTimeout(()=>{
    console.log("timer2")
},0)  // 0 ---> 3ms  4ms


