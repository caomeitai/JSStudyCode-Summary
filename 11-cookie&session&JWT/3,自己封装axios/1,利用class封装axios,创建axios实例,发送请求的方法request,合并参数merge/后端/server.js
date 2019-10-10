// 后端服务器接口为http://localhost:3000
let express = require("express")
let bodyParser = require("body-parser")// 登录时提交用户信息

let app = express()

//配置body-parser
app.use(bodyParser.json())

//配置跨域
app.all(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Content-Length,Origin,Authorization");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method=='OPTIONS'){
       return res.end; 
    }
    next();
});


// 请求用户接口
app.get("/user",(req,res)=>{
  res.json({name:"tanni"})
})



app.listen(3000)