const express = require("express")
const router = express.Router();//拿到router的这个对象
const app = express();

// 对于express路由分为两种：APP应用级别上的路由和router实例对象的路由
//req，res与之前的原生app是不同的，在原生的基础上进行封装，里面有了更多新的方法，属性
app.get("/",function(req,res){
   res.send("你好，碳尼")
})


//Cannot GET /shop
router.get("/shop",function(req,res){
   res.send("你好，商店")
})


// 监听3000的端口
app.listen(3000)