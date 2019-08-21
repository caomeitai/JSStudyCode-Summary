const http = require("http")
const url = require("url")
const querystring = require("querystring")
let server =  http.createServer((req,res)=>{
  let {pathname} = url.parse(req.url)
  // console.log(pathname)//得到客户端的路径名
  // 验证当服务器得到客户端的路径名时，将请求正文从客户端流到服务器
  if(pathname=="/abc"){
    let arr = [];//空桶，将每滴水放进来
    // 在流水过程中，有两个事件，一个叫data事件，一个为end事件
    // 如何注册data事件  chunk相当于每一滴水
    req.on("data",(chunk)=>{
     arr.push(chunk)//将水推到空桶里
    })
    req.on("end",()=>{
      // console.log(arr)  //[ <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33> ]
      let str = Buffer.concat(arr)//连接buffer，将[]去掉
      // console.log(str) //<Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>
      console.log(str.toString()) //a=1&b=2&c=3转成字符串即请求正文就拿到了
      // 要想服务器将请求正文转成一个对象在扔给客户端
      let obj = querystring.parse(str.toString())
    //  res.write(obj)//直接这样将一个对象响应给客户端是不OK的
      res.write(JSON.stringify(obj))
      res.end()  
    })

  }
  
  
})
server.listen(3000,()=>{
    console.log("服务已启动...")
})

