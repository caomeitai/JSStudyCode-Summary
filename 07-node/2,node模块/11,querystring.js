const http = require("http")
// 引进URL模块,找出路径名与查询字符串
const url = require("url")
// 想要解析查询字符串
const querystring = require("querystring")
let server =  http.createServer((req,res)=>{
// 通过url拿到查询字符串
  let {pathname,query} = url.parse(req.url)
// 利用querystring将查询字符串解析成对象
  let q = querystring.parse(query)
  console.log(q) // { name: '"xioami"' }
// 因为已解析成对象通过.运算符得到name属性
  console.log(q.name) // "xioami" 
  res.write("hello")
  res.end()  
})
server.listen(3000,()=>{
    console.log("服务已启动...")
})

