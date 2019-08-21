const http = require("http")
const url = require("url")
// function(req,res)=>{}  它是一个回调函数，只有当请求发过来时才会调用
// req表示请求，是一个可读流；res表示响应，是一个可写流
let server = http.createServer((req,res)=>{
//   console.log(req)  //IncomingMessage  是一个对象
   console.log(req.url) //解析得到的是字符串
})

let port = 3000; 
server.listen(port,()=>{
    console.log("服务启动啦...")
})