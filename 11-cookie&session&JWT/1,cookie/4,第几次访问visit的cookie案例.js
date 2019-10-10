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
    // 获取cookie方法
    req.getCookie=function(key){
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
        // 获取cookie
        res.end(req.getCookie("name") ||'empty')//存在就获取，否则就为空
    }
    if(req.url==="/visit"){
        res.setHeader("Content-type","text/plain; charset=utf-8")//解决乱码问题
        // 不能使用const
        let visit = req.getCookie("visit")
        // 根据这个来判断是否为第一次访问该路径
        if(visit){
            // console.log(typeof visit)//string
            // visit = visit+1;//这样是字符串的拼接 11
            
            // visit = visit-0+1;//实现了数值的相加  2
            // console.log(typeof visit) //number
            
            // console.log(typeof visit-0)//NaN，不是一个数值，原因是visit-0或者说visit-0+1是一个整体
            // console.log(typeof visit-0+1)// 2  NaN
            // console.log(typeof (visit-0+1))// 2  number

            visit = visit-0+1;
            // console.log(typeof visit+"")// 2  number
            console.log(typeof (visit+""))// 2  string
            // 转化的原因是设置的cookie只会是字符串
            res.setCookie("visit",visit+'',{httpOnly:true})
        }else{
            visit = 1;
            // 设置cookie visit = 1
            res.setCookie("visit","1",{httpOnly:true})
        }
        res.end(`当前是第${visit}次访问`)
    }
}).listen(3000);


























