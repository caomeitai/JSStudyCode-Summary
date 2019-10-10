// 后端服务器接口为http://localhost:3000
let express = require("express")
let bodyParser = require("body-parser")// 登录时提交用户信息
let jwt = require("jsonwebtoken") 

let app = express()

let secret = 'tanni';
//配置body-parser
app.use(bodyParser.json())

//配置跨域 第一个*不要省
app.all('*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Accept,Content-Length,Origin,Authorization");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    if(req.method.toLowerCase==='options'){
       return res.end; 
    }
    next();
});

// 获取用户接口
app.get("/user",(req,res)=>{
  setTimeout(()=>{
    res.json({name:"tanni"})
  },500)
})

// 登录接口  post提交信息
app.post("/login",(req,res)=>{
  let {username} = req.body;
  if(username==='admin'){
    //登录成功
    res.json({
      code:0,
      username:"admin",
      token:jwt.sign({username:'admin'},secret,{
        expiresIn:60
      })
    })
  }else{
    // 登录失败
    res.json({
      code:1,
      data:"用户名不存在"
    })
  }
})

// 验证token的接口
app.get("/validate",(req,res)=>{
  let token = req.headers.authorization;
  // 需要验证的token，使用钥匙将解析之后的内容与token对比
  jwt.verify(token,secret,(err,decode)=>{
    if(err){
      return res.json({
        code:1,
        data:"token失效啦",
      })
    }else{
      // token合法，在使用时，需要将token的失效期延长
      res.json({
        code:0,
        username:decode.username,
        // 延长token有效期
        token:jwt.sign({username:'admin'},secret,{
          expiresIn:60
      })
    })
    }
  })

})

app.listen(3000)