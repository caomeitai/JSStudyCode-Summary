const express = require("express")
const app = express()

// 在访问一个路由时会先访问其中间件  
// 每个路由都有其对应的中间件，中间件也只会控制对应的路由  对于 /XXX这个路由，它会有至少走两个中间件，一个是/ 一个是/XXX

// 1，应用级别中间件  利用app对象来调用  中间件在执行时是有顺序的，谁在前就先执行谁
// app.use("/",(req,res,next)=>{
//   console.log("应用级别中间件1...")  //想要其继续往后走，那么要求next()
//   next()
// })
// app.use("/",(req,res,next)=>{
//     console.log("应用级别中间件2...")  //想要其继续往后走，那么要求next()
//     next()
// })

// 2，错误处理中间件  里面多了一个err参数
app.use((req,res,next)=>{
    console.log("错误处理中间件...")  //想要其继续往后走，那么要求next()
    // 当在next中写了参数那么它会走到错误中间件里面
    // next("hello")  //这样写是不OK的
    next(new Error("hello"))  //Error: hello
})
app.get("/",(req,res)=>{
    res.send("hello,碳尼！")
})
// 错误处理中间件
app.use((err,req,res,next)=>{
  console.log(err)
})

// 3，如果没有配置路径，所有的路由都会匹配到相当于*
// app.use((req,res,next)=>{
//     console.log("没有配置路径的中间件...")  //想要其继续往后走，那么要求next()
//     next()
// })
// app.use("*",(req,res,next)=>{
//     console.log("没有配置路径的中间件...")  //想要其继续往后走，那么要求next()
//     next()
// })


// 路由使用
app.get("/shop",(req,res)=>{
    res.send("hello,碳尼阿爸！")
})
app.listen(3000)