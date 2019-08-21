const express = require("express")
// 创建一个app  服务器  之前利用http.createServer()
const app = express();

// 前端路由：一个url对应一个组件；后端的路由：一个url对应一个资源
// 对于express路由分为两种：APP应用级别上的路由和router实例对象的路由
app.get("/",function(req,res){
   res.send("你好，碳尼")
})
app.get("/shop",function(req,res){
    res.send("你好，商店")
 })
 app.get("/cart",function(req,res){
    res.send("你好，购物车")
 })

// 监听3000的端口
app.listen(3000)