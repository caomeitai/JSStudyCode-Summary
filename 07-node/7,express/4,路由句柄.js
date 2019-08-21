
// 路由句柄指的就是回调函数  (req,res)=>res.send("你好，碳尼阿爸")

// req.url可得到路径名pathname与查询字符串query
// 现在的req，res是在原来基础上进行了封装  里面添加很多新的方法，属性

// 1,对于一个路由句柄可以设置多个，第二个回调函数并没有起作用
// const express = require("express")
// const app = express()
// app.get("/getuser",(req,res)=>{
//     res.send("你好，碳尼")  //你好，碳尼
// },(req,res)=>{
//     res.send("你好，碳尼阿爸")
// })
// app.listen(3000)



// 2,想让第二个回调函数起作用，那么就要用到第三个参数，叫next, 
// 需要在第一个回调函数中，调用next()，就会执行下一个回调函数。
const express = require("express")
const app = express()
// 出现错误，原因是：在res.send中封装了res.setHeader(),res.write,res.end  
// 如下调用会发生重复设置响应头
app.get("/getuser",(req,res,next)=>{
    res.send("你好，碳尼")  //你好，碳尼
    next()  //Cannot set headers after they are sent to the client
},(req,res)=>{
    // res.send("你好，碳尼阿爸")//解决就是不再有res.send()
    console.log("你好，碳尼阿爸")
})
app.listen(3000)