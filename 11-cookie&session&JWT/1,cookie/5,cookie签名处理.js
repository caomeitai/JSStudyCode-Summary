const http = require("http");
const querystring = require("querystring");
// 签名处理
const sign = (value)=>{//传递过来参数value
    // 利用加密算法"sha256"，将cookie值进行加密处理，并转成base64的形式。
    return require("crypto").createHmac("sha256","abc").update(value).digest("base64").replace(/\+/g,"")
}
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
    //   因为在options的字段中不存在signed，需要传递参数过来
    //   设置cookie时对其进行加密处理
      if(options.signed){
        // console.log(typeof value)//string  1,2,3,4...
        // console.log((value+"."+"xxxx"))//1.xxxx  牢记要打印的是个整体，需要扩起来
        
        // 1.gpHnS6og+oGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=  
        // console.log((value+"."+sign(value)))//在真实值后加上签名处理的字符串
        
        value = value+"."+sign(value) //NaN.fPaWRj+fFv1435oGW07zE2SITf5W6QezhjZ8alhp+vU=
      }
      arr.push(`${key}=${value};${opts.join(";")}`)
      res.setHeader("Set-Cookie",arr)
    }
    // 获取cookie方法
    req.getCookie=function(key,options={}){
        const obj = querystring.parse(req.headers.cookie,";")//{ name: 'tanni', ' age': '12' }
        // 获取cookie时也要求进行加密(签名)处理，先得到签名的标志内容
        if(options.signed){//设置时存在了签名处理，现在就需将其内容进行分割
        //  console.log(obj[key])// undefined  1.gpHnS6og oGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=
          if(obj[key]){//去除掉undefined
            // console.log(obj[key])//1.gpHnS6og oGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=
            let [value,s] = obj[key].split('.')
            // console.log(value) 
            let newSign = sign(value)
            //签名处理的值：gpHnS6og oGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU= gpHnS6og+oGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=
            //处理之后的值：gpHnS6ogoGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU= gpHnS6ogoGBB9agylSs5UOjYhAPjm/XLzWLdKp3YTU=
            // console.log(s,newSign)   
            if(s===newSign){
                return value
            }else{
                return undefined
            }   
          }
        }
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
        // 获取cookie
        res.end(req.getCookie("name") ||'empty')//存在就获取，否则就为空
    }
    if(req.url==="/visit"){
        res.setHeader("Content-type","text/plain; charset=utf-8")//解决乱码问题
        let visit = req.getCookie("visit",{signed:true})
        if(visit){
            visit = visit-0+1;
            res.setCookie("visit",visit+'',{httpOnly:true,signed:true})
        }else{
            visit = 1;
            // 设置cookie visit = 1
            res.setCookie("visit","1",{httpOnly:true,signed:true})
        }
        res.end(`当前是第${visit}次访问`)
    }
}).listen(3000);



























