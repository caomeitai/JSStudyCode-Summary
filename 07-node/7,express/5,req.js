// 1，req中的属性query可以将查询字符串变成对象
// const express = require("express")
// const app = express()
// app.get("/shop",(req,res)=>{
//     // 直接拿到查询字符串
//    console.log(req.query)  //{ name: 'wangcai', age: '12' }
// })
// app.listen(3000)

// 2，req中的属性path可以得到路径名
const express = require("express")
const app = express()
app.get("/shop",(req,res)=>{
    // 直接拿到路径名pathname
   console.log(req.path)  //  /shop
})
app.listen(3000)

