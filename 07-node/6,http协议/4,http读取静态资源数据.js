let http = require("http")
let url = require("url")
let path = require("path")
let fs = require("fs")
// 服务器返回给客户端有数据分两类：json(json字符串)  静态资源数据（html,css,js,img...）
let server = http.createServer((req,res)=>{
   // console.log(url.parse(req.url)) 
   // console.log(url.parse(req.url,true)) //true直接将query变成对象，不要querystring模块啦
   let {pathname} = url.parse(req.url,true)
   let absPath =  path.join(__dirname,pathname)
   console.log(absPath)//使用absPath得到绝对路径

   // 第一个参数可以是路径，可以是文件，也可是文件夹
   fs.stat(absPath,(err,statObj)=>{
      // 如果没有该路径
     if(err){
        console.log(err)  //的到路径错误，不存在的信息
        res.statusCode = 404  //返回状态码
        res.end("not found")  //页面显示响应内容
        return ;  //结束响应程序
     }
   console.log(statObj)  //得到的是文件状态信息  里面mode代表是文件还是否
   })
})

server.listen(3000,()=>{
   console.log("服务器跑起来了") 
})