const express = require("express")
const path =require("path")
const app = express()

app.use(express.static(path.join(__dirname,"/")))

app.get("/jsonp",(req,res)=>{
    // res.send("alert('hello,tanni')")
  let cb =  req.query.callback //得到函数名
  
//   res.send(cb+"('hello')") //返回一个函数调用
  res.send(cb+"("+JSON.stringify({name:"tanni",age:"18"})+")")
})

app.listen(3030)