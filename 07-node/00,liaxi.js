const http = require("http")
const url = require("url")
const querystring = require("querystring")
let server =  http.createServer((req,res)=>{
    // console.log(req)  //IncomingMessage
   let {pathname,query} = url.parse(req.url)
   if(pathname=="/shop"){
       let arr = []
       res.on("data",(chunk)=>{
        arr.push(chunk)
       })
       res.on("end",()=>{
           console.log(arr)
       })
   }
   
})
server.listen(8080,()=>{
    console.log("服务器启动啦啦...")
})