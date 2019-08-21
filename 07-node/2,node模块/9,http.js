const http = require("http")
//  URL:http://localhost:3000/abc?name="zhangsan"#5678
//  http://是协议  http协议  https协议
//  localhost是域名
//  3000是服务器端口
//  /abc是路径名
//  name="zhangsan" 是查询字符串
// 路径名 + 查询字符串 = 路径  路径名与查询字符串之间存在着？
//  #5678 是hash模式
let server =  http.createServer((req,res)=>{
  res.write("hello")
  res.end()  
})
server.listen(3000,()=>{
    console.log("服务已启动...")
})