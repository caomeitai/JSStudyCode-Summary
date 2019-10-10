const http = require("http");

// 1，种植多个cookie，利用数组形式，多个cookie之间使用,隔开['name=tanni','age=12']
// 2，存在字段配置时，cookie本身与字段之间使用;隔开，且它们共用一个引号'name=tanni;path=/write;max-age=10'
// 3，在书写方法时却是将含有字段配置的引号外还添加上[]  [ 'name=tanni;path=/write;max-age=10' ]
// 最初参数传递时的字段配置项时靠对象{}完成的
http.createServer((req,res)=>{
    let arr = [];
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
    //   console.log(opts)//[ 'path=/write', 'max-age=10' ]

    //   将opts数组转成字符串以;的符号进行分隔opts.join(";")，当然也可换其他符号
    //   console.log(`${opts.join(";")}`)//path=/write;max-age=10
    //   console.log(typeof `${opts.join(";")}`)//string

      arr.push(`${key}=${value};${opts.join(";")}`)
    //   console.log(arr)//[ 'name=tanni;path=/write;max-age=10' ]
    //   res.setHeader("Set-Cookie",[ 'name=tanni;path=/write;max-age=10' ])//这是利用方法将cookie本身与字段结合成数组
      res.setHeader("Set-Cookie",arr)
    //   这样就和写的方法最终一致啦，最初始时书写方法稍微修改了一下
    //   res.setHeader("Set-Cookie",'name=tanni;path=/write;max-age=12')//2019-10-08T13:41:06.087Z  
    //   res.setHeader("Set-Cookie",['name=tanni;path=/write;max-age=12'])//2019-10-08T13:41:06.087Z  
    }
    if(req.url==="/write"){
        // 种植cookie，利用方法setCookie()，会传递参数
        // 它除去cookie本身的值外，还有cookie相关字段options
        // res.setHeader("Set-Cookie",['name=tanni','age=12'])//种植多个cookie
        res.setCookie("name","tanni",{path:"/write",maxAge:10})
        res.end("wirte ok ~")
        return;
    }
    if(req.url==="/read"){
        res.end(req.headers.cookie ||'empty')//存在就获取，否则就为空
    }
}).listen(3000);

























