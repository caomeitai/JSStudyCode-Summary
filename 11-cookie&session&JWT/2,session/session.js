const http = require("http");
const querystring = require("querystring");
let uuid = require("uuid")//种植唯一id号
let cartName = "tian"
// 先把session存储到内存中  后面会把session数据存储到数据库
let session = {};

// session是基于cookie的，它是cookie返回一个session_id  肯定的是由卡名来得到卡号id

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
    req.getCookie=function(key,options={}){
        let obj = querystring.parse(req.headers.cookie,";")
        return obj[key];
    }
    if(req.url ==="/eat"){
      let id = req.getCookie(cartName)//获取cookie
      if(id){//有卡，将卡上信息存到session这个对象中，根据卡号找到其存储内存区域
        // console.log(id)
        // session[id].mny = session[id].mny -100//给session上挂上id这个字段，且id对应的session上挂上mny这样的变量
        session[id].mny -= 100//给session上挂上id这个字段，且id对应的session上挂上mny这样的变量
        res.end("current money is $"+session[id].mny)
      }else{//首次访问，没有卡，生成卡，且会种植cookie
        let cartId = uuid.v4()//没有卡时会直接生成一个卡号
        // console.log(cartId)// 3a607bf9-605c-4b44-a33b-06a92e44d04b
        session[cartId] = {mny:500}//在种植cookie时要给id附上的变量有一个初始值
        res.setCookie(cartName,cartId)//种植了cookie
        res.end("current money is $500")
      }
    }
}).listen(3000);



























