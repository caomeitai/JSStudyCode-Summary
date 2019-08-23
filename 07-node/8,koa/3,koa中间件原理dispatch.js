// koa中间件原理
// let app = {
//     middlewares:[],
//     //use本身是一个函数 ，而use里面也是一个函数，形参为函数，fn
//     use(fn){
//         // 将use里面的函数全部推到容器中
//       this.middlewares.push(fn)
//     }
// }

// // use中的函数不能立马执行，将函数全部放在一个容器里面
// app.use((next)=>{
//   console.log(1)
//   console.log(2)
//   next()
// })
// app.use((next)=>{
//     console.log(3)
//     console.log(4)
//     next()
//   })
//   app.use((next)=>{
//     console.log(5)
//     console.log(6)
//     next()
//   })

// //   [ [Function], [Function], [Function] ]
//   console.log(app.middlewares)  

// // 当访问/时，会执行中间件，确定执行哪一个方法（中间件）
// function dispatch(index){

//     // 判断是不是最后一个中间件，如果是，那么直接返回，不再执行next
//    if(app.middlewares.length === index) return;
//     // 在app.middlewares中存放的都是函数
//    let router = app.middlewares[index]
// // 当存在next()时，要求之前在app.middlewares中存放的函数里
// // 的参数为函数,next会使其执行下一个中间件，那么就是在函数中调用dispatch
//    router(()=>{dispatch(index+1)})

// }  
// dispatch(0)  //通过传递索引来得到函数执行




// 练习代码    模拟koa中间件原理
let app = {
    middlewares:[],
    use(fn){
    // 就想着把函数全部放到容器里
    //  app.middlewares.push(fn)
     this.middlewares.push(fn)
    }
}
app.use((next)=>{
    console.log(1)
    console.log(2)
    next()
})
app.use((next)=>{
    console.log(3)
    console.log(4)
})
app.use((next)=>{
    console.log(5)
    console.log(6)
})

// 啥时候执行，当访问/时，执行容器中的哪一个方法  [ [Function], [Function], [Function] ]
function dispatch(index){
    if(app.middlewares.length ===index)  return;//当是最后一个中间件时，要求直接结束，不再执行next函数
  let a = app.middlewares[index]
  a(()=>{dispatch(index+1)})
}
dispatch(0)