// const Koa = require("koa")
// const app = new Koa()

// app.use((ctx,next)=>{
//    console.log(1)
//    next()
// })
// app.use((ctx,next)=>{
//     console.log(2)
//     next()
//  })
//  app.use((ctx,next)=>{
//     console.log(3)
//     next()
//  })  //结果得到1,2,3
// app.listen(3000)


const Koa = require("koa")
const app = new Koa()

app.use((ctx,next)=>{
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx,next)=>{
    console.log(3)  //在没有异步时，1,3,2
    setTimeout(function(){
        console.log(3)
    })//异步会破坏洋葱模型  1,2,3
  })

app.listen(3000)