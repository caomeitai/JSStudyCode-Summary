let http = require("http")
let url = require("url")
let path = require("path")
let fs = require("fs")
let server = http.createServer((req,res)=>{
   let {pathname} = url.parse(req.url,true)
   let absPath =  path.join(__dirname,pathname)
   console.log(absPath)

   // 第一个参数可以是路径，可以是文件，也可是文件夹
   fs.stat(absPath,(err,statObj)=>{
      // 如果没有该路径
     if(err){
        console.log(err)  //的到路径错误，不存在的信息
        res.statusCode = 404  //返回状态码
        res.end("not found")  //页面显示响应内容
        return ;  //结束响应程序
     }
     if(statObj.isFile()){
      //   如果读取的是一个文件  这里面有三个请求：html,css,js
      fs.createReadStream(absPath).pipe(res)//创建一个可读流读取文件  利用管道将数据流给res
     }
   console.log(statObj)  //得到的是文件状态信息  里面mode代表是文件还是否
   })
})

server.listen(3000,()=>{
   console.log("服务器跑起来了") 
})