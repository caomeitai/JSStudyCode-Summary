const http = require("http");

// 完成服务器种植cookie--->浏览器读取cookie--->浏览器修改cookie（document.cookie）
// cookie相关字段配置

http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("welcome BTS ~")
    }
    if(req.url==="/write"){
        // 通过http头，服务器种植cookie
        // 设置cookie中的字段
        res.setHeader("Set-Cookie","name=tanni")//path默认是/，几乎接口对应网址都能够访问
        // res.setHeader("Set-Cookie","name=tanni;path=/write")
        // res.setHeader("Set-Cookie","name=tanni;max-age=10")//2019-10-08T12:39:26.238Z不再是session而是设置好的时间10s
        // res.setHeader("Set-Cookie","name=tanni;httpOnly=true")//不再能够通过document.cookie改变cookie值，但仍然可通过双击来改变



        // res.setHeader("Set-Cookie","name=tanni")
        // 种植多个cookie  使用数组形式
        // res.setHeader("Set-Cookie",['name=wangcai','age=12'])
        res.end("wirte ok ~")
        return;
    }
    if(req.url==="/read"){
        // 服务器给浏览器种植cookie，浏览器再去请求服务器时，会带上cookie
        // 服务器通过req.header.cookie来获取cookie
        res.end(req.headers.cookie ||'empty')//存在就获取，否则就为空
    }

}).listen(3000);



























