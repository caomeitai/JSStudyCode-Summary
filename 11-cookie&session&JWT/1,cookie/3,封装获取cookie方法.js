const http = require("http");
const querystring = require("querystring");

http.createServer((req,res)=>{
    let arr = [];
    // 种植cookie方法
    res.setCookie = function(key,value,options={}){
      let opts = [];
      if(options.domain){
          opts.push(`domain=${options.domain}`)//将传递的数据，都推到opts数组中
      }
      if(options.path){
        opts.push(`path=${options.path}`)//将传递的数据，都推到opts数组中
    }
      if(options.maxAge){
        opts.push(`max-age=${options.maxAge}`)
      }
      if(options.httpOnly){
        opts.push(`httpOnly=${options.httpOnly}`)
      }
      arr.push(`${key}=${value};${opts.join(";")}`)
      res.setHeader("Set-Cookie",arr)
    }
    req.getCookie=function(key){
        // console.log(req.headers.cookie)//name=tanni; age=12
        // console.log(typeof req.headers.cookie)//string  浏览器请求得到的数据都是字符串
        
        // 想要以.运算符来获取数据，就需要字符串转成对象
        // 利用querystring.parse来解析数据
        // console.log(querystring.parse(req.headers.cookie) )//{ name: 'tanni; age=12' }
        // console.log(typeof querystring.parse(req.headers.cookie) )//Object 

        // const q =querystring.parse(req.headers.cookie) //{ name: 'tanni; age=12' }
        // console.log(q.age) //undefined  此时拿不到数据
        
        // 数据有问题，可拿到name数据，得不到age的数据
        // console.log(querystring.parse(req.headers.cookie,";"))//{ name: 'tanni', ' age': '12' }
        const obj = querystring.parse(req.headers.cookie,";")//{ name: 'tanni', ' age': '12' }
        return obj[key];
    }
    if(req.url==="/write"){
        // 种植cookie
        res.setCookie("name","tanni")
        res.setCookie("age","12")
        res.end("wirte ok ~")
        return;
    }
    if(req.url==="/read"){
        console.log(req.getCookie("name"))//name可以拿到数据，age拿不到数据
        res.end(req.getCookie("name") ||'empty')//存在就获取，否则就为空
    }
}).listen(3000);



























