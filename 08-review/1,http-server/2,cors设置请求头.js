const http = require("http")
 const app =http.createServer((req,res)=>{
    // 跨域的解决cors就是在服务器端配置头
    // 允许那些客户端来访问我
    // res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader('Access-Control-Allow-Origin',"http://127.0.0.1:5500")
    //允许添加那些头，来访问我
    // res.setHeader('Access-Control-Allow-Headers',"*")//所有头都OK
    res.setHeader('Access-Control-Allow-Headers',"token,tanni")//携带参数头
    // 允许那些方法来访问我
    res.setHeader('Access-Control-Allow-Methods',"OPTIONS,PUT,DELETE")
    // 可以每隔多长时间来发送一次options请求
    res.setHeader('Access-Control-Max-Age','1800') 
    // 允许客户端携带凭证cookie
    res.setHeader('Access-Control-Allow-Credentials',true)
    if(req.method ==="OPTIONS"){
        return res.end()//可解决在options请求下的警告
     }
    if(req.url==="/api"){
        // console.log(req.headers)//存在cookie头
        // 种植cookie的头设置
        res.setHeader("Set-Cookie","name='xiaoqiang'")
        // 将对象解析为字符串
        res.end(JSON.stringify({name:"wangcai"}))
    }
})

app.listen(3000,()=>{
    console.log("服务器已跑起来了")
})
