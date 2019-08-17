// npm i express插件，express用来写接口，需要引进来使用require
let express = require("express")
// 这里就表示在当地地址  localhost：6000/getuser这个接口有数据
// 创建应用
let app = express()
// 当访问getuser接口时，操作如下
app.get("/getuser",(req,res)=>{
    // 相应一些内容
    res.json({name:"hello"})

})

// 监听端口
app.listen(3000)