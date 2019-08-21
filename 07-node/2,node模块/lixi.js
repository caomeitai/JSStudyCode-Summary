const http = require("http")
const url = require("url")
let server = http.createServer((req,res)=>{
   let {pathname,query} = url.parse(res.url)
   if(pathname=="/shop"){
       let arr = []
       req.on("data",(chunk)=>{
        arr.push(chunk)
       })
       req.on("end",()=>{
           console.log(arr)
          
       })
   }
   res.write("hello")
   res.end()
}) 

server.listen(3030,()=>{
  console.log("服务启动")
})
