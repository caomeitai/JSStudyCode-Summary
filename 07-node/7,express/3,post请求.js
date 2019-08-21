const express = require("express")
// 将要使用的包引进来
const bodyParser = require("body-parser")
const app = express()

// 在post请求时，接收请求数据   之前利用流
// 解析时以表单形式进行解析
app.use(bodyParser.urlencoded({ extended: false }))
// 解析时以json形式进行解析
app.use(bodyParser.json())

app.post("/getuser",(req,res)=>{
    // 需要接收到请求数据即name，age  应用了中间件
    console.log(req.body)  //{ name: 'tanni', age: '12' }
    console.log(req.body.name)
    console.log(req.body.age)
    res.send("你好，碳尼阿爸")
})
app.listen(3000)