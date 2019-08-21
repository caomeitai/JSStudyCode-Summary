// const http = require("http")
// const url = require("url")
//  let server = http.createServer((req,res)=>{
//     let {pathname,query} = url.parse(req.url) 
//     // 出现乱码，解决乱码的方法
//     res.setHeader("content-type","text/html;charset=utf-8")
//     if(pathname=="/shop"){
//         res.end("<h1>商店页面</h1>")
//     }
//     if(pathname=="/cart"){
//         res.end("<h1>购物车页面</h1>")
//     }
// })
// server.listen(3030,()=>{
//     console.log("服务已启动...")
// })

let http = require("http")
let cilent = http.request({
    hostname:"localhost",
    port:3000,
    path:"/abc",
    method:"post",
    headers:{
        "Content-Type":"application/x-www-form-urlencoded"
    }

})
cilent.end("a=1&b=2&c=3")


