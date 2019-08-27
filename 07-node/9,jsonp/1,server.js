const express = require("express")
const app = express()

app.get("/newslist",(req,res)=>{
  // res.json({"title":"新闻1","content":"新闻内容"})//返回json数据

  // 经过jsonp包装后的数据  不能直接返回JSON对象而是转成json字符串作为函数调用的参数
  // let cb = req.query.callback //拿到函数名
  // res.send(cb+"("+JSON.stringify({"title":"新闻1","content":"新闻内容"})+")")//jsonp规定返回一个函数调用，而返回的数据作为cb的参数

  // express的jsonp语法糖
  // res.jsonp({"title":"新闻1","content":"新闻内容"})
  res.jsonp({code:"1",msg:"xxx"})
})

app.listen(3000)
