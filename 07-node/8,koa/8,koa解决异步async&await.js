// 中间件中存在异步
// const Koa = require("koa")
// const app = new Koa()

// app.use(async (ctx,next)=>{
//    console.log(1)
//  // await后面是异步操作  async和await是配合使用的  就拿它和生成器与迭代器比较记忆
//     await  next()
//     console.log(2)
// })
// app.use((ctx,next)=>{
//      setTimeout(()=>{
//         console.log(3)
//      })
// }) 
// app.listen(3000)



// const Koa = require("koa")
// const app = new Koa()

// app.use((ctx,next)=>{
// //    当我们调用一个中间件时，会返回promise
//     let a = next()  //调用next()函数得到promise
//     console.log(a)  //Promise { 'hello' }
// })
// app.use((ctx,next)=>{
//     return "hello"    //将promise最初的等待态转成成功态
// })

// app.listen(3000)



const Koa = require("koa")
const app = new Koa()

// 因为next是异步的，在利用async和await时，仅仅从promise状态转成普通值
app.use((ctx,next)=>{
    let a =  next()  
    console.log(a)   // 1，Promise { 0 } --->仅仅拿到 0 数值
    // console.log(a)  // 2，Promise { 'hello' }  ---> hello
})
app.use((ctx,next)=>{
    let a = 0;
    setTimeout(()=>{
        a = 666;
    })
    return a;
    //2， return "hello"   
}) 

app.listen(3000)
