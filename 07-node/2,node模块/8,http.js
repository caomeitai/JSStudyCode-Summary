// http超文本传输协议  一套规则
// 客户端与服务器之间传输数据：json  html,css,js,img,mp4...
// 一般情况下，都是客户端去访问服务器；但是服务器也可主动给客户端发信息
// 1，客户端去访问服务器两种方式：浏览器  js代码

// 要想使用http模块要求引入
const http = require("http")
// 客户端请求服务器就要创建一个服务器
// req表示请求对象  res表示响应对象
let server =  http.createServer((req,res)=>{
  //  响应数据的方法write
  res.write("hello")
  res.end()  //结束响应拿到数据
})
// 监听一个服务器端口
server.listen(3000,()=>{
    console.log("服务已启动...")
})