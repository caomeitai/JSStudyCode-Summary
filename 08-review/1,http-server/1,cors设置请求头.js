const http = require("http")
 const app =http.createServer((req,res)=>{
    if(req.url==="/api"){
        // 跨域的解决cors就是在服务器端配置请求头
        res.setHeader('Access-Control-Allow-Origin',"*")
        // 将对象解析为字符串
        res.end(JSON.stringify({name:"wangcai"}))
    }
})

app.listen(3000,()=>{
    console.log("服务器已跑起来了")
})
